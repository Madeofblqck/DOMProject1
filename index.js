document.addEventListener('DOMContentLoaded', () => {
    // Select all elements needed
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const likeButtons = document.querySelectorAll('.fa-heart');
    const totalPriceElement = document.querySelector('.total');
  
    // Function to update total price
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.card-body').forEach(card => {
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
      });
      totalPriceElement.textContent = total + '$';
    }
  
    // Increase quantity
    plusButtons.forEach(button => {
      button.addEventListener('click', () => {
        let quantityElement = button.nextElementSibling;
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotal(); 
      });
    });
  
    // Decrease quantity
    minusButtons.forEach(button => {
      button.addEventListener('click', () => {
        let quantityElement = button.previousElementSibling;
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
          quantityElement.textContent = currentQuantity - 1;
          updateTotal();
        }
      });
    });
  
    // Delete item
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.card-body').remove();
        updateTotal();
      });
    });
  
    // Like item
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('text-danger');
      });
    });
  
    updateTotal();
  });
