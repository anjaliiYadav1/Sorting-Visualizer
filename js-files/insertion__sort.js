 
 
async function insertionSort() {
    console.log('insertion');
    const b = document.querySelectorAll(".bar");
    b[0].style.background = 'green';
    let i, key, j;
    let n=b.length;

    for (i = 1; i < n; i++){
        key = b[i].style.height ;
        j = i - 1;
        b[j].style.background = 'red';
        await delay_timer(time_lag);
 
      
        while (j >= 0 && parseInt(b[j].style.height) > parseInt(key)) {
            b[j].style.background = 'red';
            //await delay_timer(time_lag);
            b[j+1].style.height = b[j].style.height ;
            await delay_timer(time_lag);
            j = j - 1;

            let k=i;
            while(k>=0){
                b[k].style.background = 'green';
                k--;
            }
            
            
            //b[i].style.background = 'red';
        }
        b[j+1].style.height  = key;
        b[i].style.background = 'green';
    }
}



//disabling the other buttons while insertion sort is working

const checklist_insertion = document.querySelector(".insertion_button");
checklist_insertion.addEventListener('click', async function(){
    console.log('here');
    disableSize();
    disableSortingButtons();
    disableGenerateArrayButton();
    await insertionSort();   //won't work without await
    enableSize();
    enableSortingButtons();
    enableGenerateArrayButton();   
    
});