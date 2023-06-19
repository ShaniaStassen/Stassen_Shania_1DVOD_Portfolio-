//carousel 1//
const carouselSlide1 = document.querySelector('.carousal-slide1');
const carouselImages1 = document.querySelectorAll('.carousal-slide1 img');

const prevButton1 = document.querySelector('#prevButton1');
const nextButton1 = document.querySelector('#nextButton1');

let counter1 = 1;
const size1 = carouselImages1[0].clientWidth;

carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';

nextButton1.addEventListener('click', () => {
    if (counter1 >= carouselImages1.length - 1) return;
    carouselSlide1.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});

prevButton1.addEventListener('click', () => {
    if (counter1 <= 0) return;
    carouselSlide1.style.transition = "transform 0.4s ease-in-out";
    counter1--;
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});

carouselSlide1.addEventListener('transitioned', () => {
    if (carouselImages1[counter1].id === 'lastClone1') {
        carouselSlide1.style.transition = "none";
        counter1 = carouselImages1.length - 2;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }
    if (carouselImages1[counter1].id === 'firstClone1') {
        carouselSlide1.style.transition = "none";
        counter1 = carouselImages1.length - counter1;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }
});

//carousel 2//
const carouselSlide2 = document.querySelector('.carousal-slide2');
const carouselImages2 = document.querySelectorAll('.carousal-slide2 img');

const prevButton2 = document.querySelector('#prevButton2');
const nextButton2 = document.querySelector('#nextButton2');

let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

nextButton2.addEventListener('click', () => {
    if (counter2 >= carouselImages2.length - 1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

prevButton2.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

carouselSlide2.addEventListener('transitioned', () => {
    if (carouselImages2[counter2].id === 'lastClone2') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
    if (carouselImages2[counter2].id === 'firstClone2') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
});

//carousel 3//
const carouselSlide3 = document.querySelector('.carousal-slide3');
const carouselImages3 = document.querySelectorAll('.carousal-slide3 img');

const prevButton3 = document.querySelector('#prevButton3');
const nextButton3 = document.querySelector('#nextButton3');

let counter3 = 1;
const size3 = carouselImages3[0].clientWidth;

carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';

nextButton3.addEventListener('click', () => {
    if (counter3 >= carouselImages3.length - 1) return;
    carouselSlide3.style.transition = "transform 0.4s ease-in-out";
    counter3++;
    carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});

prevButton3.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide3.style.transition = "transform 0.4s ease-in-out";
    counter3--;
    carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});

carouselSlide3.addEventListener('transitioned', () => {
    if (carouselImages3[counter3].id === 'lastClone3') {
        carouselSlide3.style.transition = "none";
        counter3 = carouselImages3.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
    }
    if (carouselImages3[counter3].id === 'firstClone3') {
        carouselSlide3.style.transition = "none";
        counter3 = carouselImages3.length - counter3;
        carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
    }
});


//carousel 4//
const carouselSlide4 = document.querySelector('.carousal-slide4');
const carouselImages4 = document.querySelectorAll('.carousal-slide4 img');

const prevButton4 = document.querySelector('#prevButton4');
const nextButton4 = document.querySelector('#nextButton4');

let counter4 = 1;
const size4 = carouselImages4[0].clientWidth;

carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';

nextButton4.addEventListener('click', () => {
    if (counter4 >= carouselImages4.length - 1) return;
    carouselSlide4.style.transition = "transform 0.4s ease-in-out";
    counter4++;
    carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
});

prevButton4.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide4.style.transition = "transform 0.4s ease-in-out";
    counter4--;
    carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
});

carouselSlide4.addEventListener('transitioned', () => {
    if (carouselImages4[counter4].id === 'lastClone4') {
        carouselSlide4.style.transition = "none";
        counter4 = carouselImages4.length - 2;
        carouselSlide4.style.transform = 'translateX(' + (-size4 * counter3) + 'px)';
    }
    if (carouselImages4[counter4].id === 'firstClone4') {
        carouselSlide4.style.transition = "none";
        counter4 = carouselImages4.length - counter4;
        carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
    }
});

//Filter gallery//

const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.product img');

liItem.forEach(li => {
    li.onclick = function() {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        //Filter
        const value = li.textContent;
        imgItem.forEach(img => {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') === value.toLowerCase() || value == "Alles") {
                img.style.display = 'block';
            }
        })
    }
});
