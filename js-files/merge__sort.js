 
 
 async function merge(b, left, mid, right) {
    console.log('in merge');
    const array1 = mid - left + 1;
    const array2 = right - mid;

    //await delay_timer(time_lag);
 
    // Create temp arrays
    let leftArray = new Array(array1);
    let rightArray = new Array(array2);
 
    // Copy data to temp arrays leftArray[] and rightArray[]
    for (let i = 0; i < array1; i++) {
        //console.log('coming in array loop');
        await delay_timer(time_lag);
        b[left + i].style.background = 'yellow';
        leftArray[i] = b[left + i].style.height;
    }
        
    for (let j = 0; j < array2; j++) {
        await delay_timer(time_lag);
        b[mid + 1 + j].style.background = 'orange';
        rightArray[j] = b[mid + 1 + j].style.height;
    }
        
 
    let index1 = 0; // staring index of first subarray
    let index2 = 0; 
    let mergeIndex = left; 
 
    //merging
    while ( index1 < array1 && index2 < array2 ) {


        await delay_timer(time_lag);

        if((array1 + array2) == b.length){
            b[mergeIndex].style.background = 'green';
        }
        else{
            b[mergeIndex].style.background = 'aqua';
        }  


        if (parseInt(leftArray[index1]) <= parseInt(rightArray[index2])) {     
               
            b[mergeIndex].style.height = leftArray[index1];
            index1++;
                  
        }
        else {
            
            
           
            b[mergeIndex].style.height = rightArray[index2];
            index2++;

        }

       
        mergeIndex++;
    }
   
    while (index1 < array1) {
        await delay_timer(time_lag);
        if((array1 + array2) == b.length){
            b[mergeIndex].style.background = 'green';
        }
        else{
            b[mergeIndex].style.background = 'aqua';
        } 
        
        
        b[mergeIndex].style.height = leftArray[index1];
        index1++;
        mergeIndex++;
    }
   
    while (index2 < array2) {
        await delay_timer(time_lag);
        if((array1 + array2) == b.length){
            b[mergeIndex].style.background = 'green';
        }
        else{
            b[mergeIndex].style.background = 'aqua';
        } 
        b[mergeIndex].style.height = rightArray[index2];
        index2++;    

        mergeIndex++;
    }


     
 }
   

 async function mergeSort(b, begin, end){
    //const b = document.querySelectorAll(".bar");

    console.log('merge sortworking');
    if (begin >= end) {
        return; 
    }
    

    const mid = begin + Math.floor((end - begin) / 2);
    await mergeSort(b, begin, mid);
    await mergeSort(b, mid + 1, end);
    await merge(b, begin, mid, end);

  
    
    
    

 }




//disabling the other buttons while merge sort is working
   


const checklist_merge = document.querySelector(".merge_button");
checklist_merge.addEventListener('click', async function(){
    //console.log('here');
    let b = document.querySelectorAll(".bar");
    let begin=0;
    let end=b.length-1;  //lower and higher ends
    disableSize();
    disableSortingButtons() ;
    disableGenerateArrayButton();
    await mergeSort(b, begin, end);   //won't work without await
    enableSize();
    enableSortingButtons();
    enableGenerateArrayButton();   
    
});




 

