const buttonNext = document.getElementById('button-next');
const buttonPrev = document.getElementById('button-prev'); // 假设你有一个向前按钮
const imageContainer = document.querySelectorAll('.col ul li');
let currentIndex = 0; // 当前的索引位置
const currentul = document.querySelector('.col ul')
const currentli = document.querySelector('.col ul li')
//.width只能获取当前html内实际的大小，而不能获取css中的百分比 
let inter = parseFloat(getComputedStyle(currentul).width)/parseFloat(getComputedStyle(currentli).width);
const column = Math.floor(inter);
buttonNext.addEventListener('click', () => {
    if (currentIndex < imageContainer.length - column) { // 确保不会超过最后一张图片
        currentIndex++;
        imageContainer.forEach((li) => {
            li.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }
});

buttonPrev.addEventListener('click', () => {
    if (currentIndex > 0) { // 确保不会超过第一张图片
        currentIndex--;
        imageContainer.forEach((li) => {
            li.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }
});


//

const bigimg = document.getElementById('bigimg');

imageContainer.forEach( li=> {
    li.addEventListener('click',
    function(){
        imageContainer.forEach(
            li=>li.classList.remove('selected')
        )
        this.classList.add('selected')
        bigimg.src =this.querySelector('img').src.replace('-thumbnail','');
    })
}

)