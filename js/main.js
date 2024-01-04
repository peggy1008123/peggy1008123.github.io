$(document).ready(function(){
  $("#StringTextBox").keypress(function ChangeString(event){
  if (event.keyCode == 13) {
    $(".username").hide();
    $(".before_username").show();
    $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
    $("input").val("");  
  }
})
$(".btn_home_go").click(function ChangeString(){
  $(".username").hide();
  $(".before_username").show();
  $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
  $("input").val("");
})

})

function tomywork() {
    var e = document.getElementById("mywork");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// 获取目标 div 元素
const hiddenDiv = document.querySelector('.project_rowblock');

// 创建 Intersection Observer 对象
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 如果目标 div 进入视口，显示它
      hiddenDiv.classList.add('active');
      observer.unobserve(hiddenDiv); // 可选：如果只想触发一次，可以停止观察
    }
  });
}, {
  // 设置观察器的选项
  // 可以设置 root、rootMargin、threshold 等选项
});

// 开始观察目标 div
observer.observe(hiddenDiv);

window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 40) { // 当滚动位置超过50像素时
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // 页面加载完成后触发淡入效果
  document.querySelector('.body_container').classList.add('show');
});