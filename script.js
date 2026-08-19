const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Enhance the Work with me section with the Silver Meridian office portrait.
const contactCard = document.querySelector(".contact-card");

if (contactCard) {
  contactCard.innerHTML = `
    <div class="contact-copy">
      <p class="eyebrow">Work with me</p>
      <h2>Have an app or digital product in mind?</h2>
      <p class="contact-lede">
        I’m open to freelance development, product collaborations and selected community or event projects.
      </p>
      <a class="button button-light contact-email" href="mailto:paris@silvermeridian.co.uk">
        paris@silvermeridian.co.uk
      </a>
    </div>
    <div class="contact-visual">
      <img src="images/lauren-tech-office.png" alt="Silver Meridian developer working in a modern technology workspace">
    </div>
  `;

  const workWithMeStyles = document.createElement("style");
  workWithMeStyles.textContent = `
    .contact-card {
      display: grid;
      grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
      gap: 0;
      padding: 0;
      overflow: hidden;
      align-items: stretch;
      min-height: 500px;
    }

    .contact-copy {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 64px 60px;
      background:
        radial-gradient(circle at 85% 18%, rgba(109, 91, 208, 0.58), transparent 34%),
        linear-gradient(135deg, #12213c, #1b3260);
    }

    .contact-copy h2 {
      max-width: 650px;
      margin-bottom: 18px;
    }

    .contact-card .contact-lede {
      max-width: 610px;
      margin-bottom: 30px;
      color: rgba(255, 255, 255, 0.76);
      font-size: 1.04rem;
    }

    .contact-email {
      margin-top: 2px;
    }

    .contact-visual {
      position: relative;
      min-height: 500px;
      overflow: hidden;
      background: #0f172a;
    }

    .contact-visual::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 18px 0 34px rgba(15, 23, 42, 0.16);
    }

    .contact-visual img {
      width: 100%;
      height: 100%;
      min-height: 500px;
      object-fit: cover;
      object-position: center center;
    }

    @media (max-width: 980px) {
      .contact-card {
        grid-template-columns: 1fr 0.9fr;
        flex-direction: initial;
      }

      .contact-copy {
        padding: 50px 42px;
      }
    }

    @media (max-width: 760px) {
      .contact-card {
        grid-template-columns: 1fr;
        min-height: 0;
        padding: 0;
      }

      .contact-visual {
        order: -1;
        min-height: 360px;
      }

      .contact-visual img {
        min-height: 360px;
        max-height: 430px;
      }

      .contact-visual::after {
        box-shadow: inset 0 -16px 30px rgba(15, 23, 42, 0.10);
      }

      .contact-copy {
        padding: 38px 28px 42px;
      }

      .contact-email {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(workWithMeStyles);
}
