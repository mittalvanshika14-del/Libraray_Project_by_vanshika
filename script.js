// Typing
const text = "Backend Intern | Python | SQL";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text[i];
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Typing name
const nameText = "Vanshika Mittal";
let j = 0;

function typingName() {
  if (j < nameText.length) {
    document.querySelector(".typing-name").innerHTML += nameText[j];
    j++;
    setTimeout(typingName, 80);
  }
}
typingName();

// Popup
function closePopup() {
  document.getElementById("popup").style.display = "none";

  const entry = document.getElementById("entryScreen");
  entry.style.display = "flex";

  setTimeout(() => {
    entry.style.display = "none";
    document.getElementById("main-content").classList.add("show");
  }, 2000);
}

document.body.classList.add("loaded");


// ================= PROJECT OPEN =================
function openProject(type) {
  const container = document.getElementById("fullProject");
  const title = document.getElementById("projectTitle");
  const body = document.getElementById("projectBody");

  let images = [];
  let steps = [];
  let heading = "";
  let desc = "";

  // ===== ATM =====
  if (type === "atm") {
    heading = "ATM System";
    desc = "Python-based ATM system with authentication & transactions.";

    for (let i = 1; i <= 11; i++) {
      images.push(`atm${i}.png`);
    }

    steps = [
      "Main interface of ATM system with options for new account and login.",
      "ATM menu showing operations like balance, deposit and withdraw.",
      "Balance check feature displaying user's current account balance.",
      "Deposit functionality allowing user to add money securely.",
      "Withdraw functionality with proper validation.",
      "Money transfer feature between accounts.",
      "Bank statement showing complete transaction history.",
      "Update contact details feature for users.",
      "Database structure used for storing account data.",
      "User database managing login credentials securely.",
      "Transaction database tracking all operations."
    ];
  }

  // ===== LIBRARY =====
  if (type === "library") {
    heading = "Library Management System";
    desc = "SQL-based system for managing books and students.";

    for (let i = 1; i <= 4; i++) {
      images.push(`lib${i}.png`);
    }

    steps = [
      "Display of all student records stored in the database.",
      "Interface to add new student details into the system.",
      "Section to add and manage books in the library database.",
      "Book issue system linking students with issued books."
    ];
  }

  // ===== RENDER =====
  title.innerText = heading;

  body.innerHTML = `
    <p style="color:#94a3b8; margin-bottom:20px;">${desc}</p>

    ${images.map((img, i) => `
      <div class="project-row ${i % 2 === 1 ? 'reverse' : ''}">
        
        <img src="${img}" onerror="this.style.display='none'">

        <div class="project-info">
          <h3>Step ${i + 1}</h3>
          <p>${steps[i] || "Project screen explanation."}</p>
        </div>

      </div>
    `).join('')}
  `;

  container.style.display = "block";
}


// CLOSE PROJECT
function closeProject() {
  document.getElementById("fullProject").style.display = "none";
}