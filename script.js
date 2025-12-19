document.addEventListener("DOMContentLoaded", () => {
    // ===== SHOW LOGIN TAB BY DEFAULT =====
    switchTab("login");

    // ===== AUTO REDIRECT IF LOGGED IN =====
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
        window.location.href = "/ite10/ambot/index.html";
        return;
    }

    // ===== TAB SWITCH EVENT HANDLERS =====
    const loginTabBtn = document.querySelector(".tab-login");
    const registerTabBtn = document.querySelector(".tab-register");

    if (loginTabBtn) loginTabBtn.addEventListener("click", () => switchTab("login"));
    if (registerTabBtn) registerTabBtn.addEventListener("click", () => switchTab("register"));

    // ===== LOGIN FORM =====
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = loginEmail.value;
            const password = loginPassword.value;

            const savedEmail = localStorage.getItem("userEmail");
            const savedPassword = localStorage.getItem("userPassword");

            if (email === savedEmail && password === savedPassword) {
                loginMessage.textContent = "✅ Login successful!";
                loginMessage.style.color = "#4ade80";

                localStorage.setItem("isLoggedIn", "true");

                setTimeout(() => {
                    window.location.href = "/ite10/ambot/index.html";
                }, 500);
            } else {
                loginMessage.textContent = "❌ Invalid email or password";
                loginMessage.style.color = "#f87171";
            }
        });
    }

    // ===== REGISTER FORM =====
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = registerName.value;
            const email = registerEmail.value;
            const password = registerPassword.value;
            const confirm = confirmPassword.value;

            if (password !== confirm) {
                registerMessage.textContent = "❌ Passwords do not match";
                registerMessage.style.color = "#f87171";
                return;
            }

            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            registerMessage.textContent = "✅ Account created! Please login.";
            registerMessage.style.color = "#4ade80";

            switchTab("login");
        });
    }
});

// ===== TAB SWITCH FUNCTION =====
function switchTab(tab) {
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".form").forEach(form => form.classList.remove("active"));

    if (tab === "login") {
        document.querySelector(".tab-login").classList.add("active");
        document.getElementById("loginForm").classList.add("active");
    } else {
        document.querySelector(".tab-register").classList.add("active");
        document.getElementById("registerForm").classList.add("active");
    }
}
