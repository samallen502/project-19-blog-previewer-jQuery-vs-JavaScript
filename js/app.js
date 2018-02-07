// const box = document.querySelector('.box') /* Right side of equation targets div with class of box from html ... left side of equation saves that to a variable called box. */
// box.style.display = 'none'; /*This easily makes the green box disappear when previewed. */
/* Hey, I just learned how to easily comment out an entire line! See what I did in the above two lines? :-) */

// jQuery('.box').hide(); /* This accomplishes what the two lines above accomplished, making the box disappear ... but easier! Basically, I just called the jQuery functions, specified the box class from html as the target within the first parentheses, then called the hide function on the box. */
// $('.box').hide();
/* The line above that's commented out is functionally the same to the one that is not commented out. jQuery gets called often, so $ is just shorthand for jQuery. */

// $('.box'.).show(); /* This brings the box back! */

/* Now, we are going to add a CLICK EVENT, an alert whenever the user clicks the box. */

/* I had to comment out Lines 5 & 9 for the below code to work. */
// const box = document.querySelector('.box') /* First, select the html element using querySelector. */
// box.addEventListener('click', function(){ /* Next, add an event listener for a click event, then an EVENT HANDLER CALLBACK, a function you want to run when the event, the click, occurs. */
//     alert('Ouch! Try not to click so hard next time!');
// })

/* The below code will accomplish the same thing as Lines 14-17, which I had to comment out for obvious reasons. */

$('.box').click(function(){
    alert('Ouch! Try not to click so hard next time!')
})