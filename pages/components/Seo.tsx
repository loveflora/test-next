import Head from "next/head";
import { MovieTypes } from "../types/MovieType";

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title> {title} | Next Movies</title>
    </Head>
  );
}
