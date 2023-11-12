var bold ="font-weight: bold"

//Opg 1

console.log("%cOppgave 1", bold)

var firm = {

    firmanavn: 'Makka' ,

    antallAnsatte: '50',

    billiste: ['Toyota','Masta','Ferari','Ford'],

    betaltSkatt: 5000,

    nettsiden: 'www.makka.com',

     info: function () {
        console.log(firm)
    }
}

console.log(firm.info())


//Opg 2

console.log("%cOppgave 2", bold)

firm.firmanavn = 'Pakka';

console.log(firm.info())

//Opg 3

console.log("%cOppgave 3", bold)

firm.billiste.push('Porshe')

console.log(firm.billiste)


//Opg 4

console.log("%cOppgave 4", bold)

firm.billiste.shift()

console.log(firm.billiste)

//Opg 5

console.log("%cOppgave 5", bold)

delete firm.nettsiden

console.log(firm)

//Opg 6

console.log("%cOppgave 6", bold)

firm.status = 'true'

console.log(firm)

//Opg 7

console.log("%cOppgave 7", bold)

for (let i = 0; i < firm.billiste.length; i++) {
    console.log(firm.billiste[i])   
}

//Opg 8

console.log("%cOppgave 8", bold)

for (let key in firm) {
    console.log(key)
}

//Opg 9
console.log("%cOpgave 9", bold)

for (let key in firm) {
    console.log(firm[key])
}

//Opg 10

console.log("%cOppgave 10", bold)

console.log(firm.billiste[0])

//Opg 11

console.log("%cOppgave 11", bold)

console.log(firm.billiste[3])

//Opg 12

console.log("%cOppgave 12", bold)

var library = [

    {
    
    author: 'Bill Gates',
    
    title: 'The Road Ahead',
    
    readingStatus: true
    
    },
    
    {
    
    author: 'Steve Jobs',
    
    title: 'Walter Isaacson',
    
    readingStatus: false
    
    },
    
    {
    
    author: 'Suzanne Collins',
    
    title: 'Mockingjay: The Final Book of The Hunger Games',
    
    readingStatus: false
    
    }];

    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus === false) {
        console.log(library[i].title)
    }
    }
    