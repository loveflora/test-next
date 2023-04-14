import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <Nav>
      <Logo
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        onClick={() => router.push("/")}
      />
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 120px;
  display: flex;
`;
