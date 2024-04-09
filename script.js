window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});


function toggleMenu() {
    const toggleMenu = document.getElementById('toggle')
    const navbar = document.getElementById('toggler')
    if (toggleMenu.classList.contains('fa-bars')) {
        toggleMenu.classList.remove('fa-bars')
        toggleMenu.classList.add('fa-xmark')
        navbar.style.display = 'flex';

    }
    else {
        toggleMenu.classList.add('fa-bars')
        toggleMenu.classList.remove('fa-xmark')
        navbar.style.display = 'none';
    }

    const nav = document.getElementsByClassName('nav-link')
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', () => {
            if (navbar.style.display == 'flex') {
                navbar.style.display = 'none';
                toggleMenu.classList.add('fa-bars')
                toggleMenu.classList.remove('fa-xmark')

            }
        })
    }
    // if(navbar.style.display == 'flex' )

}


let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }

        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    })
}


