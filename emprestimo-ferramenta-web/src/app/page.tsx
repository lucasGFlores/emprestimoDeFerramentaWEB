import Image from "next/image";
type Amigos = {nome: string, numero:string,email:string}
import styles from "./page.module.css";
import Tabela from "@/component/Tabela";
export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          backgroundColor: "#F0E9E6",
          color: "black",
          width: "70%",
          height: "500px",
          borderRadius: "10px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
        }}>
       <Tabela dados={[
  { nome: "Nome 1", numero: "123456789", email: "email1@example.com" },
  { nome: "Nome 2", numero: "987654321", email: "email2@example.com" }
]}/>
        
      </div>
    </main>
  );
}
