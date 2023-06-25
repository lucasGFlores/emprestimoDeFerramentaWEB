import React from "react";
import "@/styles/tabela.css";
interface KeyUpdate { [key: string]: string | number}
interface Amigos extends KeyUpdate  {nome: string, numero:string,email:string}
interface Emprestimo  {dataDeEmprestimo: Date, dataDeDevolucao: Date, dataEntregue?: Date}
interface Ferramenta {nome:string, preco: number, fabricante: string}
interface Fabricante extends KeyUpdate  {nome:string, cnpj: string}

interface TabelaProps { //colocar no principal (override em todos os componentes)
  dados: Amigos[] ; 
}
function teste(){}
function Tabela ({ dados }: TabelaProps){
    let keys = Object.keys(dados[0]);
    let func: Array<Function> = [teste,(item: Amigos) => {
        let keys = Object.keys(item);
        return (
          <tr key={item.nome}>
            {keys.map((key: string) => {
              return <td>{item[`${key}`]}</td>;
            })}
          </tr>
        );
      }]
  return (
    <table className="tabela">
        {/*  essa parte deixa na principal*/}
      <thead>
        <tr>
          {Object.keys(dados[0]).map((item) => (
            <th>{item.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      {/* ---------------------------------- */}

      {/*  essa parte vai ser refeita por Override*/}
      <tbody>
        {dados.map((item: Amigos) => {
          let keys = Object.keys(item);
          return (
            <tr key={item.nome}>
              {keys.map((key: string) => {
                return <td>{item[`${key}`]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      {/*----------------------------------------*/}
    </table>
  );
};

export default Tabela;
