console.log("Hello World!");
let language = ["English", "Hindi", "Chinese", "Spanish", "French" ];

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return items within 30 days of purchase for a full refund or exchange, provided the items are unused and in their original packaging. Please see our full return policy page for more details.",
    related : "Returns, Refunds"
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location and the shipping method selected. Standard shipping typically takes 3-7 business days within the continental US. Expedited options are available at checkout for faster delivery.",
    related : "Shipping, Delivery"
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary by destination. You can see the available options and costs during the checkout process after entering your shipping address.",
    related : "Shipping, Delivery"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. We are always looking to add more payment options for your convenience.",
    related : "Payments, Checkout"
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team via email at support@example.com or by phone at 1-800-EXAMPLE. Our support hours are Monday to Friday, 9 AM to 5 PM EST.",
    related : "Contact, Support"
  }
];


let langDiv = document.getElementById("language");
let select = document.createElement("select");
select.id = "lang"
select.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
select.style.color = "black";

for (let i=0; i < language.length; i++){
    let option = document.createElement("option");
    select.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
    option.style.color = "white";
    option.style.background = "black";
    option.style.background.hover = "white"
    option.value = language[i];
    option.text = language[i];
    select.appendChild(option);
    select.style.padding = "5px";
}
langDiv.appendChild(select);

let faqContainer = document.getElementById("faq-container");
faqContainer.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
faqContainer.style.color = "black";
faqContainer.style.padding = "20px";
faqContainer.style.borderRadius = "10px";
faqContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
faqContainer.style.margin = "20px";
faqContainer.style.fontFamily = "Arial, sans-serif";
faqContainer.style.fontSize = "16px";
faqContainer.style.lineHeight = "1.5";
faqContainer.style.transition = "background 0.3s ease, color 0.3s ease";
faqContainer.style.cursor = "pointer";
faqContainer.style.textAlign = "left";
faqContainer.style.width = "80%";
faqContainer.style.maxWidth = "800px";
faqContainer.style.margin = "20px auto";
faqContainer.style.padding = "20px";
faqContainer.style.border = "1px solid #ccc";
faqContainer.style.borderRadius = "10px";
faqContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// Loop through the faqData array and create a new div for each FAQ item
faqData.forEach((faq, index) => {
    // console.log(faq); // {question: "What is your return policy?", answer: "Our return
    // console.log(index); // 1, 2, 3, 4, 5
    // Create a new div for each FAQ item
    let faqItem = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    // Set the text content of the h3 and p elements and add them to the faqItem div
    h3.innerText = faq.question;
    p.innerText = faq.answer;
    faqItem.appendChild(h3);
    faqItem.appendChild(p);
    // Add a click event listener to the faqItem div
    faqItem.addEventListener("click", () => {
        // Toggle the visibility of the answer
        p.style.display = p.style.display === "none" ? "block" : "none";
    });
    // Set the initial display of the answer to "none"
    p.style.display = "none";
    // Set the styles for the faqItem div
    faqItem.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
    faqItem.style.color = "black";
    faqItem.style.padding = "10px";
    faqItem.style.borderRadius = "5px";
    faqItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    faqItem.style.margin = "10px 0";
    faqItem.style.cursor = "pointer";
    faqItem.style.transition = "background 0.3s ease, color 0.3s ease";
    faqItem.style.textAlign = "left";
    faqItem.style.width = "100%";
    faqItem.style.maxWidth = "800px";
    faqItem.style.margin = "10px auto";
    faqItem.style.padding = "10px";
    // faqItem.style.border = "1px solid #ccc";
    faqItem.style.borderRadius = "5px";

    // Append the faqItem div to the faqContainer
    faqContainer.appendChild(faqItem);
});
// ****************************************************************************************************************************
/*
// add faq topics button
let topicsSet = new Set();
// add faq topics button 
let faqTopics = document.createElement("div");
// faqTopics.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
// faqTopics.style.color = "black";
// faqTopics.style.padding = "20px";
// faqTopics.style.borderRadius = "10px";
// faqTopics.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
// faqTopics.style.margin = "20px";
// faqTopics.style.fontFamily = "Arial, sans-serif";
// faqTopics.style.fontSize = "16px";
// faqTopics.style.lineHeight = "1.5";
// faqTopics.style.transition = "background 0.3s ease, color 0.3s ease";
// faqTopics.style.cursor = "pointer";
// faqTopics.style.textAlign = "left";
// faqTopics.style.width = "80%";
// faqTopics.style.maxWidth = "800px";
// faqTopics.style.margin = "20px auto";
// faqTopics.style.padding = "20px";
// faqTopics.style.border = "1px solid #ccc";
// faqTopics.style.borderRadius = "10px";
// faqTopics.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
// faqTopics.style.display = "flex";
// faqTopics.style.flexDirection = "column";
// faqTopics.style.alignItems = "center";
// faqTopics.style.justifyContent = "center";
// faqTopics.style.fontWeight = "bold";
// faqTopics.style.textAlign = "center";
// faqTopics.style.cursor = "pointer";

faqData.forEach((faq, index) => {
    let topic = document.createElement("div");
    // topic.innerText = faq.related;
    // topic.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
    // topic.style.color = "black";
    // topic.style.padding = "10px";
    // topic.style.borderRadius = "5px";
    // topic.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    // topic.style.margin = "10px 0";
    // topic.style.cursor = "pointer";
    // topic.style.transition = "background 0.3s ease, color 0.3s ease";
    // topic.style.textAlign = "left";
    // topic.style.width = "100%";
    // topic.style.maxWidth = "800px";
    // topic.style.margin = "10px auto";
    // topic.style.padding = "10px";

    // Append the faqItem div to the faqContainer
    let tag = faq.related.split(", ");
    tag.map((t) => {
        console.log(t);
        if(!topicsSet.has(t)){
            topicsSet.add(t);
            let topic = document.createElement("div");
            topic.innerText = t;
            topic.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
            topic.style.color = "black";
            topic.style.padding = "10px";
            topic.style.borderRadius = "5px";
            topic.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            topic.style.margin = "10px 0";
            topic.style.cursor = "pointer";
            topic.style.transition = "background 0.3s ease, color 0.3s ease";
            topic.style.textAlign = "left";
            topic.style.width = "100%";
            topic.style.maxWidth = "800px";
            topic.style.margin = "10px auto";
            topic.style.padding = "10px";

            faqTopics.appendChild(topic);
        }
    });

});
faqContainer.appendChild(faqTopics);
// add event listener to the topics

*/
//*************************************************************************************************** */

// Search input Suggestion
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
    // input trim as as per space and convert to lower case
    let searchValue = searchInput.value.trim().toLowerCase();
    splitWords = searchValue.split(" ");
    console.log( splitWords);
    splitWords.forEach((word) => {
        console.log(`word = ${word}`);
        // filter the faqData based on the search value
        let filteredData = faqData.filter(faq => {
            return faq.question.toLowerCase().includes(word) || faq.answer.toLowerCase().includes(word);
        });
        console.log(filteredData);
        // Clear the previous suggestions
        faqContainer.innerHTML = "";
        // Display the filtered FAQs
        filteredData.forEach((faq, index) => {
            // Create a new div for each FAQ item
            let faqItem = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            // Set the text content of the h3 and p elements and add them to the faqItem div
            h3.innerText = faq.question;
            p.innerText = faq.answer;
            faqItem.appendChild(h3);
            faqItem.appendChild(p);
            // Add a click event listener to the faqItem div
            faqItem.addEventListener("click", () => {
                // Toggle the visibility of the answer
                p.style.display = p.style.display === "none" ? "block" : "none";
            });
            // Set the initial display of the answer to "none"
            p.style.display = "none";
            // Set the styles for the faqItem div
            faqItem.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
            faqItem.style.color = "black";
            faqItem.style.padding = "10px";
            faqItem.style.borderRadius = "5px";
            faqItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            faqItem.style.margin = "10px 0";
            faqItem.style.cursor = "pointer";
            faqItem.style.transition = "background 0.3s ease, color 0.3s ease";
            faqItem.style.textAlign = "left";
            faqItem.style.width = "100%";
            faqItem.style.maxWidth = "800px";
            faqItem.style.margin = "10px auto";
            faqItem.style.padding = "10px";

            // Append the faqItem div to the faqContainer
            faqContainer.appendChild(faqItem);
        });
    });
});

// add event listener on search button
let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
    // input trim as as per space and convert to lower case
    let searchValue = searchInput.value.trim().toLowerCase();
    splitWords = searchValue.split(" ");
    console.log( splitWords);
    splitWords.forEach((word) => {
        console.log(`word = ${word}`);
        // filter the faqData based on the search value
        let filteredData = faqData.filter(faq => {
            return faq.question.toLowerCase().includes(word) || faq.answer.toLowerCase().includes(word);
        });
        console.log(filteredData);
        // Clear the previous suggestions
        faqContainer.innerHTML = "";
        // Display the filtered FAQs
        filteredData.forEach((faq, index) => {
            // Create a new div for each FAQ item
            let faqItem = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            // Set the text content of the h3 and p elements and add them to the faqItem div
            h3.innerText = faq.question;
            p.innerText = faq.answer;
            faqItem.appendChild(h3);
            faqItem.appendChild(p);
            // Add a click event listener to the faqItem div
            faqItem.addEventListener("click", () => {
                // Toggle the visibility of the answer
                p.style.display = p.style.display === "none" ? "block" : "none";
            });
            // Set the initial display of the answer to "none"
            p.style.display = "none";
            // Set the styles for the faqItem div
            faqItem.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
            faqItem.style.color = "black";
            faqItem.style.padding = "10px";
            faqItem.style.borderRadius = "5px";
            faqItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            faqItem.style.margin = "10px 0";
            faqItem.style.cursor = "pointer";
            faqItem.style.transition = "background 0.3s ease, color 0.3s ease";
            faqItem.style.textAlign = "left";
            faqItem.style.width = "100%";
            faqItem.style.maxWidth = "800px";
            faqItem.style.margin = "10px auto";
            faqItem.style.padding = "10px";
            // Append the faqItem div to the faqContainer
            faqContainer.appendChild(faqItem);
        });
    });
});

