type AcountInfo = {
  id: number | string,
  name: string,
  email?: string
}

type CharInfo = {
  nickname: string;
  level: number
}

const account: AcountInfo = {
  id: 842,
  name: 'Lucca'
}

const profile: CharInfo = {
  nickname: 'lucc4',
  level: 42
}

type PlayerInfo = AcountInfo & CharInfo;

const player: PlayerInfo = {
  level: 42,
  id: '842',
  name: 'Lucca',
  nickname: 'lucc4'
}
