

async function selectionSort() {
    const b = document.querySelectorAll(".bar");
    let  min_idx=0;
    console.log('selection sort');
 
   
    for (let i = 0; i <= b.length-1; i++)
    {
      
        b[i].style.background = 'blueviolet';
        min_idx = i;
       
        
        for (let j = i+1; j < b.length; j++){
            b[j].style.background = 'red';
            await delay_timer(time_lag);
            
            if (parseInt(b[min_idx].style.height) > parseInt(b[j].style.height)){
               // b[j].style.background = 'aqua';
                if(min_idx != i){
                    b[min_idx].style.background = 'cyan';
                }
               
               // await delay_timer(time_lag);
                min_idx = j;
              
            }
            else {
                b[j].style.background = 'cyan';
            }
           // await delay_timer(time_lag);
            
            //b[j].style.background = 'aqua';
          

           
        }

            
            
 
       
        await delay_timer(time_lag);
        swap(b[min_idx], b[i]);
        b[min_idx].style.background = 'cyan';
        b[i].style.background = 'green';
    }
    //b[b.length-1].style.background = 'green';
}

//disabling the other buttons while selection sort is working

const checklist_selection = document.querySelector(".selection_button");
checklist_selection.addEventListener('click', async function(){
    console.log('here');
    disableSize();
    disableSortingButtons();
    disableGenerateArrayButton();
    await selectionSort();   //won't work without await
    enableSize();
    enableSortingButtons();
    enableGenerateArrayButton();   
    
});