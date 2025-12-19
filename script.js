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
        loginMessage.textContent = "✅ Login successful!";
        loginMessage.style.color = "#4ade80";

        localStorage.setItem("isLoggedIn", "true");

        // 🔗 CONNECT TO PORTFOLIO
        setTimeout(() => {
            window.location.href = "ambot/index.html";
        }, 800);
    } else {
        loginMessage.textContent = "❌ Invalid email or password";
        loginMessage.style.color = "#f87171";
    }
});

// ================= REGISTER =================
document.getElementById("registerForm").addEventListener("submit", function (e) {
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
    
