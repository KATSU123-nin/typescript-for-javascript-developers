export {};

class Mahotsukai { }
class Souryo { }

class Taro extends Mahotsukai { }
// 継承は１つのクラスのみ

interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

// interfaceを使うことで、あちこちに散らばったクラスを１つにまとめて実装させることができる。
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();