let upperBar = document.querySelector(".upperBar")
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        upperBar.style.boxShadow = '0px 1px 10px 0px #bbb';
    } else {
        upperBar.style.boxShadow = 'none';
    }
})

let hamMenu = document.querySelector(".hamMenu");
const lineOne = document.querySelector('.line.one');
const lineTwo = document.querySelector('.line.two');
const lineThree = document.querySelector('.line.three');
const closedOne = document.querySelector('.closedOne');
const closedTwo = document.querySelector('.closedTwo');
let multiListMenu = document.querySelector('.multiListMenu');

let isOn = false
hamMenu.addEventListener('click', function() {
    isOn = !isOn
    if (isOn) {
        console.log("isOn")
        multiListMenu.style.opacity = '1'
        lineOne.style.opacity = '0'
        lineTwo.style.opacity = '0'
        lineThree.style.opacity = '0'
        closedOne.style.opacity = '1'
        closedTwo.style.opacity = '1'
    } else {
        console.log("isOff")
        multiListMenu.style.opacity = '0'
        lineOne.style.opacity = '1'
        lineTwo.style.opacity = '1'
        lineThree.style.opacity = '1'
        closedOne.style.opacity = '0'
        closedTwo.style.opacity = '0'
    }
} )

document.addEventListener('dragstart', function(event) {
    console.log(event.target)
    if (event.target.tagName === 'SECTION') {
        event.preventDefault();
    }
});