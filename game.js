document.addEventListener('DOMContentLoaded', function () {
    const player1Image = document.getElementById('player1');
    const player2Image = document.getElementById('player2');
    const h1 = document.querySelector('h1');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        const randomNum1 = Math.floor(Math.random() * 3) + 1;
        const randomNum2 = Math.floor(Math.random() * 3) + 1;

        const imageMap = {
            1: 'rock.jpeg',
            2: 'scissor.jpeg',
            3: 'paper.jpeg'
        };

        player1Image.src = `images/${imageMap[randomNum1]}`;
        player2Image.src = `images/${imageMap[randomNum2]}`;

        if (randomNum1 === randomNum2) {
            h1.textContent = 'It\'s a draw!';
        } else if (
            (randomNum1 === 1 && randomNum2 === 3) ||
            (randomNum1 === 2 && randomNum2 === 1) ||
            (randomNum1 === 3 && randomNum2 === 2)
        ) {
            h1.textContent = 'Player 1 wins!';
        } else {
            h1.textContent = 'Player 2 wins!';
        }
    });
});
