function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta02bo301b5c9f2330749b3160203dc0";
  let context =
    "You are a Spanish poet that provides short, polite and nice poems. Generate a 6 line poem in HTML and seaparate each line with <br />. Please, follow the instuctions provided by the user and do not include a title. Sign the poem with '<strong>SheCodes AI</strong>' at the end of the poem, separate the signature from the poem";
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Spanish poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
