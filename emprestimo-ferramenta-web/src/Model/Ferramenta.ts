class Ferramenta{
    private id:number;
    private nome: string;
    private preco: number;
    private fabricante: string;
    constructor(id: number,nome: string, preco: number, fabricante: string){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
    }
}
export default Ferramenta;