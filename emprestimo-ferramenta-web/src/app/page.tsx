import Image from "next/image";
import styles from "./page.module.css";
import Tabela from "@/component/Tabela";
import Amigos from "@/Model/Amigos";
import "@/styles/Principal.css";
export default function Home() {
  let amigos = new Amigos(1, "teste", "teste", "teste");
  return (
    <div className="containerTable"
    >
      <div className="boton"
  
      >
        <h1> roger</h1>
        <h1> roger</h1>
        <h1> roger</h1>
      </div>

      <div className="tabelaBox"
      style={
        {
          backgroundColor: "#F0E9E6",
          color: "#000",
          width: "70%",
          height: `500px`,
          borderRadius: "10px",
        }
      }
      >
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
  );
}
