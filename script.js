// Add interactive features here

document.addEventListener("DOMContentLoaded", function () {
    // Add any animations or interactive features here
});


// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = [
    'Softwere Developer  ',
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
    // Loop through each character and add it to the element
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingAnimationElement.textContent += text[i];
        }, i * 200); // Increase the delay to slow down the typing animation
    }

    // Once the animation is complete, reset the text and start over
    setTimeout(() => {
        typingAnimationElement.textContent = '';
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);


    
    document.getElementById('navlink').addEventListener('click', function() {
        this.classList.add('active');
    });







    var mybubbles = document.getElementsByClassName("ani-bubble");

    var bubblecolors = [ "#c5a5ab", "#e3e2dd", "#87a6c0" ];
    
    for (var i = 0; i < mybubbles.length; i++) {
    
      mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
      mybubbles[i].style.opacity = Math.random()*.75;
    
      var bubblesize = (Math.floor(Math.random() * 9)+2) * 50;
    
      mybubbles[i].style.width = bubblesize+"px";
      mybubbles[i].style.height = bubblesize+"px";
      mybubbles[i].style.borderRadius = (bubblesize/2)+"px";
    
      mybubbles[i].style.left = Math.floor(Math.random() * 100) + "%";
    
      mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16)+8 + "s";
      mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + "s";
    
    }
    
    $( document ).ready(function() {
      jQuery.expr.filters.offscreen = function(el) {
      return (
          (el.offsetLeft + el.offsetWidth) < 0 
          || (el.offsetTop + el.offsetHeight) < 0
          || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
        );  
        };
      setInterval(function(){
        $('.ani-bubble').each(function(){
          if($(this).is(':offscreen')){
           var bubbleoffset = Math.floor((Math.random() * 140) - 19);
             $(this).css({ 'left': bubbleoffset+'%' }); 
          }
        });
      },50);
    });


