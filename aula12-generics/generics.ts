// S (state)
// T (type)
// K (key)
// V (value)
// E (element)

type numOrStr = number | string;

function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState }
}

const newState = useState();
newState.setState('foo');
console.log(newState.getState());

// const newState = useState<number>();
// newState.setState(1001);
// console.log(newState.getState());
