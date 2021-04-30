const takeGift = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/users/takegift/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to take item');
      }
    }
  };

document
  .querySelector('.friend-gift')
  .addEventListener('click', takeGift);