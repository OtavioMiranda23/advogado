"use client";
import { Container } from "./style";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <Image src="/logo.png" 
      alt="logo"
      width={40}
      height={40}
      />
      <ul>
        <a href="#">
          <li>Serviços</li>
        </a>
        <a href="#">
          <li>Contate</li>
        </a>
      </ul>
    </Container>
  );
}
