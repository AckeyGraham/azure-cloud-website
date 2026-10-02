const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.querySelector(".sr-only").textContent = isExpanded ? "Open navigation" : "Close navigation";
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".sr-only").textContent = "Open navigation";
      navigation.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.className = "form-status";

    if (contactForm.action.includes("YOUR_FORM_ID")) {
      formStatus.textContent = "This form isn’t connected yet. The site owner needs to add the Formspree form ID before enquiries can be delivered.";
      formStatus.classList.add("is-error");
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.textContent = "Sending…";
    formStatus.textContent = "";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with status ${response.status}`);
      }

      contactForm.reset();
      formStatus.textContent = "Thanks for getting in touch. Your enquiry has been sent.";
      formStatus.classList.add("is-success");
    } catch (error) {
      console.error("Unable to send contact form.", error);
      formStatus.textContent = "We couldn’t send your enquiry just now. Please try again in a moment.";
      formStatus.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.innerHTML = 'Send your enquiry <span aria-hidden="true">↗</span>';
    }
  });
}
