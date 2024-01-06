
  // Get the video element
  var video = document.getElementById('video');

  // Define an array of video sources
  var videoSources = [
    'gallery\\2080video\\2080-05-22 kabita bachan Partigyota\\video(1).MP4',         // Add more video sources as needed
    'gallery\\2080video\\2080-05-22 kabita bachan Partigyota\\video(2).MP4'
  ];

  // Set the current video index
  var currentVideoIndex = 0;

  // Function to load the current video
  function loadCurrentVideo() {
    video.src = videoSources[currentVideoIndex];
    video.load();
  }

  // Event listener for the next button
  document.getElementById('next-button').addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    loadCurrentVideo();
  });

  // Event listener for the previous button
  document.getElementById('prev-button').addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    loadCurrentVideo();
  });

