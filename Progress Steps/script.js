/*we create variable*/
const progress = document.getElementById('progress'); 
const prev = document.getElementById('prev') ;
const next = document.getElementById('next') ;
const circles = document.querySelectorAll('.circle');

let currentActive= 1;


/** The following two functions must calculate and indicate the previous next step depending on wether you click on 'prev' or 'next' */
/** We also used the update function that we have created */
next.addEventListener( 'click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener( 'click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    
    update();
})


/** this function activates only the steps that was completed on the progress bar, control the evolution of progress bar and buttons */
/**this step are activated mean that we add a class and his specifics property that was in css define (or we remove it when the step is not completed) */
function update(){
    //only completed steps are activated
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');  // we add the class 'active'
        }else{
            circle.classList.remove('active'); // we remove the class 'active'
        }
    })

    const actives = document.querySelectorAll('.active');
    // this line describe the evolution of the progress bar
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    
    // We control the button and each button can only used when necessary ('next' when we can go to the next step and 'prev' when we still have a previous step)
    if(currentActive === 1){
        prev.disabled =true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }

}
