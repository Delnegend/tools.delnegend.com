// jshint esversion: 9
document.querySelectorAll('input').forEach(e => e.addEventListener("input", () => {
  let d = document,
    name = d.querySelector("#name").value,
    artist = d.querySelector("#artist").value,
    youtube = d.querySelector("#youtube_id").value;


  let encodeHTMLEntities = data => {
    return data.replace(/[\u00A0-\u9999<>\&]/g, i => {
      return '&#' + i.charCodeAt(0) + ';';
    });
  };
  document.querySelector(".language-html")
    .innerHTML = /* html */`
    <!DOCTYPE html>
    <html lang="en">

    <head>

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <!-- HTML Meta Tags -->
      <title>${name}</title>
      <meta name="description" content="${artist}">

      <!-- Google / Search Engine Tags -->
      <meta itemprop="name" content="${name}">
      <meta itemprop="description" content="${artist}">
      <meta itemprop="image" content="http://dd441f7a46c7.ngrok.io/poster.jpg">

      <!-- Facebook Meta Tags -->
      <meta property="og:url" content="http://dd441f7a46c7.ngrok.io">
      <meta property="og:type" content="website">
      <meta property="og:title" content="${name}">
      <meta property="og:description" content="${artist}">
      <meta property="og:image" content="http://dd441f7a46c7.ngrok.io/poster.jpg">

      <!-- Twitter Meta Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${name}">
      <meta name="twitter:description" content="${artist}">
      <meta name="twitter:image" content="http://dd441f7a46c7.ngrok.io/poster.jpg">


      <link rel="shortcut icon" href="https://delnegend.com/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sampotts/plyr/dist/plyr.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DELNEGEND/khplayer/dist/khplayer.min.css">
      <link rel="stylesheet" href="https://fonts.delnegend.com/GoogleSans.css">
      <link rel="stylesheet" href="style.css">
      <script src="https://cdn.jsdelivr.net/gh/sampotts/plyr/dist/plyr.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/richtr/NoSleep.js/dist/NoSleep.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/DELNEGEND/khplayer/dist/khplayer.min.js"></script>

    </head>

    <body>
      <a href="https://music.delnegend.com">
        <header>🎵🎶🎵🎶</header>
      </a>

      <div class="main-palyer">
        <h3>Don't forget to enable English captions</h3>
        <khplayer-container data="data.json"></khplayer-container>

        <h3>Watch on YouTube</h3>
        <div class="yt-ctn">
          <iframe src="https://www.youtube.com/embed/${youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h3>Click/tap/press <a href="https://music.delnegend.com/">here</a> to watch other videos.</h3>
      </div>

    </body>

    </html>
    `
    .replace(/[\u00A0-\u9999<>\&]/g, i => '&#' + i.charCodeAt(0) + ';');
}));
new ClipboardJS('.copy2clip-btn');