// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        // Redirect to login if not logged in
        window.location.href = "/ite10/index.html";
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/ite10/index.html";
    });
}
