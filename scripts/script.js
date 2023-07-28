const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
	// ... Código anterior ...
// Validaciones para el formulario de registro
const signupForm = document.querySelector('.sign-up .formulario');
const signupName = signupForm.querySelector('input[type="text"]');
const signupEmail = signupForm.querySelector('input[type="email"]');
const signupPassword = signupForm.querySelector('input[type="password"]');
const signupBtn = signupForm.querySelector('.sesion-registro');
const signupWarnings = signupForm.querySelector('.warnings');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const nameValue = signupName.value.trim();
    const emailValue = signupEmail.value.trim();
    const passwordValue = signupPassword.value.trim();

    if (nameValue.length <= 4) {
        signupWarnings.textContent = 'El nombre debe tener más de 4 caracteres.';
    } else if (passwordValue.length <= 6) {
        signupWarnings.textContent = 'La contraseña debe tener más de 6 caracteres.';
    } else if (!emailRegex.test(emailValue)) {
        signupWarnings.textContent = 'Ingrese un correo electrónico válido.';
    } else {
        signupWarnings.textContent = 'Cuenta creada exitosamente. Revise su email para confirmar.';
    }
});

// Validaciones para el formulario de inicio de sesión
const signinForm = document.querySelector('.sign-in .formulario');
const signinEmail = signinForm.querySelector('input[type="email"]');
const signinPassword = signinForm.querySelector('input[type="password"]');
const signinBtn = signinForm.querySelector('.sesion-registro');
const signinWarnings = signinForm.querySelector('.warnings');

signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = signinEmail.value.trim();
    const passwordValue = signinPassword.value.trim();

    if (!emailRegex.test(emailValue)) {
        signinWarnings.textContent = 'Ingrese un correo electrónico válido.';
    } else if (passwordValue.length <= 6) {
        signinWarnings.textContent = 'La contraseña debe tener más de 6 caracteres.';
    } else {
        signinWarnings.textContent = '¡Sesión iniciada correctamente.!';
    }


const signupBtn = signupForm.querySelector('.sesion-registro');
signupBtn.addEventListener('click', () => {
    const nameValue = signupName.value.trim();
    const emailValue = signupEmail.value.trim();
    const passwordValue = signupPassword.value.trim();

    if (nameValue.length <= 4) {
        signupWarnings.textContent = 'El nombre debe tener más de 4 caracteres.';
    } else if (passwordValue.length <= 6) {
        signupWarnings.textContent = 'La contraseña debe tener más de 6 caracteres.';
    } else if (!emailRegex.test(emailValue)) {
        signupWarnings.textContent = 'Ingrese un correo electrónico válido.';
    } else {
        
        signupWarnings.textContent = 'Cuenta creada exitosamente. Revise su email para confirmar.';
        
    }
});
})










});
const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});
const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		
	

			const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');
const $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});


		});
	});
});

