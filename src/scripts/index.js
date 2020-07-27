let root = document.querySelector("#root");

let jumbotronDiv = document.createElement("div");
jumbotronDiv.className = "jumbotron text-center";
jumbotronDiv.setAttribute("id", "my-jmb");

let heading = document.createElement("h1");
heading.className = "display-2 py-5";
heading.innerHTML = "oaes kuruni";

jumbotronDiv.appendChild(heading);

root.appendChild(jumbotronDiv);
