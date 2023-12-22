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

let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[n].classList.add('active');
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// 初始显示第一张图片
showSlide(currentSlide);
