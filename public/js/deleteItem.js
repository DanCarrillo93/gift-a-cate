const delButtonHandler = async (event) => {
    event.preventDefault();
    alert("click heard");
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete item');
      }
    }
  };

document
  .querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', delButtonHandler);
  });