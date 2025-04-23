console.log("Hi i am from script tag");
    document.querySelector("#images-list").addEventListener
    ("click", function(e){
        // console.log(e);
    let hideElement = e.target.parentNode;
    let hiddenElement = hideElement

        if(e.target.tagName === "IMG"){
            // hideElement.remove();
            hideElement.parentNode.removeChild(hiddenElement);
        }

    }, false);