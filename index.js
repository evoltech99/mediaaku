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

  return response;
}
