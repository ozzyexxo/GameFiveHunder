module.exports = {
    Card : function (suit, value, name)
    {
        this.suit = suit;
        this.value = value;
        this.name = name;
    }
}
//TODO: Find away to initialize Card-object inside the module as well, 
//since it's needed for the generateDeck-function

/* GENERATES FRESH DECK*/
/*
function Card (suit, value, name)
{
    this.suit = suit;
    this.value = value;
    this.name = name;
}

function generateDeck()
{
    const suits = ['Heart', 'Club', 'Diamond', 'Spade'];
    const values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const names = [ 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
    
    let genDeck = new Array();

    for(let suitIndex = 0; suitIndex < suits.length; suitIndex++)
    {
        for(let valueIndex = 0; valueIndex < values.length; valueIndex++)
        {
            genDeck.push(new Card(suits[suitIndex], values[valueIndex], names[valueIndex]));
        }   
    }

   return genDeck;
}

function printDeck (printableDeck)
{

    for(let index = 0; index < printableDeck.length; index++)
    {
        console.log(printableDeck[index].name + '\t' + printableDeck[index].suit )
    }
}

function suffleDeck(nonSuffledDeck)
{
    let suffledDeck = new Array();

    while (nonSuffledDeck.length !== 1)
    {
        let randomNumber = Math.floor(Math.random() * nonSuffledDeck.length);
        suffledDeck.push(nonSuffledDeck[randomNumber]);
        nonSuffledDeck.splice(randomNumber,1);
    }
    suffledDeck.push(nonSuffledDeck[0]);
    return suffledDeck;
}

function initializeDeck(){
    let initDeck = generateFreshDeck();
}
*/
