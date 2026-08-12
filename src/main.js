const services = [
  {
    language: 'Hindi',
    time: 'Sunday • 7:30 AM – 9:30 AM',
    description: 'A weekly Hindi worship service with prayer, worship, and the Sunday message.',
    highlights: ['Main Sunday worship', 'Prayer and teaching', 'Open to families and visitors'],
  },
  {
    language: 'Tamil',
    time: 'Sunday • 9:30 AM – 11:30 AM',
    description: 'The Tamil congregation gathers every Sunday, with special monthly patterns for communion, Sunday school, and testimonies.',
    highlights: [
      'Sunday class every Sunday',
      'Communion on the 1st Sunday of every month',
      'Testimony sharing on the 4th Sunday',
    ],
    featured: true,
  },
  {
    language: 'Telugu',
    time: 'Sunday • 11:30 AM – 1:30 PM',
    description: 'A Telugu worship service for praise, fellowship, and the Word of God.',
    highlights: ['Main Sunday worship', 'Prayer and teaching', 'Welcoming Telugu fellowship'],
  },
];

const mapUrl = 'https://www.google.com/maps/place/ECI+Church,+Gurgaon/@28.4833955,77.0215722,17z/data=!4m6!3m5!1s0x390d19c48fdbaaa1:0xa3b7e5e2f1b7b3a7!8m2!3d28.4834732!4d77.0241829!16s%2Fg%2F1vfzckd3?entry=ttu';

const streetViewUrl = 'https://www.google.com/maps/place/ECI+Church,+Gurgaon/@28.4833955,77.0241471,3a,75y,90t/data=!3m7!1e2!3m5!1sCIHM0ogKEICAgICpv_XlmAE!2e10!3e12!7i4000!8i1824!4m9!3m8!1s0x390d19c48fdbaaa1:0xa3b7e5e2f1b7b3a7!8m2!3d28.4834732!4d77.0241829!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1vfzckd3?entry=ttu';

const tamilSchedule = [
  {
    title: 'Promise for the Month Service',
    timing: '1st day of every month • 6:00 AM',
    note: 'A dedicated early morning service to pray over the promise for the new month. Communion is included in this service.',
  },
  {
    title: 'Sunday Class',
    timing: 'Every Sunday',
    note: 'Children gather for Sunday class every week.',
  },
  {
    title: 'Communion Sundays',
    timing: '1st Sunday of every month',
    note: 'Communion on the first Sunday of each month.',
  },
  {
    title: 'Testimony Sunday',
    timing: '4th Sunday',
    note: 'Members share testimonies of God’s goodness and answered prayer in church.',
  },
  {
    title: 'Men’s Fellowship',
    timing: 'Every Monday evening • 7:00 PM – 8:00 PM',
    note: 'Men gather for prayer, encouragement, and fellowship at the church.',
  },
  {
    title: 'Women’s Fellowship',
    timing: 'Every Friday evening • 5:00 PM – 6:00 PM',
    note: 'Women gather for prayer, encouragement, and fellowship at the church.',
  },
];

const serviceCards = services.map((service) => `
  <article class="service-card ${service.featured ? 'featured-service' : ''}">
    <div class="service-topline">${service.featured ? 'Tamil service details' : 'Sunday service'}</div>
    <h3>${service.language}</h3>
    <p class="service-time">${service.time}</p>
    <p>${service.description}</p>
    <ul>${service.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
  </article>
`).join('');

const tamilItems = tamilSchedule.map((item) => `
  <article class="schedule-item">
    <span></span>
    <div>
      <h3>${item.title}</h3>
      <p class="timing">${item.timing}</p>
      <p>${item.note}</p>
    </div>
  </article>
`).join('');

document.querySelector('#root').innerHTML = `
  <main>
    <header class="nav">
      <a class="brand" href="#home" aria-label="ECI Church Gurgaon home">
        <span class="brand-mark">ECI</span>
        <span>ECI Church Gurgaon</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#tamil">Tamil</a>
        <a href="#sermons">Sermons</a>
        <a href="#visit">Visit</a>
      </nav>
      <a class="nav-button" href="#visit">Plan a Visit</a>
    </header>

    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Welcome home</p>
        <h1>ECI Church Gurgaon</h1>
        <p>A simple church home page for Hindi, Tamil, and Telugu worship services in Gurgaon.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#services">View service times</a>
          <a class="secondary-action" href="#sermons">Facebook sermons</a>
        </div>
      </div>
      <div class="hero-card image-card">
        <button class="photo-button" type="button" aria-label="Open church photo">
          <img src="/src/assets/church-photo.png" alt="ECI Church Gurgaon" />
        </button>
        <span>ECI Church Gurgaon</span>
      </div>
    </section>

    <section class="services" id="services">
      <div class="section-heading">
        <p class="eyebrow">Church services</p>
        <h2>Choose the service that fits your language.</h2>
      </div>
      <div class="service-grid">${serviceCards}</div>
    </section>

<section class="image-slider" aria-label="Church images and location">

  <a class="slide" href="${mapUrl}" target="_blank" rel="noreferrer">
    <img
      src="/src/assets/church-interior.png"
      alt="Inside ECI Church Gurgaon"
    />
    <strong>Images</strong>
    <span>View church images</span>
  </a>

  <a class="slide" href="${mapUrl}" target="_blank" rel="noreferrer">
    <img
      src="/src/assets/church-map.png"
      alt="ECI Church Gurgaon location on Google Maps"
    />
    <strong>Church location</strong>
    <span>Get directions</span>
  </a>

</section>

    <section class="month-service">
  <div>
    <p class="eyebrow">First day of every month</p>
    <h2>Promise for the Month Service</h2>
    <p>
      Join the Tamil congregation at <strong>6:00 AM</strong> on the 1st day
      of every month for prayer, communion, and the monthly promise.
    </p>
    <p class="promise-reference">
      This month's promise verse: <strong>2 Chronicles 25:9</strong>
    </p>
  </div>

  <img
    src="/src/assets/Promise-verse.png"
    alt="Promise verse card for 2 Chronicles 25:9"
    class="promise-image"
  />
</section>

    <section class="tamil" id="tamil">
      <div class="section-heading">
        <p class="eyebrow">Tamil service rhythm</p>
        <h2>Special weekly schedule for the Tamil service.</h2>
      </div>
      <div class="schedule-list">${tamilItems}</div>
    </section>

    <section class="sermons" id="sermons">
      <div>
        <p class="eyebrow">Sermons</p>
        <h2>Watch recent sermons on Facebook.</h2>
        <p>ECI Church Gurgaon uploads sermon videos to Facebook.</p>
      </div>
      <a class="secondary-action dark-border" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Open Facebook</a>
    </section>

    <footer id="visit">
      <div>
        <p class="eyebrow">Visit us</p>
        <h2>We would love to worship with you.</h2>
        <p class="address">ECI Church, Gurgaon, Haryana, 122001</p>
        <a class="map-link" href="${mapUrl}" target="_blank" rel="noreferrer">Open church location in Google Maps</a>
      </div>
      <a class="secondary-action map-button" href="${mapUrl}" target="_blank" rel="noreferrer">
        Get directions
      </a>
    </footer>


    <div class="photo-modal" id="photo-modal" aria-hidden="true">
      <button class="photo-modal-close" type="button" aria-label="Close photo">
        ×
      </button>

      <img
        src="/src/assets/church-photo.png"
        alt="ECI Church Gurgaon"
        class="photo-modal-image"
      />
    </div>
  </main>
`;


const photoModal = document.querySelector('#photo-modal');
const photoButton = document.querySelector('.photo-button');
const photoModalClose = document.querySelector('.photo-modal-close');

photoButton.addEventListener('click', () => {
  photoModal.classList.add('open');
  photoModal.setAttribute('aria-hidden', 'false');
});

photoModalClose.addEventListener('click', () => {
  photoModal.classList.remove('open');
  photoModal.setAttribute('aria-hidden', 'true');
});

photoModal.addEventListener('click', (event) => {
  if (event.target === photoModal) {
    photoModal.classList.remove('open');
    photoModal.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    photoModal.classList.remove('open');
    photoModal.setAttribute('aria-hidden', 'true');
  }
});
