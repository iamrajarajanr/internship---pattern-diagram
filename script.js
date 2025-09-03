// ---------- Utilities ----------
const rep = (ch, n) => ch.repeat(Math.max(0, n));
const join = (lines) => lines.join("\n");
const pad = (v, w) => String(v).padStart(w, " ");

// ---------- Star Patterns ----------
function simpleStarTriangle(n) {
  const out = [];
  for (let i = 1; i <= n; i++) out.push(rep("* ", i).trimEnd());
  return join(out);
}

function rightAlignedTriangle(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(rep(" ", (n - i) * 2) + rep("* ", i).trimEnd());
  }
  return join(out);
}

function invertedTriangle(n) {
  const out = [];
  for (let i = n; i >= 1; i--) out.push(rep("* ", i).trimEnd());
  return join(out);
}

function invertedRightAlignedTriangle(n) {
  const out = [];
  for (let i = n; i >= 1; i--) {
    out.push(rep(" ", (n - i) * 2) + rep("* ", i).trimEnd());
  }
  return join(out);
}

function squareOfStars(n) {
  const line = rep("* ", n).trimEnd();
  return join(Array.from({ length: n }, () => line));
}

function hollowSquare(n) {
  if (n === 1) return "*";
  const top = rep("* ", n).trimEnd();
  const mid = "* " + rep("  ", n - 2) + "*";
  const out = [top];
  for (let i = 0; i < n - 2; i++) out.push(mid);
  out.push(top);
  return join(out);
}

function alternatingStarSpaceTriangle(n) {
  // Inverted triangle with increasing left indent; stars separated by single spaces.
  const out = [];
  for (let i = n; i >= 1; i--) {
    out.push(rep(" ", n - i) + rep("* ", i).trimEnd());
  }
  return join(out);
}

function diamondOfStars(n) {
  // Full diamond with width 2*n-1
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(rep(" ", n - i) + rep("* ", i * 2 - 1).trimEnd());
  }
  for (let i = n - 1; i >= 1; i--) {
    out.push(rep(" ", n - i) + rep("* ", i * 2 - 1).trimEnd());
  }
  return join(out);
}

function diamondHollow(n) {
  if (n === 1) return "*";
  const out = [];
  // top tip
  out.push(rep(" ", n - 1) + "*");
  // upper hollow
  for (let i = 2; i <= n; i++) {
    const inner = i * 2 - 3;
    out.push(rep(" ", n - i) + "*" + rep(" ", inner * 2 - 1) + "*");
  }
  // lower hollow
  for (let i = n - 1; i >= 2; i--) {
    const inner = i * 2 - 3;
    out.push(rep(" ", n - i) + "*" + rep(" ", inner * 2 - 1) + "*");
  }
  // bottom tip
  out.push(rep(" ", n - 1) + "*");
  return join(out);
}

function hollowPyramid(n) {
  if (n === 1) return "*";
  const out = [];
  out.push(rep(" ", n - 1) + "*");
  for (let i = 2; i < n; i++) {
    out.push(rep(" ", n - i) + "*" + rep(" ", (i - 1) * 2 - 1) + "*");
  }
  out.push(rep(" ", 0) + rep("* ", n).trimEnd());
  return join(out);
}

function hourglassStarPattern(n) {
  // Top half decreasing odd widths, bottom half increasing
  const out = [];
  for (let i = n; i >= 1; i--) {
    out.push(rep(" ", n - i) + rep("* ", i * 2 - 1).trimEnd());
  }
  for (let i = 2; i <= n; i++) {
    out.push(rep(" ", n - i) + rep("* ", i * 2 - 1).trimEnd());
  }
  return join(out);
}

// ---------- Number Patterns ----------
function numberTriangle(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(Array.from({ length: i }, (_, j) => j + 1).join(" "));
  }
  return join(out);
}

function numberPyramid(n) {
  // Palindromic pyramid (1..i..1), centered
  const out = [];
  for (let i = 1; i <= n; i++) {
    const left = Array.from({ length: i }, (_, j) => j + 1);
    const right = left.slice(0, -1).reverse();
    const row = [...left, ...right].join(" ");
    out.push(rep(" ", (n - i) * 2) + row);
  }
  return join(out);
}

function incrementalNumberTriangle(n) {
  const out = [];
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 0; j < i; j++) row.push(cur++);
    out.push(row.join(" "));
  }
  return join(out);
}

function rightAngledNumberTriangle(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    out.push(Array.from({ length: i }, () => i).join(" "));
  }
  return join(out);
}

function floydsTriangle(n) {
  const out = [];
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 0; j < i; j++) row.push(cur++);
    out.push(row.join("  "));
  }
  return join(out);
}

function binaryTriangle(n) {
  // Start with 1 at (1,1); entries alternate; value = (i+j)%2
  const out = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) row.push((i + j) % 2);
    out.push(row.join("  "));
  }
  return join(out);
}

function chessBoardNumbers(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push((i + j) % 2 ? 0 : 1);
    out.push(row.join("  "));
  }
  return join(out);
}

// Pascal’s Triangle (centered)
function pascalsTriangle(n) {
  const rows = [];
  for (let i = 0; i < n; i++) {
    rows[i] = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++)
      rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
  }
  // width padding for nicer centering
  const maxNum = Math.max(...rows[rows.length - 1]);
  const w = String(maxNum).length + 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    const row = rows[i].map((x) => pad(x, w)).join("");
    out.push(rep(" ", (n - i - 1) * Math.ceil(w / 2)) + row.trimEnd());
  }
  return join(out);
}

// ---------- Renderer ----------
const patterns = [
  { name: "Simple Star Triangle", fn: simpleStarTriangle },
  { name: "Right-Aligned Triangle", fn: rightAlignedTriangle },
  { name: "Inverted Triangle", fn: invertedTriangle },
  {
    name: "Inverted Right-Aligned Triangle",
    fn: invertedRightAlignedTriangle,
  },
  { name: "Square of Stars", fn: squareOfStars },
  { name: "Hollow Square", fn: hollowSquare },
  { name: "Number Triangle", fn: numberTriangle },
  { name: "Number Pyramid", fn: numberPyramid },
  { name: "Incremental Number Triangle", fn: incrementalNumberTriangle },
  {
    name: "Alternating Star and Space Triangle",
    fn: alternatingStarSpaceTriangle,
  },
  { name: "Diamond of Stars", fn: diamondOfStars },
  { name: "Diamond Hollow", fn: diamondHollow },
  { name: "Hollow Pyramid", fn: hollowPyramid },
  { name: "Hourglass Star Pattern", fn: hourglassStarPattern },
  { name: "Right-Angled Number Triangle", fn: rightAngledNumberTriangle },
  { name: "Pascal’s Triangle", fn: pascalsTriangle },
  { name: "Floyd’s Triangle", fn: floydsTriangle },
  { name: "Binary Triangle", fn: binaryTriangle },
  { name: "Chess Board Numbers", fn: chessBoardNumbers },
];

function renderAll(n) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  patterns.forEach(({ name, fn }) => {
    const card = document.createElement("article");
    card.className = "card";
    const h = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = name;
    h.appendChild(title);
    const pre = document.createElement("pre");
    let content = "";
    try {
      content = fn(n);
    } catch (e) {
      content = "Error generating pattern.";
      console.error(name, e);
    }
    pre.textContent = content || "(no output)";
    card.appendChild(h);
    card.appendChild(pre);
    grid.appendChild(card);
  });
}

// Render patterns with a default row value (e.g., 5)
renderAll(5);
