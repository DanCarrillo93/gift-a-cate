const handleAddItemSubmit = async (event) => {
    event.preventDefault();
    try {
        // need variable names from Oliver for the queryselectors
      const item_name = document.querySelector("#item-name").value.trim();
      const description = document.querySelector("#item-description").value.trim();
      const category = document.querySelector("#item-category").value.trim();
      const link = document.querySelector("#item-link").value.trim();

      if (!item_name || !description || !category) {
        alert("You must provide a item, description and a category.");
        return;
      }
  
      const response = await fetch("/api/users/additem", {
        method: "POST",
        body: JSON.stringify({ item_name, description, category, link_1: link }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
  
      if (!response.ok) {
        alert("Could not add the item.");
        return;
      }
  
     // refresh the page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  
  document
    .querySelector("#item-form")
    .addEventListener("submit", handleAddItemSubmit);
  