"use strict";

function myFunction() {
  //intialize variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput"); //for upper case the user input to match with list items

  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    //here[0] is taken because array order is n*1 where n is column and 1 is row
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}