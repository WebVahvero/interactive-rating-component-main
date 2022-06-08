const btnContainer = document.getElementById("points");
const btns = btnContainer.getElementsByClassName("point");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

const ratingWidget = document.getElementById('rating');
const thanksWidget = document.getElementById('thanks');
const responseText = document.getElementById('response');

const displayThanks = () => {
    const content = document.querySelector(".active").textContent;
    ratingWidget.style.display = 'none';
    responseText.innerHTML = `You selected ${content} out of 5`;
    thanksWidget.style.display = 'block';

}