const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  var text = document.getElementById("text").innerHTML;
  var length = document.getElementById("length").value;
  const myArr = text.split(" ");
  var stringOut = "";
  for(let i=0;i<myArr.length;i++){
    if(myArr[i].length >= length){
      stringOut += "<mark>" + myArr[i] + "</mark> ";
    }else{
      stringOut += myArr[i] + " ";
    }
  }
  document.getElementById("text").innerHTML = stringOut; 
}

// more codes for Search and Reset buttons here
