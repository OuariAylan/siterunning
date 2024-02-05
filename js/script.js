const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
console.log('ok');
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

const formCheck1 = document.getElementById('formCheck1');
const sendButton = document.getElementById('sendButton');
var checkbox = document.getElementById('formCheck-1');
var label = document.getElementById('check');


function verifierFormulaire ()
{
  let password = document.getElementById('password');
  
  if(password.value.length < 8) {
    password.classList.add('invalid');
  }
  else {
    password.classList.remove('invalid');
    password.classList.add('valid');
  }

  let prenom = document.getElementById('prenom');
  
  if(prenom.value.length < 4) {
    prenom.classList.add('invalid');
  }
  else {
    prenom.classList.remove('invalid');
    prenom.classList.add('valid');
  }

  let email = document.getElementById('email');
  
  if (email.value.includes('@')) {
    email.classList.remove('invalid');
    email.classList.add('valid');
  } else {
    email.classList.add('invalid');
  }

  let nom = document.getElementById('nom');
  
  if(nom.value.length < 4) {
    nom.classList.add('invalid');
  }
  else {
    nom.classList.remove('invalid');
    nom.classList.add('valid');
  }

  let message = document.getElementById('message');
  
  if(message.value.length <2) {
    message.classList.add('invalid');
  }
  else {
    message.classList.remove('invalid');
    message.classList.add('valid');
  }
  let formCheck1 = document.getElementById('formCheck1');
  
  if(formCheck1.value.length <2) {
    formCheck1.classList.add('invalid');
  }
  else {
    formCheck1.classList.remove('invalid');
    formCheck1.classList.add('valid');
  }
}

function verifierFormulaire2()
{
  let email = document.getElementById('email');
  
  if (email.value.includes('@')) {
    email.classList.remove('invalid');
    email.classList.add('valid');
  } else {
    email.classList.add('invalid');
  }

  let password = document.getElementById('password');
  
  if(password.value.length < 8) {
    password.classList.add('invalid');
  }
  else {
    password.classList.remove('invalid');
    password.classList.add('valid');
  }
  var checkbox = document.getElementById('formCheck1');
  var label = document.getElementById('check');

  if (checkbox.checked) {
    label.style.color = 'green'; 
  }
  else {
    label.style.color = 'red'; 
  }

}