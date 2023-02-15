

function showBanner() {
    const banner = document.querySelector('#banner');
    const currentDate = new Date();
    dayOfTheWeek = currentDate.getDay();
    if (dayOfTheWeek >= 1 && dayOfTheWeek <= 3) {
        banner.textContent = "All users are invited to attend the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

showBanner();