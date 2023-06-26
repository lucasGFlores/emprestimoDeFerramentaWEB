import ClassUpdate from "./Supers/ClassUpdate";
class Amigos extends ClassUpdate {
  private id: number;
  private nome: string;
  private numero: string;
  private email: string;
  constructor(id: number, nome: string, numero: string, email: string) {
    super();
    this.id = id;
    this.nome = nome;
    this.numero = numero;
    this.email = email;
  }
}
export default Amigos;
