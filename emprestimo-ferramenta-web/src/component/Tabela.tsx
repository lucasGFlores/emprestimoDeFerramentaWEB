import React from "react";
import "@/styles/tabela.css";

interface KeyUpdate { [key: string]: string | number |Date |undefined}
interface Amigos extends KeyUpdate  {id:number,nome: string, numero:string,email:string}
interface Emprestimo extends KeyUpdate {id:number,dataDeEmprestimo: Date, dataDeDevolucao: Date, dataEntregue?: Date, nomeDeAmigo : string}
interface Ferramenta extends KeyUpdate {id:number,nome:string, preco: number, fabricante: string}
interface Fabricante extends KeyUpdate  {id:number,nome:string, cnpj: string}

interface TabelaProps {
  dados: Amigos[] | Ferramenta[] | Fabricante[] | Emprestimo[]; 
}

function Tabela ({ dados }: TabelaProps){
    let keys = Object.keys(dados[0]);
  return (
    <table className="tabela">
      <thead>
        <tr>
          {keys.map((item) => (
            <th>{item.toUpperCase()}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dados.map((item: Amigos  | Ferramenta | Fabricante | Emprestimo) => {
          return listagem(item);
        })}
      </tbody>
    </table>
  );
};
function listagem(item: Amigos  | Ferramenta | Fabricante | Emprestimo){
    let keys = Object.keys(item);
    return (
      <tr key={item.id}>
        {keys.map((key: string) => {
          return <td>{item[`${key}`]?.toString() ?? "Não informado"}
          </td>;
        })}
      </tr>
    );
}

export default Tabela;
