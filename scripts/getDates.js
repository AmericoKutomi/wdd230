const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

document.querySelector('#lastModified').textContent = 'Last Modification: ' + document.lastModified;
