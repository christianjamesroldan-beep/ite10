// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        // GitHub Pages repo path
        window.location.href = "/ite10/akotosinatoy/index.html";
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/ite10/akotosinatoy/index.html";
    });
}
