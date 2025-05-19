document.getElementById('leakButton').addEventListener('click', function() {
  const newTab = window.open('about:blank', '_blank');

  if (newTab) {
    newTab.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>vplaza leaks</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style>
          html, body {
            margin: 0; padding: 0; height: 100%;
            background: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
          }
          #videoContainer {
            width: 100vw;
            height: 80vh;
            display: none;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <div class="container text-center">
          <h1 class="mb-4">Leak Video Controller</h1>
          <button id="playBtn" class="btn btn-primary btn-lg">See Vplaza Beta</button>
        </div>

        <div id="videoContainer">
          <iframe
            id="video"
            src=""
            allow="autoplay; fullscreen"
            allowfullscreen
            allow="autoplay"
          ></iframe>
        </div>

        <script>
          const playBtn = document.getElementById('playBtn');
          const videoContainer = document.getElementById('videoContainer');
          const video = document.getElementById('video');

          playBtn.addEventListener('click', () => {
            const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&fs=1&modestbranding=1&playsinline=1";
            video.src = videoUrl;
            videoContainer.style.display = 'block';
            playBtn.style.display = 'none';

            if (videoContainer.requestFullscreen) {
              videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
              videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) {
              videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
              videoContainer.msRequestFullscreen();
            }
          });
        <\/script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
    `);
    newTab.document.close();
  } else {
    alert("Pop-up blocked! Please allow pop-ups for this site.");
  }
});
