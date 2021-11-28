const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endpoint = 13;




function addanswer(answertext, qidx){
  var a = document.querySelector('.answerbox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-10');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  a.appendChild(answer);
  answer.innerHTML = answertext;

  answer.addEventListener("click",function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }

    gonext(++qidx);
  },false);
}


function gonext(qidx){
  var q = document.querySelector('.qbox');
  q.innerHTML = qnaList[qidx].q;
for (let i in qnaList[qidx].a){
  addanswer(qnaList[qidx].a[i].answer, qidx);
}

}

function begin(){
  //main.style.webkitanimation = "fadeout s";
  //main.style.animation = "fadeout 1s";
  //qna.style.webkitanimation = "fadein 1s";
   //qna.style.animation = "fadein 1s";
  main.style.display = "none";
  qna.style.display = "block";
  let qidx = 0;
gonext(qidx);
}
