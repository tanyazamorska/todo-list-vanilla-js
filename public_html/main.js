"use strict";

var addButton = document.querySelectorAll('button')[0];
addButton.onclick = function() {
  var input = document.querySelectorAll('input')[0];
  var inputValue = input.value;
  var li = document.createElement('li');
  li.innerText = inputValue;
  var ul = document.querySelectorAll('ul')[0];
  ul.appendChild(li);
  input.value = " ";
  var removeButton = document.createElement('button');
  removeButton.innerText = "remove";
  li.appendChild(removeButton);
  removeButton.onclick = function() {
	li.remove();
  };
};
