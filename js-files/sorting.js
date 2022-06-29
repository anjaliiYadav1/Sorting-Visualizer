//const dta = document.querySelector(".main");

function swap(bar1, bar2) { 
          
    let v = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = v;
    
} 

function disableSize() {
    document.querySelector("#array-size").disabled = true;
}

function enableSize() {
    document.querySelector("#array-size").disabled = false;
}


function disableGenerateArrayButton() {
    document.querySelector(".newArray").disabled = true;
}

function enableGenerateArrayButton() {
    document.querySelector(".newArray").disabled = false;
}

function disableSortingButtons(){
    document.querySelector(".bubble_button").disabled = true;
    document.querySelector(".insertion_button").disabled = true;
    document.querySelector(".merge_button").disabled = true;
    document.querySelector(".quick_button").disabled = true;
    document.querySelector(".selection_button").disabled = true;
}

function enableSortingButtons(){
    document.querySelector(".bubble_button").disabled = false;
    document.querySelector(".insertion_button").disabled = false;
    document.querySelector(".merge_button").disabled = false;
    document.querySelector(".quick_button").disabled = false;
    document.querySelector(".selection_button").disabled = false;
}






function delay_timer (ms) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, ms); 
    }) 
}


//making the array size to be variable 


let sizeOfArray= document.querySelector('#array-size');


sizeOfArray.addEventListener('input', function(){

    generateNewArray(parseInt(sizeOfArray.value));
});


let time_lag = 250;

//event listener will update the time delay

let valueOfSpeed = document.querySelector('#speed-value');

 
valueOfSpeed.addEventListener('input', function(){
   
    time_lag = 350 - parseInt(valueOfSpeed.value);
});


let unsorted_array = [] ;


generateNewArray();


function generateNewArray(num = 50) {   //default 
    //deleting any previous bars
    deleteBars();
    //console.log(unsorted_array);

  
    unsorted_array = [];
    for (let i = 0; i < num; i++) {
        unsorted_array.push(generateRandomNum(5,700));
    }
    //console.log(unsorted_array);

    
    const goToDiv = document.querySelector("#bars");

   
    for (let i = 0; i < num; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${unsorted_array[i]}px`;
        bar.classList.add('bar');
        bar.classList.add('style-bar');
        bar.classList.add(`No${i}`);
        goToDiv.appendChild(bar);
    }
}



function deleteBars() {
    //removing the old bars
    const goToDiv = document.querySelector("#bars");
    goToDiv.innerHTML = '';
}

function generateRandomNum(min,max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log('array generation');
    enableSize();
    enableSortingButtons();
    generateNewArray(sizeOfArray.value);
});






