// load members data and create elements in the document

const membersFileLocation = './data/members.json';
const display = document.querySelector("article");

const loadCompanies = (companiesarray) => {

    companiesarray.forEach((company) => {

        // Create elements to add to the div.weeks element
        let card = document.createElement('section');
        card.setAttribute('class', 'directorycard');
        let companyName = document.createElement('h4'); 
        companyName.textContent = `${company.name}`;
        companyName.setAttribute('class', 'companyname');

        let companyImage = document.createElement('img'); 
        companyImage.setAttribute('class', 'companyimage');
        companyImage.setAttribute('src', company.image);
        companyImage.setAttribute('alt', `${company.name} logo`);
        companyImage.setAttribute('loading', 'lazy');
        companyImage.setAttribute('width', '340');
        companyImage.setAttribute('height', '440');
        
        let companyBusinessDescription = document.createElement('h5'); 
        companyBusinessDescription.textContent = `${company.businessdescription}`;
        companyBusinessDescription.setAttribute('class', 'businessdescription');

        let companyAddress = document.createElement('p'); 
        companyAddress.textContent = `${company.address}`;
        companyAddress.setAttribute('class', 'companyaddress');

        let companyPhone = document.createElement('p'); 
        companyPhone.textContent = `${company.phone}`;
        companyPhone.setAttribute('class', 'companyphone');

        let companyContact = document.createElement('p'); 
        companyContact.textContent = `Contact: ${company.contact}`;
        companyContact.setAttribute('class', 'companycontact');

//        "membershiplevel": "silver",

        let companyWebsite = document.createElement('a'); 
        companyWebsite.textContent = 'WebSite';
        companyWebsite.setAttribute('href', `${company.website}`);
        companyWebsite.setAttribute('class', 'companywebsite');
        companyWebsite.setAttribute('target', '_blank');
        


        // Append the section(card) with the Week Name
        card.appendChild(companyName); 
        card.appendChild(companyImage); 
        card.appendChild(companyBusinessDescription); 
        card.appendChild(companyAddress); 
        card.appendChild(companyPhone); 
        card.appendChild(companyContact); 
        card.appendChild(companyWebsite); 

        display.appendChild(card);
    } );
}

async function getMembersData() {
    const response = await fetch(membersFileLocation);
    const data = await response.json();
    // console.table(data.companies);
    loadCompanies(data.companies);
  }
  
getMembersData();

// Allows grid and list options

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directorygrid");
	display.classList.remove("directorylist");
});

listbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directorylist");
	display.classList.remove("directorygrid");
});



