function acknowledge(title) {
  const name = prompt("Enter your name:");
  const empId = prompt("Enter your Employee ID:");

  if (!name || !empId) {
    alert("Acknowledgment cancelled.");
    return;
  }

  const data = {
    name,
    empId,
    title,
    timestamp: new Date().toLocaleString(),
  };

  // This will call a Google Apps Script webhook (to be created)
  fetch("YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.text())
    .then((msg) => alert(msg))
    .catch((err) => alert("Error: " + err));
}

