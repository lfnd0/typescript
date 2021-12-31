// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ['foo', 'bar'];

let values: Array<number>;
values = [0, 1, 1, 2, 3, 5];

// tuple
let title: [number, string, boolean];
title = [1, 'foo', false];

// enum
enum Colors {
    white = '#FFF',
    black = '#000'
}

// any (pode ser "qualquer coisa")
let thing: any;
thing = [1001001];

// void (vazio)
function logger() {
    console.log('foo');
}

// null/undefined
type blah = string | undefined;

// never
function error(): never {
    throw new Error('error');
}

// object ("qualquer coisa" que não seja os tipos primitivos)
let cart: object;
cart = {
    key: 'phi'
}
