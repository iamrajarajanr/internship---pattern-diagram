// Simple Star Triangle
function printStarTriangle(rows) {
  let result = "";
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    result += pattern + "\n";
  }
  document.getElementById("star").textContent = result;
}

// Right-Aligned Triangle
function printRightAlignedTriangle(height) {
  let result = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 0; j < height - i; j++) {
      row += " ";
    }
    for (let k = 0; k < i; k++) {
      row += "*";
    }
    result += row + "\n";
  }
  document.getElementById("right").textContent = result;
}

// Inverted Triangle
function printInvertedRightTriangle(rows) {
  let result = "";
  for (let i = rows; i >= 1; i--) {
    let rowContent = "";
    for (let j = 0; j < i; j++) {
      rowContent += "*";
    }
    result += rowContent + "\n";
  }
  document.getElementById("inverted").textContent = result;
}

// Call functions
printStarTriangle(5);
printRightAlignedTriangle(5);
printInvertedRightTriangle(5);



















