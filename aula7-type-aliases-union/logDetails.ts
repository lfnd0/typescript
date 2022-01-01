// type alias com union (através do "|")
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a title as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'MacOS'

function renderPlatform(platform: Platform) {
  return platform;
}

logDetails(291, 'sapato');
logDetails('291', 'sapato');

logInfo(521, 'Logan');
logInfo('521', 'Logan');

// renderPlatform('iOS');
