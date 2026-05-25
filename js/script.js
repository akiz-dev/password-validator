"use strict"

// focus style password wrapper
const pswInput = document.querySelector('#inputPsw');
const pswWrapper = document.querySelector('.psw__wrapper');
const showHidePswBtn = document.querySelector('.fa-eye');

pswInput.addEventListener('focus', () => {
	addFocusStyles()
});

pswInput.addEventListener('blur', () => {
	removeFocusStyles()
});

// add class focus function
function addFocusStyles() {
	pswWrapper.classList.add('focus')
}

// remove class focus function
function removeFocusStyles() {
	if(pswWrapper.classList.contains('focus')) {
		pswWrapper.classList.remove('focus')
	}	
};
 

showHidePswBtn.addEventListener('click', ()=> {
	changeIconPsw()
	showHidePsw();
});

function changeIconPsw() {
	if(showHidePswBtn.classList.contains('fa-eye')) {
		showHidePswBtn.classList.remove('fa-eye');
		showHidePswBtn.classList.add('fa-eye-slash')
	} else {
		showHidePswBtn.classList.remove('fa-eye-slash');
		showHidePswBtn.classList.add('fa-eye')
	}
};

// show hide password function
function showHidePsw() {
	if(showHidePswBtn.classList.contains('fa-eye-slash')) {
		pswInput.setAttribute('type', 'text');
	} else {
		pswInput.setAttribute('type', 'password')
	};
};


let displayTitle = document.querySelector('.display__title');
let displayEl1 = document.querySelector('.display__el1');
let displayEl2 = document.querySelector('.display__el2');
let displayEl3 = document.querySelector('.display__el3');
let displayEl4 = document.querySelector('.display__el4');


function validatePassword() {
	// length validate
	if(pswInput.value.length === 0){
		displayTitle.textContent = 'Type password above';
		displayEl1.textContent = '';

	} else if(pswInput.value.length < 8){
		
		displayEl1.classList.remove('strong');
		displayEl1.classList.add('low');
		displayTitle.classList.add('text__bold');

		displayTitle.textContent = '✗ Low\n';
		displayEl1.textContent = '✗ 8+ Characters'

	} else {
		displayEl1.classList.add('strong');
		displayEl1.classList.remove('low');

		displayTitle.textContent = '✗ Low';
		displayEl1.textContent = '✓  8+ Characters'
	};


	//uppercase validate
	if(pswInput.value.length === 0){
		displayEl2.textContent = '';

	} else if(/[A-Z]/.test(pswInput.value)) {
		displayEl2.classList.remove('low');
		displayEl2.classList.add('strong');

		displayEl2.textContent = '✓ Uppercase';
	} else {
		displayEl2.classList.remove('strong');
		displayEl2.classList.add('low');

		displayEl2.textContent = '✗ Uppercase';
	};

	//number validate
	if(pswInput.value.length === 0){
			displayEl3.textContent = '';

		} else if(/[0-9]/.test(pswInput.value)) {
			displayEl3.classList.remove('low');
			displayEl3.classList.add('strong');

			displayTitle.textContent = '⚠ Medium'
			displayEl3.textContent = '✓ Number';
		} else {
			displayEl3.classList.remove('strong');
			displayEl3.classList.add('low');

			displayEl3.textContent = '✗ Number';
		};

		//symbol validade
	if(pswInput.value.length === 0){
			displayEl4.textContent = '';

		} else if(/[!@#$%^&*]/.test(pswInput.value)) {
			displayEl4.classList.remove('low');
			displayEl4.classList.add('strong');

			displayTitle.textContent = '🔒 Strong Password';
			displayEl4.textContent = '✓ Symbol';
		} else {
			displayEl4.classList.remove('strong');
			displayEl4.classList.add('low');

			displayEl4.textContent = '✗ Symbol';
		};

	};


//LISTEN CALL validatePassword() function
pswInput.addEventListener('keyup', validatePassword)