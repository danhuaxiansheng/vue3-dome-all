// 猜数字游戏
<script>
// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

let guess = 0;
let attempts = 0;

while (guess !== target) {
  guess = parseInt(prompt("Enter a number between 1 and 100:"));
  attempts++;

  if (guess === target) {
    alert(`You guessed the number in ${attempts} attempts!`);
  } else if (guess < target) {
    alert("Your guess is too low. Try again.");
  } else {
    alert("Your guess is too high. Try again.");
  }
}
</script>
