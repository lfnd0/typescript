<h1 align="center">
  Minicurso de TypeScript
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

## Aula 1 – Introdução

### O que é o TypeScript?
- É um *superset* do JavaScript;
- Adiciona novas *features* ao JavaScript;
- Basicamente é tipagem estática;
- Compila para o JavaScript;
- Permite adoção gradual (arquivos com extensão `.ts`, podem "conviver" com arquivos com extensão `.js`).

### Por que usar o TypeScript?
- Evita resultados inesperados:
  ```{typescript}
  function sum(a, b) {
      return a + b;
  }

  sum(1, 2); // 3
  sum('1', '2'); // 12
  ```
- Avisa se estiver fazendo algo errado:
  ```{typescript}
  console.log(4 / []);
  ```
- Funciona como uma espécie de documentação:
  ```{typescript}
  type Plataform = 'Windows' | 'MacOS' | 'Linux';
  type Feature = 'Single-player' | 'Multi-player' | 'Co-op';
  
  interface GameDetails {
    id: string;
    title: string;
    description: string;
    plataforms: Plataforms[];
    features: Feature[];
  }
  ```
- Deixa usa IDE extremamente poderosa.

### Desvantagens do TypeScript:
- Necessita ser compilado (mais passos no *tooling*);
- Aprendizado incial dos tipos e boas práticas;
- Erros nem sempre são muito claros, ou são muito grandes.

## Link útil:
Site oficial do [TypeScript](https://www.typescriptlang.org/).
