// Select Console Color
const colorBox = document.querySelectorAll(".colors-circle");

for (let i = 0; i < colorBox.length; i++) {

    colorBox[i].addEventListener("click", () => {

        for (let e = 0; e < colorBox.length; e++) {
            if (i === e) {
                colorBox[e].classList.add("selected-color");
            } else {
                colorBox[e].classList.remove("selected-color");
            }

        }
    })
}
