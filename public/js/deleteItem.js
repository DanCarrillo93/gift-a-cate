const delButtonHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute("data-id"));
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
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
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);