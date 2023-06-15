window.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const numItems = carouselItems.length;
  let currentIndex = 0;

  function showItem(index) {
    if (index < 0) {
      index = numItems - 1; // Wrap around to the last slide
    } else if (index >= numItems) {
      index = 0; // Wrap around to the first slide
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updatePagination();
    updateArrows();
  }

  function updatePagination() {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    for (let i = 0; i < numItems; i++) {
      const paginationItem = document.createElement("span");
      paginationItem.classList.add("pagination-item");
      if (i === currentIndex) {
        paginationItem.classList.add("active");
      }
      paginationItem.addEventListener("click", () => {
        showItem(i);
      });
      pagination.appendChild(paginationItem);
    }
  }

  // Next Button
  document.querySelector(".arrow-right").addEventListener("click", () => {
    showItem(currentIndex + 1);
  });

  // Previous Button
  document.querySelector(".arrow-left").addEventListener("click", () => {
    showItem(currentIndex - 1);
  });

  // Initialize pagination
  updatePagination();
});
