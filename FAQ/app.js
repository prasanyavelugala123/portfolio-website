//using  selector inside the element
const questions =  document.querySelectorAll(".question")

questions.forEach(function (question)  {
    const btn =question.querySelector(".question-btn");
    // console.log(question) {

    question.forEach(function (item)   {
        if (item !==question) {
        }
    });

    question.classList.toggle("show-text");
});

});

// taversing the dom
//  const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//    btn.addEventListner("click",function (e) {
//       const question= e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//    });
//     });