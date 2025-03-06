// notifications.js
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const caseSearchInput = document.getElementById("case-search");
    const notificationList = document.getElementById("notification-list");

    if (searchButton) {
        searchButton.addEventListener("click", function () {
            const query = caseSearchInput.value.trim();
            if (query) {
                fetch(`/get-notifications?case_id=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        notificationList.innerHTML = ""; // Clear old results
                        if (data.notifications.length > 0) {
                            data.notifications.forEach(notification => {
                                const listItem = document.createElement("li");
                                listItem.textContent = notification.message;
                                notificationList.appendChild(listItem);
                            });
                        } else {
                            notificationList.innerHTML = `<li style="color: red;">No notifications found for this case.</li>`;
                        }
                    })
                    .catch(error => console.error('Error fetching notifications:', error));
            } else {
                alert("Please enter a Case ID to search.");
            }
        });
    }
});
