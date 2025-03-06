document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Button clicked!");
        });
    });

    const notifications = document.getElementById("notifications");
    if (notifications) {
        notifications.innerHTML = "<p>You have 3 new notifications.</p>";
    }
});
