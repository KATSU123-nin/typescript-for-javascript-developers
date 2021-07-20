export {};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン'; → 読み取り専用プロパティであるため、'owner' に代入することはできません。