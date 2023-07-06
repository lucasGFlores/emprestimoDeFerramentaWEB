'use client'
import Image from "next/image";
import styles from "./page.module.css";

import Tabela from "@/component/Tabela";
import Amigos from "@/Model/Amigos";
import "@/styles/Principal.css";
import BotaoLista from "@/component/BotaoLista";
import { useState } from "react";

export default async function Home() {
  
  let amigos = new Amigos(1, "teste", "teste", "teste");

  const dadosAmigos = [
    {
      id: 1,
      nome: "Nome 1",
      numero: "123456789",
      email: "email1@example.com",
    },
    {
      id: 2,
      nome: "Nome 2",
      numero: "987654321",
      email: "email2@example.com",
    },
    JSON.parse(JSON.stringify(amigos)),
    JSON.parse(JSON.stringify(amigos)),
    JSON.parse(JSON.stringify(amigos)),
  ];

  const dadosFerramentas = [
    {
      id: 1,
      nome: "Ferramenta 1",
      preco: 10,
      fabricante: "Fabricante 1",
    },
    {
      id: 2,
      nome: "Ferramenta 2",
      preco: 20,
      fabricante: "Fabricante 2",
    },
    {
      id: 3,
      nome: "Ferramenta 3",
      preco: 30,
      fabricante: "Fabricante 3",
    },
    {
      id: 4,
      nome: "Ferramenta 4",
      preco: 40,
      fabricante: "Fabricante 4",
    },
    {
      id: 5,
      nome: "Ferramenta 5",
      preco: 50,
      fabricante: "Fabricante 5",
    }];

    const [dados, setDados] = useState<any[]>([]);

  return (
    <div style={{ backgroundColor: "#D1D4D8", height: "915px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", padding: "40px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BotaoLista ke name="Amigos" icon="amigos" onClick={() => console.log("teste")} />
            <BotaoLista name="Ferramentas" icon="ferramenta" />
            <BotaoLista name="Emprestimos" icon="emprestimo" />
          </div>
          <div
            className="tabelaBox"
            style={{
              backgroundColor: "#F0E9E6",
              color: "#000",
              width: "100%",
              height: `500px`,
              borderRadius: "10px",
            }}
          >
            <div style={{ padding: "5px", paddingBottom: "10px" }}>
              <h1 style={{ textAlign: "center" }}>Amigos</h1>
            </div>
            <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              <Tabela
                dados={[
                  {
                    id: 1,
                    nome: "Nome 1",
                    numero: "123456789",
                    email: "email1@example.com",
                  },
                  {
                    id: 2,
                    nome: "Nome 2",
                    numero: "987654321",
                    email: "email2@example.com",
                  },
                  JSON.parse(JSON.stringify(amigos)),
                  JSON.parse(JSON.stringify(amigos)),
                  JSON.parse(JSON.stringify(amigos)),
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
