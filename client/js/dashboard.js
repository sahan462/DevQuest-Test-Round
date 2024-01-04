window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  fetch(`http://127.0.0.1:3000/api/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if the user data was successfully retrieved
      if (data.response) {
        console.log(data.response);
        const user = data.response;
        const userName = `${user.firstname} ${user.lastname}`;

        // Display the user's name on the page
        const nameElement = document.getElementById("userName");
        const nameElementWelcome = document.getElementById("welcome-name");
        nameElement.textContent = userName;
        nameElementWelcome.textContent = `${user.firstname}`;
      } else {
        const errorMessage = "User not found";
        alert(errorMessage);
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});

export function isLoggedIn() {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = parseJwt(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp && decodedToken.exp > currentTime) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

// Function to manually parse JWT token
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}
