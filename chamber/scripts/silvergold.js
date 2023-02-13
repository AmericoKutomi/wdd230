// load members data and create elements in the document

const membersFileLocation = './data/members.json';
const display = document.querySelector("article");

const loadCompanies = (companiesarray) => {
    // filter silver and gold members
    const silvergoldcompanies = companiesarray.filter(company => (company.membershiplevel == "silver" || company.membershiplevel == "gold"));

    // create an range array to randomly select three companies
    var indexes = [...Array(silvergoldcompanies.length).keys()];
    indexes.sort(function(a, b){return 0.5 - Math.random()});

    // the for loop will get only three companies
    for (let i = 0; i < 3; i++) {

        // get a company by its index from a random list of indexes
        var company = silvergoldcompanies[indexes[i]];

        // Create elements to add to the div.weeks element
        let card = document.createElement('section');
        card.setAttribute('class', 'advertisement');
        let companyName = document.createElement('h5'); 
        companyName.textContent = `${company.name}`;
        companyName.setAttribute('class', 'companyname');

        let companyImage = document.createElement('img'); 
        companyImage.setAttribute('class', 'companyadv');
        companyImage.setAttribute('src', company.image);
        companyImage.setAttribute('alt', `${company.name} logo`);
        companyImage.setAttribute('loading', 'lazy');
        companyImage.setAttribute('width', '340');
        companyImage.setAttribute('height', '440');
        
        // Append the section(card) with the Week Name
        card.appendChild(companyName); 
        card.appendChild(companyImage); 
        display.appendChild(card);
    };
}

async function getMembersData() {
    const response = await fetch(membersFileLocation);
    const data = await response.json();
    // console.table(data.companies);
    loadCompanies(data.companies);
  }
  
getMembersData();



