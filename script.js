//method for not duplicating navbar/footer taken from the following source:
//https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/
async function loadHTMLElement(elementID, fileName){
  const response = await fetch(fileName);
  const htmlText = await response.text();
  document.getElementById(elementID).innerHTML = htmlText;
}

loadHTMLElement("navigationBar", "navbar.html");
loadHTMLElement("footer", "footer.html");


let resumeBtn = document.getElementById("resumeButton");
resumeBtn.addEventListener("click", function() {
  window.location.href="resume.html";
});

let portfolioBtn = document.getElementById("portfolioButton");
portfolioBtn.addEventListener("click", function() {
  windo.location.href="portfolio.html";
});
