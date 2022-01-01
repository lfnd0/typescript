// type alias com union (através do "|")
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a title as ${user}.`)
}

type Plataform = 'Windows' | 'Linux' | 'MacOS'

function renderPlataform(plataform: Plataform) {
  return plataform;
}

logDetails(291, 'sapato');
logDetails('291', 'sapato');

logInfo(521, 'Logan');
logInfo('521', 'Logan');

renderPlataform('iOS');
