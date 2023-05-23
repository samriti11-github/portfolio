const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  form.reset();
});

console.log("Script running....");

document.addEventListener("DOMContentLoaded", function() {
  var sidebarElement = document.querySelector('.sidebar');
  var crossbarElement = document.querySelector('.crossbarline');

  crossbarElement.addEventListener("click", () => {
    sidebarElement.classList.toggle('sidebarGo');
  });

  function handleSidebarVisibility() {
    sidebarElement.classList.toggle('sidebarGo', window.innerWidth > 768);
  }

  handleSidebarVisibility();
  window.addEventListener('resize', handleSidebarVisibility);
});


  document.getElementById("readMoreBtn").addEventListener("click", function() {
    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";
    console.log("hello ")
  });



