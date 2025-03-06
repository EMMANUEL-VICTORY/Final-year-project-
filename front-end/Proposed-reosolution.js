document.addEventListener("DOMContentLoaded", function () {
    const acceptButton = document.getElementById("accept-resolution");
    const rejectButton = document.getElementById("reject-resolution");
    const searchButton = document.getElementById("search-button");
    const caseSearchInput = document.getElementById("case-search");
    const resolutionContent = document.getElementById("resolution-content");

    if (searchButton) {
        searchButton.addEventListener("click", function () {
            const query = caseSearchInput.value.trim();
            if (query) {
                fetch(`/search-case?query=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.found) {
                            resolutionContent.innerHTML = `
                                <p><strong>Case ID:</strong> ${data.case_id}</p>
                                <p><strong>Issue:</strong> ${data.issue}</p>
                                <p><strong>Suggested Resolution:</strong> ${data.resolution}</p>
                            `;
                        } else {
                            resolutionContent.innerHTML = `<p style="color: red;">Case not found. Please check the ID and try again.</p>`;
                        }
                    })
                    .catch(error => console.error('Error fetching case details:', error));
            } else {
                alert("Please enter a Case ID to search.");
            }
        });
    }

    if (acceptButton) {
        acceptButton.addEventListener("click", function () {
            alert("You have accepted the proposed resolution. Your case will be marked as resolved.");
            fetch('/update-case-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ case_id: caseSearchInput.value.trim(), status: 'Resolved' })
            })
            .then(response => response.json())
            .then(data => console.log('Case status updated:', data))
            .catch(error => console.error('Error updating case status:', error));
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener("click", function () {
            alert("You have rejected the proposed resolution. A review request has been submitted.");
            fetch('/request-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ case_id: caseSearchInput.value.trim(), request: 'Review Needed' })
            })
            .then(response => response.json())
            .then(data => console.log('Review request submitted:', data))
            .catch(error => console.error('Error requesting review:', error));
        });
    }
});
