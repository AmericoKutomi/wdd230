const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let favChapters = getChapterList() || [];

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(favChapters));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    favChapters = favChapters.filter((item) => item !== chapter);
    setChapterList();
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

button.addEventListener('click', function() {
    if (input.value != '') {
        displayList(input.value);
        favChapters.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert("You neeed to type the name of the book and the chapter."); 
        input.focus();
        return;
    }
 });

getChapterList();
favChapters.forEach(chapter => {
    displayList(chapter) ;
});