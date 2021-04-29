const handleFriendSubmit = async (event) => {
  event.preventDefault();
  try {
      // need variable names from Oliver for the queryselectors
    const friendUsername = document.querySelector("#friend-username").value.trim();
    const friendcode = document.querySelector("#friend-code").value.trim();

    if (!friendUsername || !friendcode) {
      alert("You must provide both a username and a valid friendcode.");
      return;
    }

    const response = await fetch("/api/users/addfriend", {
      method: "POST",
      body: JSON.stringify({ friendUsername, friendcode }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Could not find a friend.");
      return;
    }

   // refresh the page
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

document
  .querySelector("#friend-form")
  .addEventListener("submit", handleFriendSubmit);
