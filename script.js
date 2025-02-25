function showHearts() {
    alert("Yay! Happy Valentine's Day💖!");
    const hearts = document.getElementById('hearts');
    hearts.style.display = 'block';
    setTimeout(() => {
        hearts.style.display = 'none';
    }, 3000);
}

function moveNoButton(event) {
    const noButton = event.target;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (Math.abs(randomX - buttonRect.left) < 50 && Math.abs(randomY - buttonRect.top) < 50);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}