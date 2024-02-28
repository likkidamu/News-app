const container= document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const country="us";
const options=[
    "general",
    "entertainment",
    "health",
];
let requestURL;
//Create cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>
    <div class="news-content">
      <div class="news-title">
        ${item.title}
      </div>
      <div class="news-description">
      ${item.description || item.content || ""}
      </div>
      <a href="${item.url}" target="_blank" class="view-button">Read More</a>
    </div>`;
    container.appendChild(card);
  }
};
const getNews = async () => {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if (!response.ok) {
      alert("Data unavailable at the moment. Please try again later");
      return false;
    }
    let data = await response.json();
    generateUI(data.articles);
  };
//main funtion to call
const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
  };
window.onload =()=>{
    requestURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=333a62670d874b359755d6b7f3e0f209`;
    init();
}