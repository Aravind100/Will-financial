document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">Financial Solutions</div>
            <p style="margin-top:12px">Your financial needs. One trusted point of contact.</p>
          </div>
          <div><h3>Explore</h3><div class="footer-links">
            <a href="solutions.html">Financial Solutions</a><a href="imp.html">IMP – Intelligent Model Portfolio</a><a href="channel-partner.html">Channel Partner</a><a href="knowledge-centre.html">Knowledge Centre</a><a href="about.html">About</a>
          </div></div>
          <div><h3>Contact</h3><div class="footer-links">
            <a href="tel:+919173334069">+91 91733 34069</a><a href="mailto:aravindchaudhary90@gmail.com">aravindchaudhary90@gmail.com</a><a href="contact.html">Request a Call Back</a>
          </div></div>
        </div>
        <div class="footer-bottom">
          <p class="footer-disclaimer">General information only. Investments are subject to market risks. Product availability, eligibility, costs, taxation and terms vary. No return or outcome is guaranteed. Insurance is subject to policy terms and conditions. Please review relevant documents and consider suitability before making decisions.</p>
          <p>© ${new Date().getFullYear()} Financial Solutions. <a href="privacy-policy.html">Privacy Policy</a> · <a href="terms.html">Terms & Disclosures</a></p>
        </div>
      </div>`;
  }

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));

  document.querySelectorAll("form[data-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const type = form.dataset.form === "partner" ? "Channel Partner Enquiry" : "Customer Enquiry";
      let body = `${type}%0A%0A`;
      for (const [key, value] of data.entries()) body += `${key}: ${value}%0A`;
      const subject = encodeURIComponent(type);
      window.location.href = `mailto:aravindchaudhary90@gmail.com?subject=${subject}&body=${body}`;
    });
  });
});