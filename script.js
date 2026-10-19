:root {
  --dark: #111111;
  --dark-card: #1b1b1b;
  --cream: #f6f1e8;
  --gold: #e5b65c;
  --muted: #bcb8b0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--dark);
  color: var(--cream);
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

.header {
  min-height: 76px;
  padding: 18px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #0c0c0c;
  border-bottom: 1px solid #303030;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo span {
  color: var(--gold);
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  color: var(--muted);
  font-size: 0.95rem;
}

.nav a:hover {
  color: var(--gold);
}

.nav .nav-button {
  padding: 9px 17px;
  color: var(--dark);
  background: var(--gold);
  border-radius: 5px;
}

.menu-toggle {
  display: none;
  color: var(--cream);
  background: transparent;
  border: 0;
  font-size: 1.8rem;
  cursor: pointer;
}

.hero {
  min-height: 570px;
  padding: 90px 8%;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 50px;
  background:
    radial-gradient(ellipse at 85% 40%, #49351d 0, transparent 35%),
    linear-gradient(120deg, #111, #201b15);
}

.eyebrow {
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 18px;
}

h1 {
  font-size: clamp(2.6rem, 5.5vw, 4.7rem);
  line-height: 1.1;
  margin-bottom: 24px;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-text,
.section-text {
  max-width: 650px;
  color: var(--muted);
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.button {
  display: inline-block;
  padding: 12px 22px;
  border: 1px solid var(--gold);
  border-radius: 5px;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease;
}

.primary {
  background: var(--gold);
  color: var(--dark);
}

.primary:hover {
  background: #f2ca7d;
  transform: translateY(-2px);
}

.secondary {
  color: var(--cream);
}

.secondary:hover {
  background: #ffffff12;
}

.hero-card {
  min-height: 270px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #6d5732;
  border-radius: 14px;
  background: #111111a8;
}

.film-icon {
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  margin-bottom: 25px;
  border: 2px solid var(--gold);
  border-radius: 50%;
  color: var(--gold);
  font-size: 2rem;
}

.hero-card p {
  font-weight: bold;
  letter-spacing: 1px;
}

.hero-card small {
  margin-top: 8px;
  color: var(--muted);
}

.section {
  padding: 85px 8%;
}

.about {
  text-align: center;
}

.about .section-text,
.contact .section-text {
  margin-left: auto;
  margin-right: auto;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 45px;
}

.stats div {
  padding: 24px 12px;
  background: var(--dark-card);
  border-radius: 8px;
}

.stats strong,
.stats span {
  display: block;
}

.stats strong {
  color: var(--gold);
  font-size: 1.1rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.services {
  background: #171717;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 38px;
}

.service-card {
  padding: 28px;
  background: var(--dark-card);
  border: 1px solid #333;
  border-radius: 9px;
  transition: 0.2s ease;
}

.service-card:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
}

.service-number {
  color: var(--gold);
  font-size: 0.9rem;
  font-weight: bold;
}

.service-card h3 {
  margin: 12px 0;
  font-size: 1.25rem;
}

.service-card p {
  color: var(--muted);
}

.cta {
  padding: 75px 8%;
  text-align: center;
  background: linear-gradient(120deg, #392a17, #18140f);
}

.cta h2 {
  margin-bottom: 28px;
}

.contact {
  text-align: center;
}

.contact form {
  max-width: 600px;
  margin: 35px auto 0;
  text-align: left;
}

.contact label {
  display: block;
  margin: 18px 0 7px;
  font-weight: bold;
}

.contact input,
.contact textarea {
  display: block;
  width: 100%;
  padding: 13px;
  border: 1px solid #454545;
  border-radius: 5px;
  background: #1a1a1a;
  color: var(--cream);
  font: inherit;
}

.contact input:focus,
.contact textarea:focus {
  outline: 2px solid var(--gold);
  border-color: transparent;
}

.contact textarea {
  resize: vertical;
}

.contact form button {
  margin-top: 20px;
}

#formMessage {
  margin-top: 14px;
  color: var(--gold);
}

.footer {
  padding: 35px 8%;
  text-align: center;
  border-top: 1px solid #303030;
}

.footer p {
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 8px;
}

.footer .copyright {
  margin-top: 18px;
  font-size: 0.8rem;
}

@media (max-width: 760px) {
  .header {
    padding: 16px 5%;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 22px 5%;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    background: #0c0c0c;
    border-bottom: 1px solid #303030;
  }

  .nav.open {
    display: flex;
  }

  .nav .nav-button {
    text-align: center;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 65px 6%;
    gap: 35px;
  }

  .section {
    padding: 65px 6%;
  }

  .stats,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 60px 6%;
  }
}