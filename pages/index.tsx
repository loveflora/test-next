import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Seo from "./components/Seo";
import Link from "next/link";

interface MovieTypes {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({ results }: any) {
  const router = useRouter();

  const onClick = (id: number, title: string) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        // query: { id, title },
        // 쿼리 꼭 안써도 되나...?
      },
      // 표시하고 싶은 형식
      `/movies/${title}/${id}`
    );
  };

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await // 구조분해할당으로 인해 results의 값이 나옴
  //     (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <Container className="container">
      <Seo />
      {results?.map((v: MovieTypes) => (
        <div
          onClick={() => onClick(v.id, v.original_title)}
          className="movie"
          key={v.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${v.poster_path}`} />
          <h4>{v.original_title}</h4>
        </div>
      ))}
    </Container>
  );
}

// 2) SSR (데이터가 유효할 때, 화면이 보여지게 됨) => loading 화면 없이 API가 완료되도록 기다린 후에 모든 정보를 보여줌
// 더이상 페이지에 loading은 없고, 영화정보는 전부 reactJS가 아닌 HTML로 보여줌.
// nextJS가 자동으로 props들을 넣어주고, reactJS가 props를 받아다가 흡수(hydrate) !
//? getServerSideProps 에서 API를 fetch 해옴.
export async function getServerSideProps() {
  //   // 오직 벡엔드에서만 실행됨
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
  .movie {
    cursor: pointer;
  }
  .movie img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .movie:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  .movie h4 {
    font-size: 18px;
    text-align: center;
  }
`;
