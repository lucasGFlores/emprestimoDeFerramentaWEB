interface KeyUpdate { [key: string]: string | number |Date |undefined}
export default interface Amigos extends KeyUpdate  {id:number,nome: string, numero:string,email:string}
