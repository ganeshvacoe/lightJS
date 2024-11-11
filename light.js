function changeColor(color) {
    const colorImage = document.getElementById('colorImage');
    let imagePath;

    // Set the image path based on the season
    if (color === 'red') {
        imagePath = 'images/red.jpg';
    } else if (color === 'yellow') {
        imagePath = 'images/yellow.webp';
    } else if (color === 'pink') {
        imagePath = 'images/pink.webp';
    }

    // Change the image source with a fade effect
    colorImage.style.opacity = 0;
    setTimeout(() => {
        colorImage.src = imagePath;
        colorImage.style.opacity = 1;
    }, 500);
}
