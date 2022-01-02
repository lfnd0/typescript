// interface

/*
  As interfaces são recomendadas em projetos
  de bibliotecas, pois, são mais extensíveis.
  E quando são utilizados objetos/classes (POO).
*/

// definição
interface IGame {
  title: string;
}

interface IDlc {
  extra: string;
}

// intersection/extends
interface IGameCollection extends IGame, IDlc { }

class ICreateGame implements IGameCollection {
  title: string;
  extra: string;

  constructor(title: string, extra: string) {
    this.title = title;
    this.extra = extra;
  }
}

// function
interface IgetSimilars {
  (title: string): void
}

// diferenças

// não é possível extender uma interface de tipos primitivos
interface IId extends number { }

// não é possível definir tuplas na interface
interface ITuple {
  0: number;
  1: number;
}

[0, 1, 1] as ITuple;

// diversas declarações por escopo
interface IJquery {
  a: string;
}

interface IJquery {
  b: string;
}

const $: IJquery = {
  a: 'juice',
  b: 'food'
}
