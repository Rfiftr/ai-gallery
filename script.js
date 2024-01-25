const imagesContainer = document.querySelector('.images')
const folderPath = './images';

function createImages(index) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = `images/ai-image-${index}.jpg`;
    image.alt = `Image ${index}`;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const downloadButton = document.createElement('button');
    downloadButton.classList.add('download-btn');
    downloadButton.innerText = 'Download';

    downloadButton.addEventListener('click', () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = `images/ai-image-${index}.jpg`;
        downloadLink.download = `Image${index}.jpg`;
        downloadLink.click();
    });

    overlay.appendChild(downloadButton);
    imageContainer.appendChild(image);
    imageContainer.appendChild(overlay);
    imagesContainer.appendChild(imageContainer)
}

for(let i = 1; i <= 65; i++) {
    createImages(i);
}
