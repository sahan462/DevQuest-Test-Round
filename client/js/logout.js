window.addEventListener("DOMContentLoaded", () => {
  const signOutButton = document.getElementById("sign-out-btn");
  signOutButton.addEventListener("click", signOut);

  function signOut() {
    localStorage.removeItem("token");
    window.location.href = "../client/login.html";
  }
});

async function signOut() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      localStorage.removeItem("token");
      window.location.href = "../client/login.html";
    } else {
      throw new Error("An error occurred");
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
