const sentence = "I'm Lance!\n";

let delay = 250;
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 250;
}
