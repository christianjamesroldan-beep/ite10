// ================= PAGE PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // Redirect to LOGIN page
        window.location.replace("/ite10/index.html");
    }
});

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.replace("/ite10/index.html");
    });
}
