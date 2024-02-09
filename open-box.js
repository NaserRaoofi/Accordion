


// **************************    Mini project (** open-box **) by Naser Raoofi   **********************************



// we are going to enhance this code and write it in a advance way


const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    console.log(question);

    question.classList.toggle("show-text");
  });
});

