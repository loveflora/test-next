import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  // children : 하나의 component를 또 다른 component 안에 넣을 때 사용할 수 있음.
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
