"use client"
import Image from "next/image";
import { Container } from "./style";
export function Regua() {
  return (
    <Container>
      <Image
        src="/instagram.svg"
        alt="Instagram icone"
        width={24}
        height={24}
      />
      <Image
        src="/facebook.svg"
        alt="Instagram icone"
        width={24}
        height={24}
      />
      <Image
        src="/tiktok.svg"
        alt="Instagram icone"
        width={24}
        height={24}
      />
    </Container>
  );
}
