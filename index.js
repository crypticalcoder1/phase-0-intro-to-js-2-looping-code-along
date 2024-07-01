// Code your solutions in this file\

function writeCards(names, eventName) {
    let thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }
  
  // Example usage:
  const namesArray = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  
  const messages = writeCards(namesArray, event);
  console.log(messages);
   
  function countDown(count) {
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  // Example usage:
  countDown(10);
  