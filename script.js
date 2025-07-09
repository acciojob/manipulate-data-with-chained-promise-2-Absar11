const outputDiv = document.getElementById("output");

function manipulateArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve) => {
      const evens = array.filter(num => num % 2 === 0);
      setTimeout(() => {
        outputDiv.textContent = evens.toString();  // Output: 2,4
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    return new Promise((resolve) => {
      const doubled = evens.map(num => num * 2);
      setTimeout(() => {
        outputDiv.textContent = doubled.toString();  // Output: 4,8
        resolve(doubled);
      }, 2000);
    });
  });
}

manipulateArray();
