const logout = async () => {
  const response = await fetch("/api/users/logout");

  if (response.ok) {
    window.location.replace("/");
    return;
  }
  alert(response.statusText);
};

document.querySelector("#logout-btn").addEventListener("click", logout);
