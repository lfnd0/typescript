interface IGame {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: IGame = {
  title: 'The Last of Us',
  description: 'The best game in the world.',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro.`);
  }
}

console.log(tlou.title);
console.log(tlou.genre);

if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

interface IDlc extends IGame {
  originalGame: IGame;
  newContent: string[];
}

const leftBehind: IDlc = {
  title: 'The Last of Us - Left Behind',
  description: 'You play as Elie before the original game.',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters']
}

class CreateGame implements IGame {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
