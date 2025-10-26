/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const contentHTML = `
  <div class="container">
    <header>
      <div class="logo">
        <h1>STT Swiss Table Tennis</h1>
      </div>
      <div class="contact-info">
        <p>Swiss Table Tennis</p>
        <p>Haus des Sports</p>
        <p>Talgutzentrum 27</p>
        <p>CH-3063 Ittigen b. Bern</p>
        <br>
        <p><strong>Telefon:</strong> +41 31 359 73 90</p>
        <p><strong>Email:</strong> info@swisstabletennis.ch</p>
        <p><strong>Web:</strong> www.swisstabletennis.ch</p>
      </div>
    </header>

    <main>
      <section class="event-header">
        <h2>Convocation</h2>
        <h1>Belgium Open (BEL)</h1>
        <p class="event-dates">9 – 13 November 2025</p>
        <div id="countdown"></div>
      </section>

      <section class="players">
        <h2>Athlètes Convoqués</h2>
        <div class="player-lists">
          <div class="player-list">
            <h3>Dames</h3>
            <ul>
              <li>Doutaz Fanny, <span>ZZ-Lancy</span></li>
              <li>Maurer Ludivine, <span>Bernex</span></li>
            </ul>
          </div>
          <div class="player-list">
            <h3>Messieurs</h3>
            <ul>
              <li>Falconnier Timothy, <span>1957 Lampertheim</span></li>
              <li>Keusch Noe, <span>Young Stars ZH</span></li>
              <li>Ulrich Numa, <span>Rio-Star Muttenz</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="details">
        <h2>Informations Détaillées</h2>
        <div class="details-grid">
          <div class="detail-card">
            <div class="icon">📅</div>
            <h3>Rendez-vous</h3>
            <p><strong>Timothy, Noe, Numa, Fanny, Samir:</strong><br>Dimanche 9 nov. 2025, 10:00h, entrée principale Gare CFF Bâle.</p>
            <p><strong>Ludivine:</strong><br>Lundi 10 nov. 2025, voyage individuel.</p>
          </div>
          <div class="detail-card">
              <div class="icon">📍</div>
              <h3>Lieu</h3>
              <p>Hall sportif du Paire</p>
              <p>Rue du Paire 1, 4860 Pepinster, Belgium <button class="copy-btn" title="Copier l'adresse" data-copy-text="Rue du Paire 1, 4860 Pepinster, Belgium">📋</button></p>
          </div>
          <div class="detail-card">
              <div class="icon">👨‍🏫</div>
              <h3>Entraîneur</h3>
              <p>Samir Mulabdic</p>
              <p>Tel.: 076 815 63 59 <button class="copy-btn" title="Copier le numéro" data-copy-text="076 815 63 59">📋</button></p>
          </div>
          <div class="detail-card">
              <div class="icon">🏨</div>
              <h3>Logement</h3>
              <p>Sera communiqué ultérieurement.</p>
          </div>
          <div class="detail-card">
              <div class="icon">🏁</div>
              <h3>Retour</h3>
              <p><strong>Tous:</strong><br>Jeudi 13 novembre 2025, le soir. Heure/lieu selon communication avec Samir.</p>
          </div>
          <div class="detail-card">
              <div class="icon">🚗</div>
              <h3>Voyage</h3>
              <p>Voiture</p>
          </div>
          <div class="detail-card">
              <div class="icon">👕</div>
              <h3>Équipement</h3>
              <p>Équipement Donic STT et équipement d'entraînement privé y inclus chaussures extérieures.</p>
          </div>
          <div class="detail-card">
              <div class="icon">💰</div>
              <h3>Frais</h3>
              <p>CHF 140.00 / nuit ou selon contrat individuel. Les frais seront facturés par Swiss Table Tennis après l'événement.</p>
          </div>
          <div class="detail-card important">
              <div class="icon">⚠️</div>
              <h3>Important</h3>
              <p>Pour entrer dans le pays, il faut présenter la carte d'identité ou le passeport! Merci de l'amener!</p>
          </div>
        </div>
      </section>

      <section class="insurance">
          <h2>Assurances</h2>
          <p>Les athlètes du cadre ne sont pas assurés par STT. STT décline toute responsabilité en cas d'accident survenant lors de déplacement avec l'équipe nationale, que ce soit en Suisse ou à l'étranger. Le joueur ne doit pas oublier de prendre sa carte d'assurance de la caisse-maladie lors de déplacement à l'étranger. La conclusion d'une assurance de voyage et frais d'annulation est vivement recommandée. <strong>Les frais encourus en cas de non-participation - également à la suite d'une maladie ou d'une blessure - sont également à la charge des athlètes.</strong></p>
      </section>

      <section class="closing">
          <p>Nous nous réjouissons de ton engagement et te souhaitons beaucoup de succès !</p>
          <p><em>Swiss Table Tennis</em></p>
      </section>
    </main>

    <footer>
      <p>GUBLER.ch</p>
      <p>swiss olympic MEMBER</p>
      <p>DONIC</p>
    </footer>
  </div>
`;

document.body.innerHTML = contentHTML;

function initializeInteractivity() {
    // 1. Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2025-11-09T10:00:00').getTime();

    if (countdownElement) {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "<h3>L'événement a commencé !</h3>";
            } else {
                countdownElement.innerHTML = `
                    <div><span>${days}</span> Jours</div>
                    <div><span>${hours}</span> Heures</div>
                    <div><span>${minutes}</span> Minutes</div>
                    <div><span>${seconds}</span> Secondes</div>
                `;
            }
        }, 1000);
    }

    // 2. Copy to Clipboard
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = (button as HTMLElement).dataset.copyText;
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalContent = button.innerHTML;
                    button.innerHTML = 'Copié!';
                    (button as HTMLButtonElement).disabled = true;
                    setTimeout(() => {
                        button.innerHTML = originalContent;
                        (button as HTMLButtonElement).disabled = false;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });

    // 3. Fade-in on Scroll
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('fade-in-section'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

initializeInteractivity();