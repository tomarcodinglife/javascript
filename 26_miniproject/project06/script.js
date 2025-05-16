console.log("Hello World!");
let language = ["English", "Hindi", "Chinese", "Spanish", "French"];

constfaqData = [
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
}
langDiv.appendChild(select);

