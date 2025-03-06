// settings.js
document.addEventListener("DOMContentLoaded", function () {
    const settingsForm = document.getElementById("settings-form");
    const deleteAccountBtn = document.getElementById("delete-account");

    // Handle form submission
    settingsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const settingsData = {
            username,
            email,
            password
        };

        fetch("/update-settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(settingsData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Settings updated successfully!");
            } else {
                alert("Error updating settings.");
            }
        })
        .catch(error => console.error("Error:", error));
    });

    // Handle account deletion
    deleteAccountBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            fetch("/delete-account", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Account deleted successfully.");
                    window.location.href = "/login"; // Redirect to login page
                } else {
                    alert("Error deleting account.");
                }
            })
            .catch(error => console.error("Error:", error));
        }
    });
});
