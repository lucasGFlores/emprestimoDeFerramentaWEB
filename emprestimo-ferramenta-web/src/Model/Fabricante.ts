import Ferramenta from "./Ferramenta";
class Fabricante{
    private id:number;
    private nome: string;
    private cnpj: string;
    private ferramentas: Array<Ferramenta>;
    constructor(id:number,nome: string, cnpj: string, ferramentas: Array<Ferramenta>){
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.ferramentas = ferramentas;
    }

     adicionarFerrmenta(ferramenta:Ferramenta) {
        this.ferramentas.push(ferramenta);
    }
    getFerramentas(){
        return JSON.stringify(this.ferramentas);
    }
}
export default Fabricante;