const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let dateBirth = document.createElement('h3');
        let placeBirth = document.createElement('h3');


        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);

        let ordertext = '1st';
        // Stretch Challenge: President Order
        if (prophet.order == 1) {
            ordertext = '1st';
        } else if (prophet.order == 2) {
            ordertext = '2nd';
        } else if (prophet.order == 3) {
            ordertext = '3rd';
        } else {
            ordertext = `${prophet.order}th`;
        };

        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${ordertext} Latter-day President`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        // Birth information
        dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    } );
}


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
  }
  

  getProphetData();