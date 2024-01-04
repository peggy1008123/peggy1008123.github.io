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
const me = document.querySelector('.me');
const leftProfile = document.querySelector('.left.profile_element');
const rightProfile = document.querySelector('.right.profile_element');
const cursor = document.querySelector('.cursor');

me.addEventListener('mouseover', function() {
  leftProfile.style.transition = 'opacity 0.3s ease-in-out'; // 添加过渡效果
  rightProfile.style.transition = 'opacity 0.3s ease-in-out'; // 添加过渡效果

  cursor.classList.add('hidden');

  leftProfile.style.opacity = '1'; // 显示左侧 profile_element
  rightProfile.style.opacity = '1'; // 显示右侧 profile_element

  // 确保元素可见
  leftProfile.style.display = 'block';
  rightProfile.style.display = 'block';
});

me.addEventListener('mouseout', function() {
  leftProfile.style.opacity = '0'; // 隐藏左侧 profile_element
  rightProfile.style.opacity = '0'; // 隐藏右侧 profile_element

  cursor.classList.remove('hidden');

  // 在过渡结束后隐藏元素
  setTimeout(() => {
    leftProfile.style.display = 'none';
    rightProfile.style.display = 'none';
  }, 300); // 300 毫秒是过渡时间，请根据需要调整
});


document.addEventListener('DOMContentLoaded', function() {
  // 页面加载完成后触发淡入效果
  document.querySelector('.body_container').classList.add('show');
});