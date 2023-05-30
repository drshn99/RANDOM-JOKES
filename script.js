const apiUrl = "https://api.chucknorris.io/jokes/random";
const jokes = async () => {
  const response = await fetch(apiUrl);
  var data = await response.json();
  document.getElementsByTagName("textarea")[0].innerHTML = data.value;
};

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {
  jokes();
});
