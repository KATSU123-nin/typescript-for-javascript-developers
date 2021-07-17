export {};

type Mojiretsu = string;
// 必ず大文字にする

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43,
    hoby: "baseball"
};

type Profile = {
    name: string;
    age: number;
}
// example1から定義を引っ張ってエイリアスを定義することで、使いまわせるようになる。

const example2: Profile = {
    name: 'Ham',
    age: 43
};

// 愚直に書かなくても、typeofを用いることでexample1の定義をそのまま登録することができる。また、example1の型が変わったとしても、追従することができる。
type Profile2 = typeof example1;

const example3: Profile2 = {
    name: 'Ham',
    age: 43,
    hoby: '33'
};