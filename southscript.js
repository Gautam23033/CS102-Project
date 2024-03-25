document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const images = document.querySelectorAll('.image');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        images.forEach(image => {
          if (filterValue === 'all' || image.getAttribute('data-tags').includes(filterValue)) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
      });
    });
  });
  
