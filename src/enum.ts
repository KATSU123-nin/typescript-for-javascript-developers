export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

// JavaScriptの場合だと愚直にキーとバリューを書かなければならない
// const MonthsJs = {
//     January: 0,
//     February: 1
// };
 
Months.January;
Months.February;
Months.August;

console.log(Months.January);
console.log(Months.August);
console.log(Months.December);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    // YELLOW ='#FFFF00',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log(green);

// 後からの追加もOK
enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

COLORS.YELLOW;
