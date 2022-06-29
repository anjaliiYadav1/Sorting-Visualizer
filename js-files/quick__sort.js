 
 
 async function partition(b, l, h)
 {
     let x = parseInt(b[h].style.height);

     b[h].style.background = 'red';  //pivot
     let i = (l - 1);
   
     for (let j = l; j <= h - 1; j++) {

        b[j].style.background = 'yellow';
        await delay_timer(time_lag);

        if (parseInt(b[j].style.height) <= x) {
            i++;
            swap(b[i], b[j]);

            b[i].style.background = 'orange';
            if(i != j) {
                b[j].style.background = 'orange';
            }
            await delay_timer(time_lag);

        }

        else {
            b[j].style.background = 'pink';
        }
     }
     swap(b[i + 1], b[h]);
     b[h].style.background = 'pink';
     b[i+1].style.background = 'green';

     for(let k = 0; k < b.length; k++){
        if(b[k].style.background != 'green')
            b[k].style.background = 'rgba(66, 134, 244, 0.8)';
    }

     return (i + 1);
 }
   

 async function quickSort(b, l, h){

   // console.log('working');
    
    
    if (l < h) {
         // Partitioning index 
         let p = await partition(b, l, h);
         await quickSort(b, l, p - 1);
         await quickSort(b, p + 1, h);
    }
    else {
        if(l >= 0 && h >= 0 && l < b.length && h < b.length){
            b[h].style.background = 'green';
            b[l].style.background = 'green';
        }
    }

 }




//disabling the other buttons while quick sort is working
   


const checklist_quick = document.querySelector(".quick_button");
checklist_quick.addEventListener('click', async function(){
    //console.log('here');
    let b = document.querySelectorAll(".bar");
    let l=0;
    let h=b.length-1;  //lower and higher ends
    disableSize();       //size slider
    disableSortingButtons() ;
    disableGenerateArrayButton();
    await quickSort(b, l, h);   //won't work without await
    enableSize();
    enableSortingButtons();
    enableGenerateArrayButton();   
    
});