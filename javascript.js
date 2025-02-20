console.log("Page loaded")

function checkAnswer(inputId, correctAnswer, nextId) {
    const input = document.getElementById(inputId);
    if (input.value.trim().toLowerCase() === correctAnswer) {
        document.getElementById(inputId).value = ""; // Clear input
        document.getElementById(inputId).parentElement.classList.add("hidden"); // Hide current puzzle div
        const nextPuzzle = document.getElementById(nextId);
        if (nextPuzzle) {
            nextPuzzle.classList.remove("hidden"); // Show next puzzle
        } else {
            document.getElementById("game-complete").classList.remove("hidden"); // Show completion message
        }
        console.log("Puzzle completed")
    } else {
        alert("Incorrect! Try again.");
        console.log("Puzzle failed")
    }
}