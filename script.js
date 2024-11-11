function changeSeason(season) {
    const seasonImage = document.getElementById('seasonImage');
    let imagePath;

    // Set the image path based on the season
    if (season === 'summer') {
        imagePath = 'images/summer.webp';
    } else if (season === 'winter') {
        imagePath = 'images/winter.webp';
    } else if (season === 'monsoon') {
        imagePath = 'images/monsoon.jpg';
    }

    // Change the image source with a fade effect
    seasonImage.style.opacity = 0;
    setTimeout(() => {
        seasonImage.src = imagePath;
        seasonImage.style.opacity = 1;
    }, 500);
}
