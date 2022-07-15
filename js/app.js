const images = [
    "img/img-01.jpg",
    "img/img-02.jpg",
    "img/img-03.webp",
    "img/img-04.webp",
];

const slideWrapper = document.getElementById("slidewrapper");
console.log(slideWrapper);
const slider = document.getElementById("slider");
console.log(slider);
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {

    const item = `
    <div id="slider" class="col-12 item">
        <img src="${images[i]}"></ alt="">
    </div>`
    slideWrapper.innerHTML += item

}

const items = [...document.getElementsByClassName('item')]
console.log(items);
items[currentIndex].classList.add("active");

const next = document.getElementById('next');
console.log(next);
next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        controls[currentIndex].classList.remove('active');
        items[currentIndex].classList.remove("active");
        currentIndex++
        controls[currentIndex].classList.add('active');
        items[currentIndex].classList.add("active");
        console.log(currentIndex);
        console.log('funziona')
    } else {
        controls[currentIndex].classList.remove('active');
        items[currentIndex].classList.remove("active");
        currentIndex = 0
        console.log(currentIndex);
        controls[currentIndex].classList.add('active');
        items[currentIndex].classList.add("active");
    }
})

const prev = document.getElementById('prev');
prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        controls[currentIndex].classList.remove('active');
        items[currentIndex].classList.remove("active");
        currentIndex--
        controls[currentIndex].classList.add('active');
        items[currentIndex].classList.add("active");
    } else {
        controls[currentIndex].classList.remove('active');
        items[currentIndex].classList.remove("active");
        currentIndex = 3
        console.log(currentIndex);
        controls[currentIndex].classList.add('active');
        items[currentIndex].classList.add("active");
    }
})

const dot = document.querySelector('.pallini')
console.log(dot);
const controls = []


for (let i = 0; i < images.length; i++) {

    const dotty = document.createElement('span')
    controls.push(dotty)
    dot.append(dotty)

    dotty.addEventListener('click', function() {
        console.log(dot,i)
        items[currentIndex].classList.remove('active')
        controls[currentIndex].classList.remove('active')
        currentIndex = i
        items[currentIndex].classList.add('active')
        controls[currentIndex].classList.add('active')
    })

}


console.log(controls)
controls[currentIndex].classList.add("active");
