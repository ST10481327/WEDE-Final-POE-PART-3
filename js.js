document.addEventListener('DOMContentLoaded', function () {

  /* ==========================
     GALLERY LIGHTBOX
  ========================== */
  const lightboxThumbs = document.querySelectorAll('.lightbox-thumb');
  const modal = document.getElementById('lightboxModal');
  const modalImage = document.getElementById('lightboxImage');
  const modalClose = modal ? modal.querySelector('.modal-close') : null;

  if (lightboxThumbs.length && modal && modalImage && modalClose) {
    lightboxThumbs.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt || 'Image';
        modal.classList.remove('hidden');
      });
    });

    modalClose.addEventListener('click', () => modal.classList.add('hidden'));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  /* ==========================
     NEWS / SERVICES LIST
  ========================== */
  const registrationItems = [
    { name: "Company Name Reservation (CIPC)", description: "Reserve your company name with CIPC.", price: 50 },
    { name: "Pty Ltd Registration", description: "Register a private company online.", price: 125 },
    { name: "Income Tax Registration (SARS)", description: "Automatic tax registration.", price: 0 },
    { name: "Business License", description: "Municipal or national license.", price: 500 },
    { name: "Domain Registration (.co.za)", description: "1-year domain registration.", price: 85 },
    { name: "B-BBEE Affidavit", description: "Basic B-BBEE certificate.", price: 0 }
  ];

  const itemsListDiv = document.getElementById("itemsList");
  const infoBox = document.getElementById("itemInfo");
  const infoTitle = document.getElementById("itemTitle");
  const infoDesc = document.getElementById("itemDesc");
  const infoPrice = document.getElementById("itemPrice");

  if (itemsListDiv && infoBox && infoTitle && infoDesc && infoPrice) {
    registrationItems.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "item-button";
      btn.textContent = item.name;

      btn.addEventListener("click", () => {
        infoTitle.textContent = item.name;
        infoDesc.textContent = item.description;
        infoPrice.textContent = item.price.toLocaleString('en-ZA');
        infoBox.classList.add("active");
        infoBox.scrollIntoView({ behavior: "smooth" });
      });

      itemsListDiv.appendChild(btn);
    });
  }

  /* ==========================
     SERVICE SELECT (Dashboard)
  ========================== */
  const services = [
    { id: 1, title: "Company Registration (PTY LTD)", desc: "Complete CIPC company registration.", price: 450, agent: "Agent Lebo" },
    { id: 2, title: "Name Reservation", desc: "Reserve your company name.", price: 75, agent: "Agent Thabo" },
    { id: 3, title: "BEE Certificate", desc: "Basic BEE certificate.", price: 250, agent: "Agent Naledi" },
    { id: 4, title: "Tax Clearance (SARS)", desc: "Tax clearance pin.", price: 350, agent: "Agent Kgomotso" }
  ];

  const serviceSelect = document.getElementById("serviceSelect");
  const dashTitle = document.getElementById("itemTitle");
  const dashDesc = document.getElementById("itemDesc");
  const dashPrice = document.getElementById("itemPrice");
  const dashAgent = document.getElementById("itemAgent");
  const contactOptions = document.getElementById("contactOptions");
  const whatsappLink = document.getElementById("whatsappLink");
  const emailLink = document.getElementById("emailLink");

  if (serviceSelect) {
    services.forEach(service => {
      const option = document.createElement("option");
      option.value = service.id;
      option.textContent = service.title;
      serviceSelect.appendChild(option);
    });

    serviceSelect.addEventListener("change", () => {
      const selected = services.find(s => s.id == serviceSelect.value);

      if (!selected) {
        dashTitle.textContent = "";
        dashDesc.textContent = "";
        dashPrice.textContent = "";
        dashAgent.textContent = "";
        contactOptions.style.display = "none";
        return;
      }

      dashTitle.textContent = selected.title;
      dashDesc.textContent = selected.desc;
      dashPrice.textContent = "R " + selected.price;
      dashAgent.textContent = selected.agent;

      contactOptions.style.display = "block";

      whatsappLink.href =
        `https://wa.me/27632848222?text=Hello, I need help with: ${encodeURIComponent(selected.title)}`;

      emailLink.href =
        `mailto:mahlatsenorman2@gmail.com?subject=Help with ${encodeURIComponent(selected.title)}`;
    });
  }

  /* ==========================
     TICKET SYSTEM
  ========================== */
  const ticketForm = document.getElementById("ticketForm");
  const openTicket = document.getElementById("openTicket");
  const closeTicket = document.getElementById("closeTicket");
  const ticketSubmitForm = document.getElementById("ticketSubmitForm");

  if (openTicket && closeTicket && ticketForm && ticketSubmitForm) {
    openTicket.addEventListener("click", () => ticketForm.style.display = "block");
    closeTicket.addEventListener("click", () => ticketForm.style.display = "none");

    ticketSubmitForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ Ticket submitted successfully!");
      ticketSubmitForm.reset();
      ticketForm.style.display = "none";
    });
  }

  /* ==========================
     REGISTRATION + LOGIN
  ========================== */
  const registrationForm = document.getElementById('registrationForm');
  const loginForm = document.getElementById('loginForm');
  const loginSection = document.getElementById('login');
  const registerSection = document.getElementById('register');
  const welcomeSection = document.getElementById('welcome');

  if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const cellphone = document.getElementById('cellphone').value.trim();
      const regNum = document.getElementById('company_reg').value.trim();
      const password = document.getElementById('password').value.trim();
      const email = document.getElementById('email').value.trim();

      const phonePattern = /^\+27\d{9}$/;
      if (!phonePattern.test(cellphone)) {
        alert('❌ Cellphone must start with +27 and have 9 digits after.');
        return;
      }

      if (regNum && !/^\d+$/.test(regNum)) {
        alert('❌ Company registration number must contain only numbers.');
        return;
      }

      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{9}$/;
      if (!passwordPattern.test(password)) {
        alert("❌ Password must be 9 characters long and include 1 uppercase letter, 1 number, and 1 special character.");
        return;
      }

      alert("✅ Registration Successful!");

      registrationForm.reset();
      registerSection.style.display = "none";
      loginSection.style.display = "block";
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      loginSection.style.display = "none";
      welcomeSection.style.display = "block";
    });
  }

});
