const navLinks = document.querySelectorAll('header nav a')
const activePage = ()  =>{
    navLinks.forEach(link => {
        link.classList.remove('active');
    })
}
navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    })
})

const resumeBtns = document.querySelectorAll('.resume_btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume_details')


        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio_box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio_box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

let index = 0;
const maxIndex = 5; // Update if you have more or fewer slides

const updateArrows = () => {
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === maxIndex);
};

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;
    updateArrows();
};

arrowRight.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

// Initialize
activePortfolio();