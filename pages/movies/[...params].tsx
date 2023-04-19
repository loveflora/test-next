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
  const { title, path, vote, date, overview } = router.query;

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
      <ImgWrapper>
        <Image
          src={`t/p/w500/${path}`}
          alt=""
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
          loader={myLoader}
          className="img"
        />
      </ImgWrapper>
      <Content>
        <Title>{title || "Loading..."}</Title>
        <Info>
          <div>
            <h3>개봉</h3> <p>{date}</p>
          </div>
          <div>
            <h3>평점</h3> <p>{vote}</p>
          </div>
        </Info>
        <div>{overview}</div>
      </Content>
    </Container>
  );
}

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

  .img {
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    display: flex;
    justify-content: center;
  }
`;

const ImgWrapper = styled.div`
  width: 240px;
  height: 340px;
  margin: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  & > div {
    width: 260px;
    color: white;
    margin: 20px 0;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
`;

const Info = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;

  & > div {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;

    & > h3 {
      color: gray;
    }

    & p {
      color: white;
    }
  }
`;

const Overview = styled.div`
  color: white;
  padding: 20px;
`;
