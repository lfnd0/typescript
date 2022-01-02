// type

/*
  O uso de types é o mais recomendado na maioria das
  vezes. Possui grande consistência, além de evitar
  o surgimento de problemas, com a declaração de
  variáveis que possuem o mesmo nome.
*/

// definição
type TGame = {
  title: string;
}

type TDlc = {
  extra: string;
}

// intersection
type TGameCollection = TGame & TDlc & { content: boolean };

// implements
class TCreateGame implements TGameCollection {
  title: string;
  extra: string;
  content: boolean;

  constructor(title: string, extra: string, content: boolean) {
    this.title = title;
    this.extra = extra;
    this.content = content;
  }
}

// function
type TgetSimilars = (title: string) => void;

// diferenças

// permite declarar tipos primitivos
type TId = string | number;

// pode declarar tuplas normalmente
type TTuple = [number, number];
[0, 1] as TTuple;

// apenas uma declaração por escopo
type TJquery = { a: string };
type TJquery = { b: string };
