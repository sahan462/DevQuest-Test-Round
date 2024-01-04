window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;

      const response = await loginUser(email, password);
      if (response.error) {
        alert(response.error);
      } else {
        if(response.message){
          document.getElementById("errorMsg").innerHTML = response.message;
        }
        if (response.response.token) {
          localStorage.setItem("token", response.response.token);
          window.location.href = `../client/dashboard.html?id=${response.response.id}`;
        } else {
          document.getElementById("errorMsg").innerHTML = response.response;
        }
      }
    });
  } else {
    console.error("loginForm not found");
  }
});

async function loginUser(email, password) {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return response.json();
    } else if (response.status === 403) {
      return response.json();
    } else if (response.status === 404) {
      return response.json();
    } else {
      throw new Error("An error occurred");
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
