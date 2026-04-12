var txtBox = document.getElementById("screen");
var btn = document.querySelectorAll(".button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", funClick);
}

function funClick(event) {
  if (event.currentTarget.value == "=") {
    var res = eval(txtBox.value);
    txtBox.value = res;
  } else if (event.currentTarget.value == "ce") {
    txtBox.value = "";
  } else if (event.currentTarget.value == "x") {
    txtBox.value = txtBox.value.slice(0, -1);
  } else {
    txtBox.value += event.currentTarget.value;
  }
}
