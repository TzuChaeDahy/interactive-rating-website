const numbers = ["one", "two", "three", "four", "five"];

const body = document.querySelector("body");

if (localStorage.getItem("userRating")) {
  displayThankPage(body);
} else {
  displayRatingPage(body);
}

const form = document.querySelector("form");
const radioLabels = document.querySelectorAll("label");
const radioBtns = document.querySelectorAll("input[name='rate']");
const submitBtn = document.querySelector("#submit-btn");

function displayRatingPage(container) {
  container.classList.add(
    "w-full",
    "min-h-screen",
    "flex",
    "justify-center",
    "items-center",
    "text-[15px]",
    "font-overpass",
    "bg-project-600"
  );
  const main = document.createElement("main");
  main.classList.add(
    "w-11/12",
    "max-w-sm",
    "px-4",
    "py-6",
    "rounded-xl",
    "bg-project-500"
  );
  const img = document.createElement("img");
  img.setAttribute("src", "./images/icon-star.svg");
  img.setAttribute("alt", "A Orange Star Icon");
  img.classList.add("w-12", "p-3", "rounded-full", "bg-project-400");
  const h1 = document.createElement("h1");
  h1.textContent = "How did we do?";
  h1.classList.add("my-5", "text-2xl", "font-bold", "text-project-100");
  const p = document.createElement("p");
  p.textContent =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  p.classList.add("text-sm", "font-medium", "text-project-300");
  const formEl = document.createElement("form");
  const div = document.createElement("div");
  div.classList.add("my-5", "flex", "justify-between");

  for (let i = 0; i < 5; i++) {
    const label = document.createElement("label");
    label.setAttribute("for", `radio-${numbers[i]}`);
    label.setAttribute("name", "label");
    label.textContent = i + 1;
    label.classList.add(
      "w-12",
      "h-12",
      "rounded-full",
      "flex",
      "justify-center",
      "items-center",
      "text-project-200",
      "bg-project-400",
      "font-bold",
      "transition-colors",
      "cursor-pointer",
      "hover:bg-project-700",
      "hover:text-project-100"
    );
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "rate");
    input.setAttribute("value", `${i + 1}`);
    input.setAttribute("id", `radio-${numbers[i]}`);
    input.classList.add("invisible", "absolute");
    input.setAttribute("required", "");
    label.appendChild(input);
    div.appendChild(label);
  }
  const submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("id", "submit-btn");
  submitInput.value = "submit";
  submitInput.classList.add(
    "w-full",
    "py-2.5",
    "rounded-3xl",
    "uppercase",
    "tracking-widest",
    "text-center",
    "bg-project-700",
    "text-project-100",
    "font-semibold",
    "cursor-pointer",
    "transition-colors",
    "hover:bg-project-100",
    "hover:text-project-700"
  );

  main.appendChild(img);
  main.appendChild(h1);
  main.appendChild(p);
  formEl.appendChild(div);
  formEl.appendChild(submitInput);
  main.appendChild(formEl);
  container.appendChild(main);
}

function resetRadioBtns(arrayOfBtns) {
  arrayOfBtns.forEach(function (element) {
    element.checked = false;
  });
}

resetRadioBtns(radioBtns);

function styleClickedBtn(event) {
  if (event.target.name === "rate") {
    const btnId = event.target.id;
    radioLabels.forEach(function (element) {
      const forAttribute = element.getAttribute("for");
      if (forAttribute === btnId) {
        element.classList.remove("bg-project-400", "text-project-200");
        element.classList.add("bg-project-300", "text-project-100");
      } else {
        element.classList.remove("bg-project-300", "text-project-100");
        element.classList.add("bg-project-400", "text-project-200");
      }
    });
  }
}

form.addEventListener("click", styleClickedBtn);

function saveUserRate(event) {
  event.preventDefault();
  radioBtns.forEach(function (element) {
    if (element.checked) {
      localStorage.setItem("userRating", element.value);
    }
  });
  displayThankPage(body);
}

form.addEventListener("submit", saveUserRate);

function displayThankPage(container) {
  container.innerHTML = "";
  container.classList.add(
    "w-full",
    "min-h-screen",
    "flex",
    "justify-center",
    "items-center",
    "text-[15px]",
    "font-overpass",
    "bg-project-600"
  );

  const main = document.createElement("main");
  main.classList.add(
    "w-11/12",
    "max-w-sm",
    "px-4",
    "py-6",
    "rounded-xl",
    "bg-project-500",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const img = document.createElement("img");
  img.setAttribute("src", "./images/illustration-thank-you.svg");
  img.setAttribute("alt", "Icon of a Cellphone Network");
  const h3 = document.createElement("h3");
  h3.classList.add(
    "my-5",
    "text-project-700",
    "font-medium",
    "px-2",
    "py-1",
    "bg-project-400",
    "rounded-2xl"
  );
  h3.textContent = `You selected ${localStorage.getItem(
    "userRating"
  )} out of 5`;
  const h2 = document.createElement("h2");
  h2.classList.add("text-2xl", "font-bold", "text-project-100");
  h2.textContent = "Thank You!";
  const p = document.createElement("p");
  p.classList.add("m-5", "text-[14px]", "text-center", "text-project-300");
  p.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  main.appendChild(img);
  main.appendChild(h3);
  main.appendChild(h2);
  main.appendChild(p);

  container.appendChild(main);
}
