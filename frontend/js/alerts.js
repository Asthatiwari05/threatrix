async function loadAlerts() {
  const res = await fetch("http://localhost:5000/api/alerts");
  const data = await res.json();

  const container = document.getElementById("alertsList");

  data.forEach(a => {
    container.innerHTML += `
      <div class="bg-red-900 p-4 rounded">
        ${a.message}
      </div>
    `;
  });
}

loadAlerts();