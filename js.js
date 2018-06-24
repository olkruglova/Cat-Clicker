/*let clicks = 0;
let changeClickNumber = document.querySelector('.clicks');
let clickListener1 = document.querySelector('.listener');
*/
/*
/* create the second picture of a cat */
//let parent = document.querySelector('.col-auto');
//let pic = document.createElement("IMG");

//pic.src = 'img/kitten-with-white-paws.jpg';
//parent.appendChild(pic);
//pic.classList.add("listener2");

//let clickListener2 = document.querySelector('.listener2');

/*add captions under pictures*/
//let caption1 = document.createElement("p");
//let caption2 = document.createElement("p");
//caption1.innerHTML = 'Friendly kitten';
//caption2.innerHTML = 'Kitten with white paws';
//parent.appendChild(caption1);
//parent.appendChild(caption2);

/* increment the click counter and display it on the page */
//clickListener1.addEventListener('click', function(){
//    clicks++;
//    changeClickNumber.innerHTML = clicks;
//}, false);

//clickListener2.addEventListener('click', function(){
//    clicks++;
//    changeClickNumber.innerHTML = clicks;
//}, false);

const image = document.querySelector('img');
image.remove();
let count = document.querySelector('.count');
count.style.display = 'none';

/* Create a challenging text before the list */

let selectArea = document.querySelector('.col-auto');
let text = document.createElement('p');
selectArea.appendChild(text);

let txt = 'Choose a picture of a kitten &#10140;'
text.innerHTML = txt;

/* Create a list of kitten images */
let select = document.createElement('select');
select.classList.add("list");
selectArea.appendChild(select);

const list = document.querySelector('select');
let op0 = document.createElement('option');
list.appendChild(op0);
op0.value = '';
op0.innerHTML = '';

let op1 = document.createElement('option');
list.appendChild(op1);
op1.value = 'img/friendly-kitten.jpg';
op1.innerHTML = 'Friendly kitten';

let op2 = document.createElement('option');
list.appendChild(op2);
op2.value = 'img/hidden-kitten.jpg';
op2.innerHTML = 'Hidden kitten';

let op3 = document.createElement('option');
list.appendChild(op3);
op3.value = 'img/kitten-with-white-paws.jpg';
op3.innerHTML = 'Kitten with white paws';

let op4 = document.createElement('option');
list.appendChild(op4);
op4.value = 'img/sleeping-kitten.jpg';
op4.innerHTML = 'Sleeping kitten';

let op5 = document.createElement('option');
list.appendChild(op5);
op5.value = 'img/striped-kitten.jpg';
op5.innerHTML = 'Striped kitten';

/* Add image of kitten when name of picture is clicked */

let imgArea = document.querySelector('.container');
let img = document.createElement('img');
imgArea.insertAdjacentElement('afterbegin', img);
img.style.display = 'none';
let clicks = 0;
let changeClickNumber = document.querySelector('.clicks');

let setKittenImage = function () {
    document.querySelector('img').src = this.options[this.selectedIndex].value;
    img.style.display = 'block';
    count.style.display = 'block';
    clicks = 0;
    changeClickNumber.innerHTML = clicks;

    /* Add picture caption to the page */
    let p = document.createElement('p');
    p.classList.add("caption");
    let caption = document.querySelector('.caption');
    let text = document.querySelector('select').options[this.selectedIndex].text;
    caption.innerHTML = text;
    imgArea.insertAdjacentElement('beforeend', caption);
};

list.addEventListener('change', setKittenImage, false);



/* increment the click counter for each picture and display it on the page */
let clickListener = document.querySelector('img');

clickListener.addEventListener('click', function(){
    clicks++;
    changeClickNumber.innerHTML = clicks;
}, false);

