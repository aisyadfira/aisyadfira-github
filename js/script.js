const imageGallery = document.getElementById("image-gallery");

// Fetch images from the API
fetch("https://13.239.136.78.nip.io/images")
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

      // Initialize NanoGallery2 with configuration options
      $("#ngy2p").nanogallery2({
        itemsBaseURL: "",
        thumbnailWidth: 200,
	thumbnailHeight: "auto",
        thumbnailLabel: {
          position: "overImageOnBottom",
		  display: false
        },
        thumbnailOpenImage: true,
        // Add more configuration options here as needed
        items: ngy2Data.items
      });
    } else {
      console.error("Error fetching images:", data.message);
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
