window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
      const offsetTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > offsetTop) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible'); // Remove the visible class if element is not in view
      }
    });
  });

const follower = document.getElementById('follower');
  
function moveFollower(event) {
  const x = event.clientX;
  const y = event.clientY;
  const delay = 50;
  setTimeout(() => {
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
  }, delay);
}

document.addEventListener('mousemove', moveFollower);

function cursorEnterHandler() {
  follower.style.width = '60px';
  follower.style.height = '60px';
  follower.style.borderWidth = '4px'; 
}

function cursorLeaveHandler() {
  follower.style.width = '30px';
  follower.style.height = '30px';
  follower.style.borderWidth = '0px'; 
}

const clickableElements = document.querySelectorAll('a, button');

clickableElements.forEach(element => {
  element.addEventListener('mouseenter', cursorEnterHandler);
  element.addEventListener('mouseleave', cursorLeaveHandler);
});



