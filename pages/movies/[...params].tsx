import React from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Image from "next/image";
import styled from "styled-components";

// 컴포넌트 내부에서 router 사용하면, router는 프론트에서만 실행됨. (client side에서만 실행됨)
export default function Detail() {
  const router = useRouter();

  // server에서는 아직 배열이 아님 -> || []  붙여줘야 함.
  // const [title, id, path] = params || [];
  const { title, id, path } = router.query;

  const myLoader = ({ src }: { src: string }) => {
    return `https://image.tmdb.org/${src}`;
  };

  return (
    <Container>
      <Seo title={typeof title === "string" ? title : ""} />
      {/* 
      typeof title === "string" && title
      string | boolean(false) 라서 ERROR
      */}
      <h4>{title || "Loading"}</h4>
      <Image
        // 엥 ,,, 여기에는 또 / slash 추가해야하네...
        src={`t/p/w500/${path}`}
        alt=""
        width={500}
        height={500}
        style={{ width: "100%", height: "auto" }}
        loader={myLoader}
      />
      <Title>{title}</Title>
    </Container>
  );
}

// https://image.tmdb.org/t/p/w500qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg
// https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg

// export function getServerSideProps({ params: { params } }: Params) {
//   // export function getServerSideProps(ctx: any) {
//   // console.log(ctx);
//   return {
//     props: {
//       params,
//     },
//   };
// }

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Title = styled.div`
  color: white;
`;
