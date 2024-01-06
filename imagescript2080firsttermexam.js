const images = [
    "gallery/2080/First term result photos 2080/image (1).jpg",
    "gallery/2080/First term result photos 2080/image (2).jpg",
    "gallery/2080/First term result photos 2080/image (3).jpg",
    "gallery/2080/First term result photos 2080/image (4).jpg",
    "gallery/2080/First term result photos 2080/image (5).jpg",
    "gallery/2080/First term result photos 2080/image (6).jpg",
    "gallery/2080/First term result photos 2080/image (7).jpg",
    "gallery/2080/First term result photos 2080/image (8).jpg",
    "gallery/2080/First term result photos 2080/image (9).jpg",
    "gallery/2080/First term result photos 2080/image (10).jpg",
    "gallery/2080/First term result photos 2080/image (11).jpg",
    "gallery/2080/First term result photos 2080/image (12).jpg",
    "gallery/2080/First term result photos 2080/image (13).jpg",
    "gallery/2080/First term result photos 2080/image (14).jpg",
    "gallery/2080/First term result photos 2080/image (15).jpg",
    "gallery/2080/First term result photos 2080/image (16).jpg",
    "gallery/2080/First term result photos 2080/image (17).jpg",
    "gallery/2080/First term result photos 2080/image (18).jpg",
    "gallery/2080/First term result photos 2080/image (19).jpg",
    "gallery/2080/First term result photos 2080/image (20).jpg",
    "gallery/2080/First term result photos 2080/image (21).jpg",
    "gallery/2080/First term result photos 2080/image (22).jpg",
    "gallery/2080/First term result photos 2080/image (23).jpg",
    "gallery/2080/First term result photos 2080/image (24).jpg",
    "gallery/2080/First term result photos 2080/image (25).jpg",
    "gallery/2080/First term result photos 2080/image (26).jpg",
    "gallery/2080/First term result photos 2080/image (27).jpg",
    "gallery/2080/First term result photos 2080/image (28).jpg",
    "gallery/2080/First term result photos 2080/image (29).jpg",
    "gallery/2080/First term result photos 2080/image (30).jpg",
    "gallery/2080/First term result photos 2080/image (31).jpg",
    "gallery/2080/First term result photos 2080/image (32).jpg",
    "gallery/2080/First term result photos 2080/image (33).jpg",
    "gallery/2080/First term result photos 2080/image (34).jpg",
    "gallery/2080/First term result photos 2080/image (35).jpg",
    "gallery/2080/First term result photos 2080/image (36).jpg",
    "gallery/2080/First term result photos 2080/image (37).jpg",
    "gallery/2080/First term result photos 2080/image (38).jpg",
    "gallery/2080/First term result photos 2080/image (39).jpg"                           // Add more video sources as needed
  ];
  
  const totalImages = images.length;
  const imageElement = document.getElementById("image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  
  let currentIndex = 0;
  const preloadImages = [];
  
  function preload() {
    for (let i = 0; i < totalImages; i++) {
      preloadImages[i] = new Image();
      preloadImages[i].src = images[i];
    }
  }
  
  function showImage(index) {
    imageElement.src = preloadImages[index].src;
    currentIndex = index;
  }
  
  function prevImage() {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(prevIndex);
  }
  
  function nextImage() {
    const nextIndex = (currentIndex + 1) % totalImages;
    showImage(nextIndex);
  }
  
  prevButton.addEventListener("click", prevImage);
  nextButton.addEventListener("click", nextImage);
  
  preload();
  showImage(currentIndex);
  