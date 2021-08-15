const $hola = document.getElementById('hola');
const $project = document.getElementById('project');
const $contact = document.getElementById('contact');
const $active = 'is-active';

document.querySelector('.navbar').addEventListener('click',  (e) => {
  var target = e.target;
  
  if (target.tagName === 'A') {
    e.currentTarget.querySelector('.is-active').classList.remove('is-active');
    target.classList.add('is-active');
  }
});
