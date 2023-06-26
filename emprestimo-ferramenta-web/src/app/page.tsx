import Image from "next/image";
import styles from "./page.module.css";
import Tabela from "@/component/Tabela";
import Amigos from "@/Model/Amigos";
export default function Home() {
  let amigos = new Amigos(1,"teste","teste","teste");
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
       {/* <Tabela dados={[
  {id:1, nome: "Nome 1", numero: "123456789", email: "email1@example.com" },
  {id:2, nome: "Nome 2", numero: "987654321", email: "email2@example.com" },
  JSON.parse(JSON.stringify(amigos)),
]}/> */}
        
      </div>
    </main>
  );
}
