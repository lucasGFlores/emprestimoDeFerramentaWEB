class Ferramenta{
    private nome: string;
    private preco: number;
    private fabricante: string;
    constructor(nome: string, preco: number, fabricante: string){
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
    }
}
export default Ferramenta;