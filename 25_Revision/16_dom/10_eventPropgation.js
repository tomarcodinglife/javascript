
let eventBubbling = document.getElementById("event-bubbling");
let eventCapturing = document.getElementById("event-capturing");   
let eventTargeting = document.getElementById("event-targeting");
let eventDelegation = document.getElementById("event-delegation");
let listOfEventBubbling = document.getElementById("list-of-event-bubbling");
let listOfEventCapturing = document.getElementById("list-of-event-capturing");
let listOfEventTargeting = document.getElementById("list-of-event-targeting");
let listOfEventDelegation = document.getElementById("list-of-event-delegation");

let bubblingStart = document.getElementById("bubbling-start");
let capturingStart = document.getElementById("capturing-start");
let targetingStart = document.getElementById("targeting-start");
let delegationStart = document.getElementById("delegation-start");

eventBubbling.addEventListener("click", function() {
        alert("Event Bubbling - Div Clicked");
}, false);

eventCapturing.addEventListener("click", function() {
        alert("Event Capturing - Div Clicked");
}, true);

eventTargeting.addEventListener("click", function(e) {
        alert(`Event Targeting - Div Clicked ${e.target.textContent}`);
}, false);

eventDelegation.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        alert(`Event Delegation - Div Clicked ${e.target.textContent}`);
        console.log(e.target);
    }
}, false);

bubblingStart.addEventListener("click", function() {
    alert("Event Bubbling Start - Button Clicked");
}, false);

capturingStart.addEventListener("click", function() {
    alert("Event Capturing Start - Button Clicked");
}, true);



// stop propgation

let stopPropagationContainer = document.getElementById("stop-propagation-container");
let stopPropagationStart = document.getElementById("stop-propagation-start");

stopPropagationContainer.addEventListener("click", function(e){
    e.stopPropagation(); // it is used to stop the event from bubbling up to the parent element.

}, false);

// preventDefault
let preventDefaultContainer = document.getElementById("prevent-default-container");
let preventDefaultStart = document.getElementById("prevent-default-start");

preventDefaultContainer.addEventListener("click", function(e){
    e.preventDefault(); // it is used to prevent the default action of the event from happening.
    // for example, if you click on a link, it will not redirect to the link.
    alert("Prevent Default - Link Clicked");
}, false);

