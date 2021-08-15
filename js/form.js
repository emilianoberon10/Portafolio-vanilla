const $form_name= document.getElementById('form-name')
const $form = document.getElementById('contacto');
const $form_mail= document.getElementById('form-correo');
const $form_message= document.getElementById('form-message');
const $btn_env = document.getElementById('link-mail');

$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = new FormData($form);
    $btn_env.setAttribute('href',`mailto:emilianoberon10@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}` );
    $btn_env.click();
});
