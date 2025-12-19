// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        // Redirect to login page
        window.location.href = "../ambot/index.html";
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "../ambot/index.html";
    });
}
