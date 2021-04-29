const handleAddItemSubmit = async (event) => {
    event.preventDefault();
    try {
        // need variable names from Oliver for the queryselectors
      const itemName = document.querySelector("#item-name").value.trim();
      const description = document.querySelector("#item-description").value.trim();
      const category = document.querySelector("#item-category").value.trim();
      const link1 = document.querySelector("#item-link-1").value.trim();
      const link2 = document.querySelector("#item-link-2").value.trim();
      const link3 = document.querySelector("#item-link-2").value.trim();


      if (!itemName || !description || !category) {
        alert("You must provide a item, description and a category.");
        return;
      }
  
      const response = await fetch("/api/additem", {
        method: "POST",
        body: JSON.stringify({ itemName, description, category, link1, link2, link3 }),
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
  