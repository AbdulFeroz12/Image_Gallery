const images = document.querySelectorAll('.gallery .image img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

const imgArray = Array.from(images);


images.forEach((img, i) => {
  img.addEventListener('click', () => {
    currentIndex = i;
    showImage();
  });
});

function showImage() {
  lightbox.style.display = 'flex';
  lightboxImg.src = imgArray[currentIndex].src;
}


closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgArray.length;
  showImage();
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
  showImage();
});


const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    document.querySelectorAll('.gallery .image').forEach(image => {
      if (category === 'all' || image.dataset.category === category) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});
