
async function bubbleSort() {
   
    const b = document.querySelectorAll(".bar");
    for(let i = 0; i < b.length-1; i++){
        //console.log('hey');
        for(let j = 0; j < b.length-i-1; j++){
            //console.log('coming in inner loop');
           // b[j].style.background = 'red';
            b[j].style.background = 'red';
            b[j+1].style.background = 'red';
            if( parseInt(b[j].style.height) > parseInt(b[j+1].style.height) ){
                //for watching the changes
                await delay_timer(time_lag);
               // console.log('check');
                swap(b[j], b[j+1]);
            }
            //the bars we are comparing will be colored rgba(66, 134, 244, 0.8) again
            b[j].style.background = 'rgba(66, 134, 244, 0.8)';
            b[j+1].style.background = 'rgba(66, 134, 244, 0.8)';
        }

        b[b.length-1-i].style.background = 'green';  //sorted bar
    }
    b[0].style.background = 'green';
}

//disabling the other buttons while bubble sort is working

const checklist_bubble = document.querySelector(".bubble_button");
checklist_bubble.addEventListener('click', async function(){
    disableSize();
    disableSortingButtons();
    disableGenerateArrayButton();
    await bubbleSort(); //won't work without await
    enableSize();
    enableSortingButtons();
    enableGenerateArrayButton();   

    
});