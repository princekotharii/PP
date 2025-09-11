function generateTable() {
  let num = document.getElementById("numInput").value;
  let output = "<table>";

  if (num === "") {
    document.getElementById("tableResult").innerHTML = "<p>Please enter a number!</p>";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    output += "<tr><td>" + num + " × " + i + " = " + (num * i) + "</td></tr>";
  }

  output += "</table>";
  document.getElementById("tableResult").innerHTML = output;
}
