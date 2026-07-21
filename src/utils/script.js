const apiUrl = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_GOOGLE_SHEET_KEY;

// ── GUEST 2 TOGGLE ─────────────────────────────
function addGuest2() {
  document.getElementById("g2block").style.display = "block";
  document.getElementById("add-btn").style.display = "none";
  document.getElementById("max-note").style.display = "block";
  document.getElementById("guest").value = 2;
}
function removeGuest2() {
  document.getElementById("g2block").style.display = "none";
  document.getElementById("add-btn").style.display = "flex";
  document.getElementById("max-note").style.display = "none";
  document.getElementById("guest").value = 1;
  ["g2name", "g2email", "g2title", "g2tel"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

// ── SUBMIT ─────────────────────────────────────

const submitRSVP = async () => {
  const getValue = (id) => document.getElementById(id)?.value || "";

  const attendance = document.querySelector('input[name="att"]:checked')?.value;

  // Validation (basic)
  if (!getValue("g1name") || !getValue("g1email") || !attendance) {
    alert("Please fill all required fields");
    return;
  }
  console.log(apiUrl);
  console.log("Guest: ", getValue("guest"));
  console.log("Business: ", getValue("business"));

  const payload = {
    business: getValue("business"),

    g1name: getValue("g1name"),
    g1email: getValue("g1email"),
    g1title: getValue("g1title"),
    g1tel: getValue("g1tel"),

    g2name: getValue("g2name"),
    g2email: getValue("g2email"),
    g2title: getValue("g2title"),
    g2tel: getValue("g2tel"),

    guest: getValue("guest"),
    attendance: attendance === "yes" ? "Attending" : "Declined",
  };
  console.log(payload);

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },

      body: JSON.stringify(payload),
    });

    const result = await res;
    console.log(result);

    if (result.ok) {
      // Show success UI
      document.getElementById("form-wrapper").style.display = "none";
      document.getElementById("success-msg").style.display = "block";

      // Fill confirmation
      document.getElementById("cname").textContent = payload.g1name;
      document.getElementById("cemail").textContent = payload.g1email;
    }
  } catch (err) {
    console.error(err);
    alert("Submission failed. Please try again.");
  }
};

export { addGuest2, removeGuest2, submitRSVP };
