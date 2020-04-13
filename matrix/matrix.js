const n = 5;
const m = 5;
const matrix = [];

for (let i = 0; i < m; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
    row.push(10 * i);
  }

  matrix.push(row);
}

console.log(matrix);
