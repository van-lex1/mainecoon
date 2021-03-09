let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');

let pets1 = document.querySelector('.pets-tab-1');
let pets2 = document.querySelector('.pets-tab-2');
let pets3 = document.querySelector('.pets-tab-3');


item1.onclick = function () {
	item1.classList.add('active');
	item2.classList.remove('active');
	item3.classList.remove('active');
	pets1.style.display = 'flex';
	pets2.style.display = 'none';
	pets3.style.display = 'none';
}

item2.onclick = function () {
	item1.classList.remove('active');
	item2.classList.add('active');
	item3.classList.remove('active');
	pets1.style.display = 'none';
	pets2.style.display = 'flex';
	pets3.style.display = 'none';
}

item3.onclick = function () {
	item1.classList.remove('active');
	item2.classList.remove('active');
	item3.classList.add('active');
	pets1.style.display = 'none';
	pets2.style.display = 'none';
	pets3.style.display = 'flex';
}