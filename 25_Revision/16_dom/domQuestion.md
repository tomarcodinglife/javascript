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

    <!-- Phase	            Direction	                Listener Mode
    Capturing Phase	    Parent → Target	            addEventListener(..., true)
    Target Phase	    Target Element	            Always runs
    Bubbling Phase	    Target → Parent	            addEventListener(..., false) -->
