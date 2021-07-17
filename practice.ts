(() => {
    'use strick';

    const message = "hello world";

    const messageSplit = message.split('');
    let messageArray = [];
    let originArray;

    for (let i = 0; i < messageSplit.length; i++) {

        if (messageSplit[i] == " ") {
            messageArray.push(' ')
        } else {
            messageArray.push('<span>' + messageSplit[i] + '</span>');
        }
    }

    for (let j = 0; j < messageSplit.length; j++) {
        
    }
    
    console.log(messageArray);
    console.log(originArray);


})();

