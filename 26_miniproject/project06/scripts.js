console.log("Hello World!");

// Language options
let language = ["English", "Hindi", "Chinese", "Spanish", "French"];

// FAQ data
const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return items within 30 days...",
    related: "Returns, Refunds"
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location...",
    related: "Shipping, Delivery"
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to many countries...",
    related: "Shipping, Delivery"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, Apple Pay...",
    related: "Payments, Checkout"
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact us at support@example.com or call...",
    related: "Contact, Support"
  }
];

// Create language dropdown
let langDiv = document.getElementById("language");
let select = document.createElement("select");
select.id = "lang";
select.style.background = "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)";
select.style.color = "black";
// select.style.padding = "5px";
console.log(langDiv);
console.log(language);


language.forEach(lang => {
  let option = document.createElement("option");
  console.log(lang);
  option.value = lang;
  option.text = lang;
  option.style.color = "white";
  option.style.background = "black";
  select.appendChild(option);
});

langDiv.appendChild(select);

// Style FAQ container
let faqContainer = document.getElementById("faq-container");
console.log("faqContainer",faqContainer);
console.log(typeof faqContainer);


Object.assign(faqContainer.style, {
  background: "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)",
  color: "black",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  margin: "20px auto",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  transition: "background 0.3s ease, color 0.3s ease",
  cursor: "pointer",
  textAlign: "left",
  width: "80%",
  maxWidth: "800px",
  border: "1px solid #ccc"
});

// Function to create FAQ item element
function createFaqItem(faq) {
  let faqItem = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h3.innerText = faq.question;
  p.innerText = faq.answer;
  p.style.display = "none";

  faqItem.appendChild(h3);
  faqItem.appendChild(p);

  faqItem.addEventListener("click", () => {
    p.style.display = p.style.display === "none" ? "block" : "none";
  });

  Object.assign(faqItem.style, {
    background: "linear-gradient(90deg, #FEC45D, #FC6E7B, #995FBB)",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
    textAlign: "left",
    width: "100%",
    maxWidth: "800px"
  });

  return faqItem;
}

// Function to display FAQs
function displayFaqs(faqArray) {
  faqContainer.innerHTML = "";
  faqArray.forEach(faq => {
    const faqItem = createFaqItem(faq);
    faqContainer.appendChild(faqItem);
  });
}

// Initially display all FAQs
displayFaqs(faqData);

// Search functionality (common for input and button)
function filterFaqs(query) {
  const keywords = query.trim().toLowerCase().split(" ");
  const filteredFaqs = faqData.filter(faq =>
    keywords.some(word =>
      faq.question.toLowerCase().includes(word) || faq.answer.toLowerCase().includes(word)
    )
  );
  displayFaqs(filteredFaqs);
}

// Search input suggestion
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  filterFaqs(query);
});

// Search button click
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  filterFaqs(query);
});
