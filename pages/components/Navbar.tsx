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
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 120px;
  display: flex;
`;
