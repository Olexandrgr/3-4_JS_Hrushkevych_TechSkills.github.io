
var body = document.querySelector('body');

var test = document.createElement('div');
test.classList.add('test_form');
body.appendChild(test);

var head = document.createElement('h4');
head.innerHTML = 'Тест з програмування';
test.appendChild(head);

var forma = document.createElement("form");
forma.setAttribute('method',"post");
test.appendChild(forma);

var box = document.createElement('div');
box.classList.add('box22');
forma.appendChild(box);

// var box1 = document.createElement('div');
// box1.classList.add('box13');
// forma.appendChild(box1);

for (var i = 1; i < 4; i++) {
  var question = document.createElement('h5');
  question.classList.add('ques');
  question.innerHTML = (i + '.' + ' ' + 'Питання' +' '+ '№' + i);
  box.appendChild(question);
  
  for (var a = 1; a < 5   ; a++) {
    var check = document.createElement('input');
    check.setAttribute("type", "checkbox");
    box.appendChild(check);

    var question = document.createElement('p');
    question.innerHTML = ('Відповідь' + ' ' + a);
    box.appendChild(question);
  }
}

var button = document.createElement('input');
button.setAttribute("type", "submit");
button.setAttribute("value", "Перевірити мої результати"); 
test.appendChild(button);