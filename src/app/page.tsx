"use client";
import { Button } from "@/components/button";
import { Container } from "./layoutStyle";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="containerInfo">
        <p> - Mateus Feitosa</p>
        <h1> Seu parceiro confiável na busca pela justiça</h1>
        <p> Defendendo seus direitos com excelência e compromisso</p>
        <Button 
        text="Contate-me"
        />
      </div>

      <div className="containerFoto">
        <Image
          src="/fotocapa.png"
          alt="Foto Mateus"
          width={644}
          height={791}
          className="img"
        />
      </div>
    </Container>
  );
}
