// assigns random greeting message on reload
const greetings = [
    'Ahlan','Asalaam alaikum',
    'Zdrasti','Zdraveĭte',
    'Nǐ hǎo','Nǐn hǎo',
    'Hallo','Goede dag',
    'Hey','Hello',
    'Salut','Bonjour',
    'Hug Dia','dhuit',
    'Hallo','Guten tag',
    'Yasou','Kalimera',
    'Shalom','Shalom aleichem',
    'Hē','Namastē',
    'Halló','Góðan dag',
    'Salam!','Selamat siang',
    'Ciao','Salve',
    'Yō','Konnichiwa',
    'Suosdei','Suostei',
    'Anyoung','Anyoung haseyo',
    'Hej','Cześć',
    'Cześć!','Dzień dobry!',
    'Oi','Olá',
    'Hei','Bună ziua',
    'Privet','Zdravstvuyte',
    '¿Qué tal?','Hola',
    'Hujambo','Habari',
    'Hej','God dag',
    'Ia ora na','Ia ora na',
    'Selam','Merhaba',
    'Chào','Xin chào',
    'Helo','Shwmae',
    'Sawubona','Ngiyakwemukela' ]

i = Math.floor(Math.random() * greetings.length);

document.getElementById("greetingMsg").innerHTML = greetings[i] + '...';   
