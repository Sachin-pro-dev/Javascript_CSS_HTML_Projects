function changeRange() {
  //!Get R,G,B values & convert string to intger
  var r = parseInt(document.getElementById("r").value);
  var g = parseInt(document.getElementById("g").value);
  var b = parseInt(document.getElementById("b").value);

  //?Color format
  var color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = color;
  document.getElementById("hex-label").innerText = color;
  document.getElementById("r-label").innerText = r;
  document.getElementById("g-label").innerText = g;
  document.getElementById("b-label").innerText = b;

  if (r < 100 && g < 100 && b < 100) {
    document.getElementById("container").style.color = "white";
  } else {
    document.getElementById("container").style.color = "black";
  }

  function hex(v) {
    // Get Hexadecimal Number
    var hex = v.toString(16);
    if (v < 16) {
      hex = "0" + hex;
    }
    return hex;
  }
}
