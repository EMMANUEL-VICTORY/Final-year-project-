document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchQuery = document.getElementById("search").value.trim();
    
    fetch(`/api/search-case?query=${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("case-info").style.display = "block";
                document.getElementById("case-status").style.display = "block";
                document.getElementById("evidence-section").style.display = "block";
                
                document.getElementById("case_title").textContent = data.case.title;
                document.getElementById("case_description").textContent = data.case.description;
                document.getElementById("case_submission_date").textContent = data.case.submission_date;
                document.getElementById("case_status").textContent = data.case.status;
                document.getElementById("assigned_official").textContent = data.case.assigned_official;
                document.getElementById("next_step").textContent = data.case.next_step;
                
                let evidenceList = document.getElementById("evidence_list");
                evidenceList.innerHTML = "";
                data.case.evidence.forEach(file => {
                    let listItem = document.createElement("li");
                    let link = document.createElement("a");
                    link.href = file.url;
                    link.textContent = file.name;
                    listItem.appendChild(link);
                    evidenceList.appendChild(listItem);
                });
            } else {
                alert("No case found. Please try again.");
            }
        })
        .catch(error => console.error("Error fetching case data:", error));
});