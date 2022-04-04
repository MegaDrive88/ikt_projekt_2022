const darkBtn = document.querySelector('.fas');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        setDarkMode = localStorage.setItem('dark', null);
    }
});

let setDarkMode = localStorage.getItem('dark');

if(setDarkMode === 'on') {
    darkMode();
}

function iconcsere(){
    if(document.getElementById('moon_sun').getAttribute('class').includes('moon')){       
        document.getElementById('moon_sun').className = 'fas fa-sun fa-2x'
    }
    else{
        document.getElementById('moon_sun').className = 'fas fa-moon fa-2x'
    }
}