"use client";
import {  Container, Marcador, Title } from "./layoutStyle";

export default function Home() {
  return (
    <Container>
      <Marcador>
        <div></div>
        Mateus Feitosa</Marcador>
      <Title>O Melhor Advogado de São Paulo</Title>
      <p>
        {" "}
        Lorem Ipsum has been the industrys standard dummy text ever since the
        1500s.
      </p>
      <button>Contate-me</button>
    </Container>
  );
}
