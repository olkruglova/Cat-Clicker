let clicks = 0;
let changeClickNumber = document.querySelector('.clicks');
let clickListener1 = document.querySelector('.listener');

/* create the second picture of a cat */
let parent = document.querySelector('.col-auto');
let pic = document.createElement("IMG");

pic.src = 'img/kitten-with-white-paws.jpg';
parent.appendChild(pic);
pic.classList.add("listener2");

let clickListener2 = document.querySelector('.listener2');

/*add captions under pictures*/
let caption1 = document.createElement("p");
let caption2 = document.createElement("p");
caption1.innerHTML = 'Friendly kitten';
caption2.innerHTML = 'Kitten with white paws';
parent.appendChild(caption1);
parent.appendChild(caption2);

/* increment the click counter and display it on the page */
clickListener1.addEventListener('click', function(){
    clicks++;
    changeClickNumber.innerHTML = clicks;
}, false);

clickListener2.addEventListener('click', function(){
    clicks++;
    changeClickNumber.innerHTML = clicks;
}, false);


