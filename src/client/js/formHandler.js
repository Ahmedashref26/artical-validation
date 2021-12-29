import urlChecker from "./urlChecker";
import 'regenerator-runtime/runtime'

const handleSubmit = async (e) => {
  e.preventDefault();

  // check what check whether  the url is valid
  const url = document.getElementById("url").value;

  const spinner = document.querySelector(".spinner");
  const box = document.querySelector(".results")

  if (!urlChecker(url)) return alert("Invalid URL! Please use a diffrent one");

  spinner.classList.toggle("hidden");
  if (!box.classList.contains("hidden")) box.classList.add("hidden");

  const res = await fetch("http://localhost:8081/analyze", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();

  document.getElementById("model").innerHTML = `Text Model: ${data.model}`;
  document.getElementById(
    "agreement"
  ).innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById(
    "subjectivity"
  ).innerHTML = `Subjectivity: ${data.subjectivity}`;
  document.getElementById(
    "confidence"
  ).innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
  document.getElementById("score_tag").innerHTML = `Score: ${data.score_tag}`;
  spinner.classList.toggle("hidden");
  box.classList.remove("hidden");
};

export default handleSubmit;
