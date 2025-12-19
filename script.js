document.addEventListener("DOMContentLoaded", () => {

    // ================= AUTO REDIRECT IF LOGGED IN =================
    document.addEventListener("DOMContentLoaded", () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            window.location.href = "../ambot/index.html";
        }

        switchTab("login");
    });

    // ================= TAB SWITCH =================
    function switchTab(tab) {
        document.querySelectorAll(".tab").forEach(btn =>
            btn.classList.remove("active")
        );
        document.querySelectorAll(".form").forEach(form =>
            form.classList.remove("active")
        );

        if (tab === "login") {
            document.querySelector(".tab:nth-child(1)").classList.add("active");
            document.getElementById("loginForm").classList.add("active");
        } else {
            document.querySelector(".tab:nth-child(2)").classList.add("active");
            document.getElementById("registerForm").classList.add("active");
        }
    }

    // ================= LOGIN =================
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginEmail.value;
        const password = loginPassword.value;

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "../ambot/index.html";
        } else {
            loginMessage.textContent = "❌ Invalid email or password";
        }
    });

    // ================= REGISTER =================
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();

        if (registerPassword.value !== confirmPassword.value) {
            registerMessage.textContent = "❌ Passwords do not match";
            return;
        }

        localStorage.setItem("userName", registerName.value);
        localStorage.setItem("userEmail", registerEmail.value);
        localStorage.setItem("userPassword", registerPassword.value);

        registerMessage.textContent = "✅ Account created! Please login.";
        switchTab("login");
    });

}); // 👈 THIS LINE FIXES EVERYTHING
