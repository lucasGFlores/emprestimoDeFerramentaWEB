declare namespace JSX {
    interface IntrinsicElements {
      Tabela: TabelaProps;
    }
  }
  
  interface TabelaProps {
    dados: Amigos[];
  }
  
  interface Amigos {
    nome: string;
    numero: string;
    email: string;
  }
  