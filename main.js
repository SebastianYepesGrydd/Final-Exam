function projectJs() {
    const years = [1,2,3,4,5];
  let select = document.getElementById("nro");
  years.forEach((res) => {
    select.add(new Option(res))
  });
let data = document.getElementById("ranger").value;
document.getElementById("demo").innerHTML = `${data}%`;
document.getElementById("ranger").addEventListener("input", function (event) {
  event.preventDefault();
let data = document.getElementById("ranger").value;
document.getElementById("demo").innerHTML = `${data}%`;
});
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  let text = document.getElementById("text").value;
  let ranger = document.getElementById("ranger").value;
  let nro = document.getElementById("nro").value;
  if (text !== "") {
    const result = (parseInt(text, 0) * parseInt(ranger, 0)) / 100;
    document.getElementById(
      "result"
    ).innerHTML = `If deposited $${text}, <br/> with an interest rate $${ranger}%.<br/> will have an interest of $${result*nro};
  } else {
    alert("¡Por favor complete los campos requeridos!");
  }
});
}

projectJs();
funtion pro