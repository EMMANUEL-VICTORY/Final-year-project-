// Update Case Form Submission
document.getElementById('case-update-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const status = document.getElementById('status').value;
    const progress = document.getElementById('progress').value;
    const resolution = document.getElementById('resolution').value;

    // Update case details
    document.getElementById('case-status').textContent = status;
    document.getElementById('case-progress').textContent = progress;
    document.getElementById('assigned-resolution').textContent = resolution;
    document.getElementById('user-case-progress').textContent = progress;

    alert('Case updated successfully!');
});

// Send Notification Button
document.querySelector('.notify-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const notificationMessage = document.getElementById('notification-message').value;

    if (userEmail && notificationMessage) {
        alert(`Notification sent to ${userEmail}: ${notificationMessage}`);
    } else {
        alert('Please fill in all fields.');
    }
});