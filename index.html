<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Media Sequence</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
  }
  .media-sequence {
    font-size: 24px;
  }
</style>
</head>
<body>
  <h1>Media Sequence</h1>
  <p class="media-sequence">Media Sequence: <span id="media-sequence"></span></p>

  <script>
    addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request))
    })

    async function handleRequest(request) {
      // Mendapatkan waktu saat ini dari server waktu nyata
      const currentTime = new Date();

      // Menghitung media sequence berdasarkan waktu saat ini (dalam detik)
      const mediaSequence = Math.floor(currentTime.getTime() / 5000);

      // Menyusun respons dengan header EXT-X-MEDIA-SEQUENCE yang diperbarui
      const response = new Response(null, {
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl',
          'EXT-X-MEDIA-SEQUENCE': mediaSequence.toString()
        }
      });

      // Tampilkan media sequence dalam dokumen HTML
      document.getElementById('media-sequence').textContent = mediaSequence.toString();

      return response;
    }
  </script>
</body>
</html>
