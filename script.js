// ================= SCROLL ANIMATION =================
window.addEventListener("scroll", () => {

  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });

  // Progress bar
  let scroll = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;

  let progress = document.getElementById("progress");
  if (progress) {
    progress.style.width = (scroll / height) * 100 + "%";
  }
});


// ================= CHATBOT =================
function askAI() {
  const inputBox = document.getElementById("userInput");
  const response = document.getElementById("response");

  if (!inputBox || !response) return;

  let input = inputBox.value.trim();

  if (input === "") {
    response.innerText = "Please ask something...";
    return;
  }

  response.innerText = "AI is thinking... 🤖";

  setTimeout(() => {
    let reply = "I am still learning...";

    if (input.toLowerCase().includes("internet")) {
      reply = "The Internet started in 1969 with ARPANET.";
    } 
    else if (input.toLowerCase().includes("ai")) {
      reply = "AI is transforming the future of the Internet.";
    } 
    else if (input.toLowerCase().includes("future")) {
      reply = "The future of the Internet is intelligent and decentralized.";
    } 
    else if (input.toLowerCase().includes("social")) {
      reply = "Social media connects billions of people worldwide.";
    }
    else {
  const replies = [
    "That's an interesting question 🤔",
    "The internet is constantly evolving.",
    "AI is changing how we interact with technology.",
    "I am still learning about that topic...",
    "Try asking about AI, Internet, or Future 😉"
  ];

  reply = replies[Math.floor(Math.random() * replies.length)];
}

    response.innerText = reply;
  }, 1000);

  inputBox.value = "";
}

// ================= LOADER =================
window.onload = () => {
  let loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};


// ================= PARALLAX =================
document.addEventListener("mousemove", (e) => {
  let title = document.querySelector(".hero h1");

  if (!title) return;

  let x = e.clientX / 50;
  let y = e.clientY / 50;

  title.style.transform = `translate(${x}px, ${y}px)`;
});


// ================= FUTURE BUTTON =================
let btn = document.querySelector(".future-btn");

if (btn) {
  btn.addEventListener("click", () => {

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

    let response = document.getElementById("response");
    if (response) {
      response.innerText = "🚀 Welcome to the Future! 😊";
    }

  });
}

