window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 40) { // 当滚动位置超过50像素时
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".vertical-menu a");

 navLinks.forEach((link, index) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const yOffset = -80; // 你想要的额外偏移量
    const target = sections[index];
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetPosition + yOffset, behavior: "smooth" });
  });
});

  window.addEventListener("scroll", function() {
  const currentScroll = window.scrollY;

  sections.forEach((section, index) => {
    const top = section.offsetTop - 160; // 微调滚动位置
    const bottom = top + section.offsetHeight;

    if (currentScroll >= top && currentScroll < bottom) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});
});

const verticalMenu = document.getElementById('vertical-menu');
const triggerOffset = 600; // 滚动到页面某个位置触发的偏移量

window.addEventListener('scroll', function() {
  // 获取垂直滚动位置
  const scrollPosition = window.scrollY || window.pageYOffset;

  // 如果滚动超过指定的偏移量，显示垂直导航栏，否则隐藏
  if (scrollPosition > triggerOffset) {
    verticalMenu.classList.add('show-menu');
  } else {
    verticalMenu.classList.remove('show-menu');
  }
});

let currentSlide1 = 0;
const slides1 = document.querySelectorAll('.slideshow1 img');

function showSlide1(n) {
  slides1.forEach(slide => slide.classList.remove('active'));
  slides1[n].classList.add('active');
}

function prevSlide1() {
  if (currentSlide1 > 0) {
    currentSlide1--;
  } else {
    currentSlide1 = slides1.length - 1;
  }
  showSlide1(currentSlide1);
}

function nextSlide1() {
  if (currentSlide1 < slides1.length - 1) {
    currentSlide1++;
  } else {
    currentSlide1 = 0;
  }
  showSlide1(currentSlide1);
}

// 初始显示第一张图片
showSlide1(currentSlide1);

let currentSlide2 = 0;
const slides2 = document.querySelectorAll('.slideshow2 img');

function showSlide2(n) {
  slides2.forEach(slide => slide.classList.remove('active'));
  slides2[n].classList.add('active');
}

function prevSlide2() {
  if (currentSlide2 > 0) {
    currentSlide2--;
  } else {
    currentSlide2 = slides2.length - 1;
  }
  showSlide2(currentSlide2);
}

function nextSlide2() {
  if (currentSlide2 < slides2.length - 1) {
    currentSlide2++;
  } else {
    currentSlide2 = 0;
  }
  showSlide2(currentSlide2);
}

// 初始显示第一张图片
showSlide2(currentSlide2);

