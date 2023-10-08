const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke");

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      jokeText.innerText = data.value;
    } else {
      jokeText.innerText = "Something went wrong... couldn't load a joke...";
    }
  };

  xhr.send();
}

jokeBtn.addEventListener("click", getJoke);

getJoke();
