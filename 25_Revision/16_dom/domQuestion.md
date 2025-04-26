# Element Select in js

```js
    document.getElementById("id-name");
    document.getElementsByClassName("class-name");
    document.getElementsByTagName("tag-name");
    document.querySelector("selector");
    document.querySelectorAll("selector");

```

# Event Listener

```js
    element.addEventListener("event", function, useCapture);

    // Parameter    Description
    // "event"	    Event type (e.g., "click", "mouseover", "keydown")
    // function	    Callback function jo event hone par chalega
    // useCapture	Optional (true/false) → capturing ya bubbling mode (default: false)

    document.getElementById("myBtn").addEventListener("click", function () {
        alert("Button Clicked!");
    })


    document.querySelector("div").addEventListener("mouseover", function () {
    console.log("Mouse is over the div");
    });


    btn.addEventListener("click", function () {
    console.log("Clicked!");
    });


    function handleClick() {
    console.log("Clicked!");
    }
    btn.addEventListener("click", handleClick);

    // remove
    function greet() {
    alert("Hi!");
    }
    btn.addEventListener("click", greet);
    btn.removeEventListener("click", greet); // Important: Same function reference is important

```

# Event Capturing

```js
    element.addEventListener("click", handler, true); // capturing
```
# Event Bubling 
```js
    element.addEventListener("click", handler, false); // bubbling (default)
```

## Example 

```js

    <div id="outer">
        <div id="middle">
            <button id="inner">Click me</button>
        </div>
    </div>

    document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer clicked");
    }, false); // bubbling

    document.getElementById("middle").addEventListener("click", () => {
    console.log("Middle clicked");
    }, false); // bubbling

    document.getElementById("inner").addEventListener("click", () => {
    console.log("Inner clicked");
    }, false); // bubbling


    // Output (on clicking button)
        /*
            Inner clicked
            Middle clicked
            Outer clicked
        */
    
    // Use 'true' instead of 'false (default)'
        /*
            Outer clicked
            Middle clicked
            Inner clicked
        */

```

## Summary Table 

1. Capturing Phase : Parent → Target : addEventListener(..., true)
2. Target Phase : Target Element : Always runs
3. Bubbling Phase: Target → Parent : addEventListener(..., false) 


# Event Propagation
Event Propagation ek process hai jisme ek event (jaise click, keydown, mouseover, etc.) ek element pe trigger hota hai aur wo parent se child tak ya child se parent tak propagate (travel) karta hai. Is process me 3 main phases hote hain:

Phases of Event Propagation:

## Capturing Phase (Top → Down)

Event sabse pehle outermost element (document ya window) se start hota hai aur target element tak pahuchta hai.
Agar aap event listener me true pass karte ho, toh ye capturing phase me handle hota hai.

```js
    element.addEventListener("click", handler, true); // Capturing
```
## Target Phase (Direct Target)
Jab event target element tak pahuchta hai, tab uss element ka event listener trigger hota hai.

## Bubbling Phase (Bottom → Up)

Event fir target element se parent elements tak bubble karta hai.
Ye default behavior hota hai, jab tum event listener me false ya koi bhi third parameter nahi dete ho.
    
```js
    element.addEventListener("click", handler, false); // Bubbling (default)
```

# Event Delegation
Event Delegation ek technique hai jisme hum parent element pe ek hi event listener lagate hain, aur uske through multiple child elements ke events ko handle karte hain.

## How Event Delegation Works:
Aap parent element pe ek event listener lagate ho.
Jab child element pe event trigger hota hai (jaise click), to event parent element tak propagate hota hai.
Aap event.target ka use karke identify kar lete ho ki kaunsa specific child element trigger hua.

## Benefits of Event Delegation:
Better Performance: Multiple event listeners lagane ki jagah ek hi listener laga kar, hum child elements ko handle kar sakte hain.

Dynamic Elements: Agar new elements dynamically add hote hain, toh unhe automatically handle kiya ja sakta hai bina naye listeners add kiye.

# Event Propagation vs Event Delegation:

## Event Propagation
Description - Event ka flow hota hai capturing → target → bubbling phase me.

Use Case    - Multiple elements ke liye listeners lagana.

Example     -addEventListener("click", handler, true) (Capturing)


## Event Delegation
Description - Parent element pe listener laga kar child elements ko handle karte hain.

Use Case    - Dynamic elements ya large sets of elements ke liye efficient event handling.

Example     - Parent element pe listener laga kar child click handle karna.

# setTimeout and setInterval

## setTimeout
Ye function ek baar code ko run karta hai specified delay ke baad.

```js
    setTimeout(function, delay_in_ms); // syntax

    setTimeout(() => {
    console.log("Hello after 2 seconds");
    }, 2000); // 2000 ms = 2 seconds // output "Hello after 2 seconds" (one time print)
```
## setInterval
Ye function bar-bar code ko run karta hai, har baar specified interval ke baad.

```js
    setInterval(function, interval_in_ms);

    setInterval(function(){
        console.log("Sujit Kumar")
    }, 1000) // 1000 ms = 1 seconds // output "Sujit Kumar" (Every second print)

    // for stop 
    let id = setInterval(() => {
    console.log("Repeating...");
    }, 1000);

    setTimeout(() => {
    clearInterval(id);
    console.log("Stopped!");
    }, 5000);

```