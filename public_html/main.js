"use strict";

var addButton = document.querySelectorAll('button')[0];
addButton.onclick = function() {
  var input = document.querySelectorAll('input')[0];
  var inputValue = input.value;
  var li = document.createElement('li');
  li.innerText = inputValue;
  var ol = document.querySelectorAll('ol')[0];
  ol.appendChild(li);
  input.value = '';
};