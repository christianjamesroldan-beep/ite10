// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    // If NOT logged in → go to login/register page
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "../index.html"; // fixed path
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // Remove login session
        localStorage.removeItem("isLoggedIn");

        // Redirect to login/register page
        window.location.href = "../index.html"; // fixed path
    });
}

