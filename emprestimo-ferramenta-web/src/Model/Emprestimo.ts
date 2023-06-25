import Ferramenta from "./Ferramenta";
import Amigos from "./Amigos";
class Emprestimo{
    private dataDeEmprestimo: Date;
    private dataDeDevolucao: Date ;
    private dataEntregue!: Date ;
    private ferramenasEmprestadas: Array<Ferramenta>;
    private amigo: Amigos;

constructor(dataDeEmprestimo: Date, dataDeDevolucao: Date, ferramenasEmprestadas: Array<Ferramenta>, amigo: Amigos){
    this.dataDeEmprestimo = dataDeEmprestimo;
    this.dataDeDevolucao = dataDeDevolucao;
    this.ferramenasEmprestadas = ferramenasEmprestadas;
    this.amigo = amigo;
}
set DataEntregue(data: Date){
    if(this.dataEntregue != undefined){
    this.dataEntregue = data;
    }
}
getQuantosDiasFaltaParaDevolver(): number{
    let dataAtual = new Date();
    let dias = (this.dataDeDevolucao.getTime() - dataAtual.getTime()) / (1000 * 3600 * 24);
    return dias;
}
ferramentaEstaEmprestada(ferramenta: Ferramenta): boolean{
    return this.ferramenasEmprestadas.includes(ferramenta);
}
}
export default Emprestimo;