import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function Navbar() {
  // const router = useRouter();
  return (
    <Nav>
      <Link href="/sdad">Home</Link>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
