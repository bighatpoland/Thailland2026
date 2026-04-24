import { useMemo, useState } from 'react'
import './App.css'

const TABS = [
  { id: 'plan', label: 'Plan' },
  { id: 'days', label: 'Dni' },
  { id: 'transport', label: 'Transport' },
  { id: 'links', label: 'Linki' },
  { id: 'checklist', label: 'Checklist' },
]

const DESTINATIONS = [
  {
    name: 'Bangkok',
    dates: '5-7.06 i 26-28.06',
    nights: '4 noce łącznie',
    photo: '/photos/bangkok.jpg',
    focus: 'Urodziny: White Lotus Thai Cooking and Flower Garland Class + LEGO + SkyWalk + kolacja',
  },
  {
    name: 'Krabi',
    dates: '7-10.06',
    nights: '3 noce',
    photo: '/photos/krabi.jpg',
    focus: 'Railay Beach i James Bond Island',
  },
  {
    name: 'Phuket',
    dates: '10-15.06',
    nights: '5 nocy',
    photo: '/photos/phuket.jpg',
    focus: 'Old Town, Aquarium, Koh Racha Yai, półmaraton 14.06',
  },
  {
    name: 'Khao Sok / Cheow Lan',
    dates: '15-16.06',
    nights: '1 noc',
    photo: '/photos/khaosok.jpg',
    focus: 'Boat trip + nature walk',
  },
  {
    name: 'Koh Samui',
    dates: '16-20.06',
    nights: '4 noce',
    photo: '/photos/samui.jpg',
    focus: 'Rocznica 18.06: spokojny dzień + kolacja',
  },
  {
    name: 'Koh Phangan',
    dates: '20-26.06',
    nights: '6 nocy',
    photo: '/photos/phangan.jpg',
    focus: 'Ang Thong, hikingi Than Sadet i Phaeng, dzień buforowy',
  },
]

const KEY_EVENTS = [
  {
    date: '6.06',
    title: 'Urodziny',
    info: 'White Lotus Thai Cooking and Flower Garland Class + LEGO + SkyWalk + kolacja',
  },
  { date: '14.06', title: 'Półmaraton', info: 'Phuket, dzień recovery po starcie' },
  { date: '18.06', title: '10. rocznica', info: 'Koh Samui, romantyczna kolacja' },
]

const LOTUS_WORKSHOP = {
  name: 'White Lotus Thai Cooking and Flower Garland Class in Bangkok',
  date: 'Sobota, 6.06.2026',
  slot: 'Preferowany slot poranny',
  diet: 'Potwierdzić wersję wegetariańską przy rezerwacji',
  bookingUrl: 'https://www.klook.com/activity/161108-white-lotus-thai-cooking-class-in-bangkok/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=White+Lotus+Thai+Cooking+and+Flower+Garland+Class+in+Bangkok',
  notes: [
    'To główny punkt dnia urodzinowego w Bangkoku.',
    'Po warsztacie: LEGO Store -> Mahanakhon SkyWalk -> kolacja.',
    'Warto potwierdzić godzinę startu i punkt spotkania dzień wcześniej.',
  ],
}

const DAY_BY_DAY = [
  {
    date: 'Pt 5.06',
    base: 'Bangkok',
    title: 'Przylot i regeneracja',
    tags: ['Przylot', 'Lekko'],
    bullets: [
      'Przylot WAW -> BKK',
      'Transfer do hotelu (Grab lub airport transfer)',
      'Krótki spacer i szybki sen',
    ],
  },
  {
    date: 'Sb 6.06',
    base: 'Bangkok',
    title: 'Dzień Urodzinowy',
    tags: ['Urodziny', 'White Lotus', 'LEGO'],
    bullets: [
      'White Lotus Thai Cooking and Flower Garland Class in Bangkok (slot poranny)',
      'LEGO Store: Siam Paragon lub CentralWorld',
      'Mahanakhon SkyWalk na golden hour',
      'Kolacja urodzinowa',
    ],
  },
  {
    date: 'Nd 7.06',
    base: 'Bangkok -> Krabi',
    title: 'Transfer lotniczy',
    tags: ['Lot krajowy'],
    bullets: ['Lot BKK -> KBV', 'Transfer do Ao Nang', 'Luźny wieczór'],
  },
  {
    date: 'Pn 8.06',
    base: 'Krabi',
    title: 'Railay Beach',
    tags: ['Long-tail'],
    bullets: [
      'Long-tail boat z Ao Nang',
      'Plażowo-spacerowy dzień + opcjonalny viewpoint',
      'Powrót przed wieczorem',
    ],
  },
  {
    date: 'Wt 9.06',
    base: 'Krabi',
    title: 'James Bond Island',
    tags: ['Boat day'],
    bullets: [
      'Całodniowa wycieczka po Ao Phang Nga',
      'Wczesny start, powrót wieczorem',
    ],
  },
  {
    date: 'Śr 10.06',
    base: 'Krabi -> Phuket',
    title: 'Transfer ze stopem kulturowym',
    tags: ['Prywatny transfer'],
    bullets: [
      'Przejazd prywatnym autem',
      'Stop 45-60 min: Wat Phra Thong',
      'Check-in w Phuket',
    ],
  },
  {
    date: 'Czw 11.06',
    base: 'Phuket',
    title: 'Old Town + Aquarium',
    tags: ['Miasto'],
    bullets: [
      'Spacer po Phuket Old Town',
      'Popołudnie: Aquaria Phuket (Central Floresta)',
    ],
  },
  {
    date: 'Pt 12.06',
    base: 'Phuket',
    title: 'Koh Racha Yai day trip',
    tags: ['Speedboat', 'Snorkeling'],
    bullets: [
      'Hotel -> Chalong Pier -> speedboat RT',
      'Snorkeling + plaża',
      'Lekka kolacja po powrocie',
    ],
  },
  {
    date: 'Sb 13.06',
    base: 'Phuket',
    title: 'Dzień przedstartowy',
    tags: ['Taper', 'Regeneracja'],
    bullets: [
      'Lekki ruch 20-30 min',
      'Nawodnienie + przygotowanie rzeczy startowych',
      'Bez łodzi i bez długich przejazdów',
    ],
  },
  {
    date: 'Nd 14.06',
    base: 'Phuket',
    title: 'Półmaraton',
    tags: ['Race day'],
    bullets: [
      'Start wcześnie rano (Laguna Phuket Marathon weekend)',
      'Recovery, elektrolity, spokojny wieczór',
    ],
  },
  {
    date: 'Pn 15.06',
    base: 'Phuket -> Khao Sok',
    title: 'Transfer do natury',
    tags: ['Prywatny transfer'],
    bullets: [
      'Przejazd do strefy Khao Sok / Cheow Lan',
      'Boat trip krótki albo spokojny check-in',
    ],
  },
  {
    date: 'Wt 16.06',
    base: 'Khao Sok -> Donsak -> Samui',
    title: 'Auto + prom',
    tags: ['Ferry'],
    bullets: [
      'Przejazd do Donsak Pier',
      'Prom na Koh Samui',
      'Wieczorem tylko chill',
    ],
  },
  {
    date: 'Śr 17.06',
    base: 'Koh Samui',
    title: 'Luźny dzień',
    tags: ['Slow travel'],
    bullets: ['Lekki dzień bez pośpiechu'],
  },
  {
    date: 'Czw 18.06',
    base: 'Koh Samui',
    title: '10. Rocznica',
    tags: ['Rocznica'],
    bullets: ['Spokojny dzień', 'Romantyczna kolacja z opcjami vege'],
  },
  {
    date: 'Pt 19.06',
    base: 'Samui -> Phangan',
    title: 'Transfer promem',
    tags: ['Ferry'],
    bullets: ['Transfer do portu + prom', 'Check-in i odpoczynek'],
  },
  {
    date: 'Sb 20.06',
    base: 'Koh Phangan',
    title: 'Soft start',
    tags: ['Adaptacja'],
    bullets: ['Luźny rekonesans wyspy'],
  },
  {
    date: 'Nd 21.06',
    base: 'Koh Phangan',
    title: 'Ang Thong Marine Park',
    tags: ['Boat day', 'Kajak'],
    bullets: [
      'Day trip: boat + kajak + viewpoint hike',
      'Wybór najlepszego okna pogodowego',
    ],
  },
  {
    date: 'Pn 22.06',
    base: 'Koh Phangan',
    title: 'Hiking 1: Than Sadet',
    tags: ['Nature'],
    bullets: ['Trekking + wodospad', 'Wczesny start (chłodniej)'],
  },
  {
    date: 'Wt 23.06',
    base: 'Koh Phangan',
    title: 'Hiking 2: Phaeng area',
    tags: ['Nature'],
    bullets: ['Trekking + viewpoint', 'Wariant trasy wg warunków'],
  },
  {
    date: 'Śr 24.06',
    base: 'Koh Phangan',
    title: 'Bufor pogodowy',
    tags: ['Plan B'],
    bullets: ['Dzień rezerwowy na boat trip/hiking'],
  },
  {
    date: 'Czw 25.06',
    base: 'Koh Phangan',
    title: 'Free day',
    tags: ['Dowolny'],
    bullets: ['Snorkeling, relaks lub spa'],
  },
  {
    date: 'Pt 26.06',
    base: 'Phangan -> Samui -> Bangkok',
    title: 'Powrót na Bangkok',
    tags: ['Ferry + lot'],
    bullets: ['Prom + lot USM -> BKK', 'Lekki wieczór'],
  },
  {
    date: 'Sb 27.06',
    base: 'Bangkok',
    title: 'Domknięcie podróży',
    tags: ['Elastycznie'],
    bullets: ['Spacer, zakupy, ostatnie atrakcje'],
  },
  {
    date: 'Nd 28.06',
    base: 'Bangkok -> Warszawa',
    title: 'Wylot',
    tags: ['Powrót'],
    bullets: ['Wylot międzynarodowy BKK -> WAW'],
  },
]

const TRANSPORT_BETWEEN_BASES = [
  'BKK -> KBV: lot krajowy (najlepiej bez zmiany lotniska).',
  'Krabi -> Phuket: prywatny transfer autem + postój Wat Phra Thong.',
  'Phuket -> Khao Sok: prywatny transfer autem.',
  'Khao Sok -> Donsak -> Samui: auto + prom.',
  'Samui -> Phangan: prom.',
  'Phangan -> Samui -> BKK: prom + lot.',
]

const TRANSPORT_LOCAL = [
  'Bangkok: Grab + BTS/MRT.',
  'Krabi: Grab/taxi + long-tail do Railay.',
  'Phuket: Grab/Bolt + prebook transfery na bieg i do Chalong Pier.',
  'Samui / Phangan: taxi lub songthaew (ustalanie ceny przed startem).',
]

const TRANSFER_TIMES = [
  'Krabi -> Phuket: ~3-3.5h',
  'Phuket -> Khao Sok: ~2.5-3h',
  'Khao Sok -> Donsak: ~2.5-3h',
  'Donsak -> Samui (prom): ~1.5h',
  'Samui -> Phangan (prom): ~30-60 min',
]

const LINK_GROUPS = [
  {
    title: 'Bieg i aktywności',
    items: [
      {
        label: 'Laguna Phuket Marathon',
        href: 'https://phuketmarathon.com/registration/',
      },
      {
        label: 'White Lotus Thai Cooking and Flower Garland Class in Bangkok',
        href: 'https://www.klook.com/activity/161108-white-lotus-thai-cooking-class-in-bangkok/',
      },
      {
        label: 'Mahanakhon SkyWalk',
        href: 'https://kingpowermahanakhon.co.th/plan-your-visit/',
      },
      {
        label: 'Aquaria Phuket',
        href: 'https://www.aquaria-phuket.com/',
      },
    ],
  },
  {
    title: 'Promy i loty',
    items: [
      { label: 'Bangkok Airways Route Map', href: 'https://www.bangkok-airway.com/route-map' },
      { label: 'Raja Ferry', href: 'https://www.rajaferry.com/' },
      { label: 'Seatran Ferry', href: 'https://www.seatranferry.com/' },
      { label: 'Lomprayah Timetable', href: 'https://www.lomprayah.com/time-table' },
    ],
  },
  {
    title: 'Miejsca i planowanie trasy',
    items: [
      {
        label: 'Google Maps: pełna trasa przejazdu',
        href: 'https://www.google.com/maps/dir/Bangkok,+Thailand/Krabi,+Thailand/Phuket,+Thailand/Khao+Sok+National+Park,+Thailand/Donsak+Pier,+Surat+Thani,+Thailand/Koh+Samui,+Thailand/Koh+Phangan,+Thailand/Bangkok,+Thailand',
      },
      { label: 'Wat Phra Thong info', href: 'https://www.phuket101.net/wat-phra-thong/' },
      {
        label: 'Railay (TAT)',
        href: 'https://www.tourismthailand.org/Trip-Planner/Suggestion-Detail/ao-railay-railay-bay-tham-phra-nang-beach-phra-nang-cave-beach-thale-waek-separated-sea-ko-po-da-khao-khanap-nam-viewpoint-tha-pom-khlang-cave',
      },
      {
        label: 'Koh Phangan (TAT)',
        href: 'https://www.tourismthailand.org/Destinations/Provinces/Ko-Pha-ngan/358',
      },
    ],
  },
  {
    title: 'Pogoda i morze',
    items: [
      { label: 'TMD daily forecast', href: 'https://tmd.go.th/en/forecast/daily' },
      { label: 'TMD shipping forecast', href: 'https://tmd.go.th/en/forecast/shipping' },
      {
        label: 'Climate June Samui',
        href: 'https://weatherspark.com/m/112991/6/Average-Weather-in-June-in-Ko-Samui-Thailand',
      },
      {
        label: 'Climate June Phuket',
        href: 'https://weatherspark.com/m/112764/6/Average-Weather-in-June-in-Phuket-Thailand',
      },
    ],
  },
]

const OPERATING_RULES = [
  'Bez ciężkich transferów w dniu półmaratonu i rocznicy.',
  'Boat day planować wcześnie w pobycie danej bazy.',
  '13.06 pozostaje lekki (ochrona energii przed biegiem).',
  '18.06 bez dużych transferów (ochrona dnia rocznicowego).',
  'Przy promach i lotach zostawiaj minimum 2-3h buforu.',
]

const WEATHER_PLAN_B = [
  'Jeśli Koh Racha Yai (12.06) odwołane: przenieść na 13.06 rano tylko przy spokojnym morzu.',
  'Jeśli Ang Thong (21.06) odwołane: przenieść na 24.06 (dzień buforowy).',
  'Jeśli hiking wypada przez deszcz: zamienić z free day.',
]

const BOOKING_ITEMS = [
  { id: 'intl-flights', priority: 'Priorytet 1', text: 'Loty międzynarodowe WAW <-> BKK' },
  { id: 'domestic-bkk-kbv', priority: 'Priorytet 1', text: 'Lot krajowy BKK -> KBV' },
  { id: 'domestic-usm-bkk', priority: 'Priorytet 1', text: 'Lot USM -> BKK' },
  { id: 'accommodations', priority: 'Priorytet 1', text: 'Noclegi we wszystkich 7 bazach' },
  {
    id: 'lotus',
    priority: 'Priorytet 2',
    text: 'White Lotus Thai Cooking and Flower Garland Class in Bangkok (6.06 rano, opcja vege)',
  },
  { id: 'race', priority: 'Priorytet 2', text: 'Rejestracja półmaratonu + odbiór pakietu' },
  { id: 'bond-tour', priority: 'Priorytet 2', text: 'James Bond Island tour (Krabi)' },
  { id: 'racha-yai', priority: 'Priorytet 2', text: 'Koh Racha Yai day trip (speedboat)' },
  { id: 'ang-thong', priority: 'Priorytet 2', text: 'Ang Thong Marine Park day trip' },
  { id: 'cheow-lan', priority: 'Priorytet 2', text: 'Boat trip Cheow Lan / Khao Sok' },
  { id: 'transfer-krabi-phuket', priority: 'Priorytet 3', text: 'Transfer Krabi -> Phuket + Wat Phra Thong' },
  { id: 'transfer-phuket-khaosok', priority: 'Priorytet 3', text: 'Transfer Phuket -> Khao Sok' },
  { id: 'ferries', priority: 'Priorytet 3', text: 'Promy Donsak <-> Samui <-> Phangan' },
  { id: 'race-day-transfer', priority: 'Priorytet 3', text: 'Transfery hotel -> start -> hotel (14.06)' },
]

const STORAGE_KEY = 'thai-trip-checklist-v1'

function readChecklist() {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return {}
    }
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed ? parsed : {}
  } catch {
    return {}
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('plan')
  const [checklistState, setChecklistState] = useState(readChecklist)

  const groupedChecklist = useMemo(() => {
    return BOOKING_ITEMS.reduce((acc, item) => {
      acc[item.priority] ||= []
      acc[item.priority].push(item)
      return acc
    }, {})
  }, [])

  const completedCount = BOOKING_ITEMS.filter((item) => checklistState[item.id]).length

  const toggleChecklistItem = (id) => {
    setChecklistState((prev) => {
      const next = {
        ...prev,
        [id]: !prev[id],
      }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  return (
    <main className="app">
      <header className="hero-card">
        <p className="eyebrow">Thailand Pocket Planner</p>
        <h1>Tajlandia 5-28 czerwca 2026</h1>
        <p className="subtitle">
          Mobilny plan podróży: trasa, dzień po dniu, transport, kluczowe linki i checklista
          rezerwacji.
        </p>

        <div className="event-grid">
          {KEY_EVENTS.map((event) => (
            <article className="event-chip" key={event.title}>
              <p>{event.date}</p>
              <h3>{event.title}</h3>
              <small>{event.info}</small>
            </article>
          ))}
        </div>
      </header>

      <nav className="tabbar" aria-label="Sekcje planu podróży">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === 'plan' && (
        <section className="section-stack">
          <article className="card workshop-card">
            <h2>Warsztat Urodzinowy</h2>
            <h3>{LOTUS_WORKSHOP.name}</h3>
            <dl className="workshop-meta">
              <div>
                <dt>Data</dt>
                <dd>{LOTUS_WORKSHOP.date}</dd>
              </div>
              <div>
                <dt>Slot</dt>
                <dd>{LOTUS_WORKSHOP.slot}</dd>
              </div>
              <div>
                <dt>Dieta</dt>
                <dd>{LOTUS_WORKSHOP.diet}</dd>
              </div>
            </dl>
            <div className="workshop-actions">
              <a href={LOTUS_WORKSHOP.bookingUrl} target="_blank" rel="noreferrer">
                Rezerwacja warsztatu
              </a>
              <a href={LOTUS_WORKSHOP.mapsUrl} target="_blank" rel="noreferrer">
                Nawigacja do miejsca
              </a>
            </div>
            <ul className="clean-list">
              {LOTUS_WORKSHOP.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Mapa Trasy</h2>
            <a
              className="inline-link"
              href="https://www.google.com/maps/dir/Bangkok,+Thailand/Krabi,+Thailand/Phuket,+Thailand/Khao+Sok+National+Park,+Thailand/Donsak+Pier,+Surat+Thani,+Thailand/Koh+Samui,+Thailand/Koh+Phangan,+Thailand/Bangkok,+Thailand"
              target="_blank"
              rel="noreferrer"
            >
              Otwórz trasę w Google Maps
            </a>
            <img
              className="route-map"
              src="/maps/route-thailand.png"
              alt="Mapa trasy: Bangkok, Krabi, Phuket, Khao Sok, Donsak, Koh Samui, Koh Phangan, Bangkok"
            />
          </article>

          <article className="card">
            <h2>Bazy Noclegowe (23 noce)</h2>
            <div className="destination-grid">
              {DESTINATIONS.map((destination) => (
                <article key={destination.name} className="destination-card">
                  <img src={destination.photo} alt={destination.name} loading="lazy" />
                  <div>
                    <h3>{destination.name}</h3>
                    <p>{destination.dates}</p>
                    <p>{destination.nights}</p>
                    <small>{destination.focus}</small>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="card">
            <h2>Zasady Operacyjne</h2>
            <ul className="clean-list">
              {OPERATING_RULES.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <h3>Plan B Pogodowy</h3>
            <ul className="clean-list">
              {WEATHER_PLAN_B.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      {activeTab === 'days' && (
        <section className="section-stack">
          <article className="card">
            <h2>Plan Dzień po Dniu</h2>
            <div className="timeline">
              {DAY_BY_DAY.map((day) => (
                <details key={`${day.date}-${day.title}`}>
                  <summary>
                    <div>
                      <strong>{day.date}</strong>
                      <p>{day.base}</p>
                    </div>
                    <span>{day.title}</span>
                  </summary>

                  <div className="tags">
                    {day.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>

                  <ul className="clean-list">
                    {day.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </article>
        </section>
      )}

      {activeTab === 'transport' && (
        <section className="section-stack">
          <article className="card">
            <h2>Transport Między Bazami</h2>
            <ul className="clean-list">
              {TRANSPORT_BETWEEN_BASES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Transport Lokalny</h2>
            <ul className="clean-list">
              {TRANSPORT_LOCAL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Czasy Orientacyjne</h2>
            <ul className="clean-list">
              {TRANSFER_TIMES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      )}

      {activeTab === 'links' && (
        <section className="section-stack">
          {LINK_GROUPS.map((group) => (
            <article className="card" key={group.title}>
              <h2>{group.title}</h2>
              <ul className="link-list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}

      {activeTab === 'checklist' && (
        <section className="section-stack">
          <article className="card">
            <h2>Checklista Rezerwacji</h2>
            <p className="progress">Ukończone: {completedCount} / {BOOKING_ITEMS.length}</p>

            {Object.entries(groupedChecklist).map(([priority, items]) => (
              <section key={priority} className="check-group">
                <h3>{priority}</h3>
                {items.map((item) => (
                  <label key={item.id} className="check-item">
                    <input
                      type="checkbox"
                      checked={Boolean(checklistState[item.id])}
                      onChange={() => toggleChecklistItem(item.id)}
                    />
                    <span>{item.text}</span>
                  </label>
                ))}
              </section>
            ))}
          </article>
        </section>
      )}
    </main>
  )
}

export default App
