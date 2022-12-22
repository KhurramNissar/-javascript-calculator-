const actions = document.querySelector(".actions");
const ans = document.querySelector(".ans");
console.log(actions);
console.log(ans);

let expression = "";
let a = 0;
actions.addEventListener("click", (e) => {
  console.log(e.target);
  const value = e.target.dataset["value"];

  if (value !== undefined) {
    ///////
    if (value == "ce") {
      expression = "";
      ans.value = 0;
      return true;
    } else if (value == "√") {
      expression = Math.sqrt(expression).toFixed(4);
    } else if (value == "sin") {
      expression = Math.sin(expression).toFixed(4);
    } else if (value == "cos") {
      expression = Math.cos(expression).toFixed(4);
    } else if (value == "tan") {
      expression = Math.tan(expression).toFixed(4);
    } else if (value == "=") {
      const answer = eval(expression).toFixed(4);
      expression = answer;
    } else {
      expression += value;
    }

    if (expression == undefined) {
      expression = "";
      ans.value = 0;
    } else {
      ans.value = expression;
    }
    // expression += value;
  }
});

const square = () => {
  return eval(expression * expression).toFixed(4);
};
////////////////history/////////////////////
var historyData = [];
var expressionData = "";
var resultData = "";
/////////////////////////////////////////////
expressionData = expression; // history
resultData = answer; // history
historyData.push({ expression: expressionData, result: resultData }); /// histrory
showLogdata();
resultData = ""; //history
expressionData = ""; //history
function showLogdata() {
  var string = "";
  var log = document.getElementById("history-log");
  for (key in historyData) {
    string +=
      "" +
      historyData[key]["expression"] +
      "=" +
      historyData[key]["result"] +
      "<br>";
  }
  log.innerHTML = string;
}
console.log(historyData);
document.getElementById("history").innerHTML = html;
