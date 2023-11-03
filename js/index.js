let isClicked = false;
const b = document.querySelector('.subscription > :nth-child(2) > div');
const a = document.getElementById('slider');
const m = document.querySelector('.subscription > :nth-child(1)');
const y = document.querySelector('.subscription > :nth-child(3)');

a.addEventListener('click', function onClick() {
    if(isClicked)
    {
        b.classList.remove('clicked');
        m.classList.add('invertM');
        y.classList.add('invertY');
        isClicked = !isClicked;
    }

    else
    {
        b.classList.add('clicked');
        m.classList.remove('invertM');
        y.classList.remove('invertY');
        isClicked = !isClicked;
    }      
});



