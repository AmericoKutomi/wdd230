const urlActivities = './activities.json';

const weeks = document.querySelector('#weeks');

const displayWeeks = (weeksarray) => {

    weeksarray.forEach((week) => {

        // Create elements to add to the div.weeks element
        let card = document.createElement('section');
        let weekName = document.createElement('h4'); 
        weekName.textContent = `${week.week}`;
        weekName.setAttribute('class', 'weeklearning');

        // Append the section(card) with the Week Name
        card.appendChild(weekName); 

        // Append a link for each link in the week
        week.links.forEach((link) => {
            let newlink = document.createElement('a');
            newlink.textContent = `${link.title}`;
            newlink.setAttribute('href',link.url);
            newlink.setAttribute('class', 'linklearning');
            card.appendChild(newlink);
        })

        weeks.appendChild(card);
    } );
}


async function getWeeksData() {
    const response = await fetch(urlActivities);
    const data = await response.json();
    // console.table(data.weeks);
    displayWeeks(data.weeks);
  }
  

  getWeeksData();