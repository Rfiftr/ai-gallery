const imagesContainer = document.querySelector('.images')
const folderPath = './images';

function createImages(index) {
    imagesContainer.innerHTML += `
        <div class="image-container">
            <img src="images/ai-image-${index}.jpg" alt="Image ${index}"/>
            <div class="overlay">
                <button class="download-btn">Download</button>
            </div>
        </div>
    `
}

for(let i = 1; i <= 46; i++) {
    createImages(i);
}


//const imagesSrc = getImageNamesAsync(folderPath)

