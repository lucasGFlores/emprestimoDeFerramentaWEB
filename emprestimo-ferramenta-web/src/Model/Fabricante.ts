import Ferramenta from "./Ferramenta";
class Fabricante{
    private nome: string;
    private cnpj: string;
    private ferramentas: Array<Ferramenta>;
    constructor(nome: string, cnpj: string, ferramentas: Array<Ferramenta>){
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