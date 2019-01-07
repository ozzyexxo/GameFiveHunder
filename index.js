const cardDeck = require('./carddeck');

let deck= cardDeck.Card('Spade', 1, 'Ace');
console.log(aceofspades);

let cardDeck = generateFreshDeck(suits, values, names);
cardDeck = suffleDeck(deck);

//DEALING THE CARDS 
//REQUIRED: SUFFLED DECK
function Player(name, hand, table, points)
{
    this.name = name;
    this.hand = hand;
    this.table = table;
    this.points = points;
}

function InitializeGame(playerList, cardDeck)
{
    
}

let user = new Player('User', null, null, null);
let comp = new Player('Computer', null, null, null);

let playerList = new Array();
playerList.push(user);
playerList.push(comp);

InitializeGame(playerList, cardDeck);


printDeck(deck);