window.onload = function () {
  main();
};

// function main() {
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const text =
//     document.createTextNode(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sit veniam odio
//   ad nisi libero voluptas alias, saepe placeat ipsa magnam quidem id sapiente
//   doloremque nulla delectus minus repellendus dolor!`);
//   h1.innerText = "Why React ???";

//   div.appendChild(text);
//   document.body.appendChild(h1);
//   document.body.appendChild(div);
// }

function main() {
  const app = Container([
    Text("h1", "Hello world"),
    Text(
      "p",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit consectetur dignissimos, laudantium laborum incidunt porro, nam officia animi quis assumenda ut soluta quod architecto rerum eligendi amet quo repudiandae qui."
    ),
    Container([Text("h3", "Nazim"), Text("h3", "Shadin")], {
      display: "flex",
      gap: "3rem",
      border: "2px solid",
    }),
  ]);

  document.getElementById("root").appendChild(app);
}

//container function
function Container(children, style = {}) {
  const div = document.createElement("div");

  Object.keys(style).map((key) => {
    div.style[key] = style[key];
  });

  children.forEach((ch) => div.appendChild(ch));

  return div;
}

//tag function
function Text(tag, value) {
  const text = document.createElement(tag);
  text.innerText = value;
  return text;
}
