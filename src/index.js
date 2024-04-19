function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      `En las noches claras, <br />
resuelvo el problema de la soledad del ser. <br />
Invito a la luna y con mi sombra somos tres.`,
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
