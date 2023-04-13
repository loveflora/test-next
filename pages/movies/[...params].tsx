import React from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

// 컴포넌트 내부에서 router 사용하면, router는 프론트에서만 실행됨. (client side에서만 실행됨)
export default function Detail({ params }: any) {
  const router = useRouter();
  // server에서는 아직 배열이 아님 -> || []  붙여줘야 함.
  const [title, id] = params || [];

  console.log(params);

  return (
    <div>
      <Seo title={title} />{" "}
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
