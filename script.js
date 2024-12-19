AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        } else {
          entry.target.classList.remove('aos-animate');
        }
      });
    }, { threshold: [0.1, 0.9] });
  
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    const animatedCheckBox = document.getElementsByClassName('animated-checkbox')[0];
    animatedCheckBox.checked = false;
  });
  
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "ENGINEER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

function adjustTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    const content = item.querySelector('.timeline-content');
    const date = item.querySelector('.timeline-date');
    
    if (window.innerWidth <= 440) {
      content.setAttribute('data-aos', 'fade-left');
      date.setAttribute('data-aos', 'zoom-out-left');
    } else {
      if (item.classList.contains('odd')) {
        content.setAttribute('data-aos', 'fade-right');
        date.setAttribute('data-aos', 'zoom-out-right');
      } else {
        content.setAttribute('data-aos', 'fade-left');
        date.setAttribute('data-aos', 'zoom-out-left');
      }
    }
  });
}

document.getElementById("dismiss-btn").addEventListener('click', function(){
  console.log('Sample Button Clicked')
  document.getElementById('successMessage').classList.remove('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this);

  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      console.log('Sample Button Clicked')
      document.getElementById('successMessage').classList.add('active');
      this.reset(); // Reset the form fields
    } else {
      alert('There was a problem with your submission.');
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('There was a problem with your submission.');
  });
});

window.addEventListener('load', adjustTimelineAnimations);
window.addEventListener('resize', adjustTimelineAnimations);
window.onload = typeWriter
