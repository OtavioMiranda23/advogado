"use client";
import { Button } from "@/components/button";
import { Container } from "./layoutStyle";
import Image from "next/image";
import { Valores } from "@/components/valores";

export default function Home() {
  return (
    <>
    <Container>
      <div className="containerInfo">
        <p> - Mateus Feitosa</p>
        <h1> Seu parceiro confiável na busca pela justiça</h1>
        <p> Defendendo seus direitos com excelência e compromisso, com soluções Legais Sob Medida para sua Tranquilidade e Justiça</p>
        <div className="containerButtons">
          <Button text="Contate-me" />
          <Button text="Conheça mais" primary={false} />
        </div>
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
   <Valores/>
    </>
  );
}
