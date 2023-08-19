const imageGallery = document.getElementById("image-gallery");

// Fetch images from the API
fetch("http://13.239.136.78:8000/images")
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const images = data.images;

      const ngy2Data = {
        items: []  // Array to store gallery items
      };

      // Populate ngy2Data with fetched image URLs
      images.forEach(imageUrl => {
        ngy2Data.items.push({
          src: imageUrl,
          srct: imageUrl,  // You might need to adjust this based on your server structure
          title: "Uploaded Image"
        });
      });

      // Initialize NanoGallery2
      $("#ngy2p").nanogallery2(ngy2Data);
    } else {
      console.error("Error fetching images:", data.message);
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });