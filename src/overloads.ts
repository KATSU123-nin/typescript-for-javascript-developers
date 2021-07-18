export { };

function double(value: number) : number;
function double(value: string) : string;

function double(value: any): any {
    // console.log(typeof value)
    if (typeof value === 'number') {
        return value * 2;
    } else  {
        return value + value;
    }
}
// else if {} で分岐を作らなくても、シグネチャーで宣言されているので、それ以外のデータが関数にやってくることがない。型制約がシグネチャーで担保されている。(typeof value === 'string')が要らず、elseだけで十分になる。現在の条件が、number or string 。シグネチャーは門番！

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));