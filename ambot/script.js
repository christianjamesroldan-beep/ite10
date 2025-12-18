// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    // Block direct access if not logged in
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "../akotosinatoy/index.html";
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "../akotosinatoy/index.html";
    });
}
