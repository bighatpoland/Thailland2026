export const TRIP_START_ISO = '2026-06-05'
export const TRIP_END_ISO = '2026-06-28'

export const DESTINATIONS = [
  {
    name: 'Bangkok',
    dates: '5-7.06 i 26-28.06',
    nights: '4 noce lacznie',
    photo: '/photos/bangkok.jpg',
    focus: 'Urodziny: White Lotus + LEGO + SkyWalk + kolacja',
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
    focus: 'Old Town, Aquarium, Koh Racha Yai, polmaraton 14.06',
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
    focus: 'Rocznica 18.06: spokojny dzien + kolacja',
  },
  {
    name: 'Koh Phangan',
    dates: '20-26.06',
    nights: '6 nocy',
    photo: '/photos/phangan.jpg',
    focus: 'Ang Thong, Than Sadet, Phaeng, dzien buforowy',
  },
]

export const KEY_EVENTS = [
  {
    date: '6.06',
    title: 'Urodziny',
    info: 'White Lotus Thai Cooking and Flower Garland Class + LEGO + SkyWalk + kolacja',
  },
  { date: '14.06', title: 'Polmaraton', info: 'Phuket, recovery po starcie' },
  { date: '18.06', title: '10. rocznica', info: 'Koh Samui, romantyczna kolacja' },
]

export const LOTUS_WORKSHOP = {
  name: 'White Lotus Thai Cooking and Flower Garland Class in Bangkok',
  date: 'Sobota, 6.06.2026',
  slot: 'Preferowany slot poranny',
  diet: 'Potwierdzic wersje wegetarianska przy rezerwacji',
  bookingUrl: 'https://www.klook.com/activity/161108-white-lotus-thai-cooking-class-in-bangkok/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=White+Lotus+Thai+Cooking+and+Flower+Garland+Class+in+Bangkok',
  notes: [
    'Glowny punkt dnia urodzinowego w Bangkoku.',
    'Po warsztacie: LEGO Store -> Mahanakhon SkyWalk -> kolacja.',
    'Potwierdzic godzine startu i punkt spotkania dzien wczesniej.',
  ],
}

export const DAY_BY_DAY = [
  {
    iso: '2026-06-05',
    date: 'Pt 5.06',
    base: 'Bangkok',
    title: 'Przylot i regeneracja',
    tags: ['Przylot', 'Lekko'],
    weather: 'low',
    bullets: ['Przylot WAW -> BKK', 'Transfer do hotelu', 'Krotki spacer i szybki sen'],
    nav: [
      {
        label: 'BKK airport -> hotel',
        href: 'https://www.google.com/maps/search/?api=1&query=Suvarnabhumi+Airport+to+Bangkok+hotel',
      },
    ],
  },
  {
    iso: '2026-06-06',
    date: 'Sb 6.06',
    base: 'Bangkok',
    title: 'Dzien Urodzinowy',
    tags: ['Urodziny', 'White Lotus', 'LEGO'],
    weather: 'low',
    bullets: [
      'White Lotus Thai Cooking and Flower Garland Class in Bangkok',
      'LEGO Store: Siam Paragon lub CentralWorld',
      'Mahanakhon SkyWalk na golden hour',
      'Kolacja urodzinowa',
    ],
    nav: [
      { label: 'White Lotus', href: LOTUS_WORKSHOP.mapsUrl },
      {
        label: 'LEGO Siam Paragon',
        href: 'https://www.google.com/maps/search/?api=1&query=LEGO+Store+Siam+Paragon+Bangkok',
      },
      {
        label: 'Mahanakhon SkyWalk',
        href: 'https://www.google.com/maps/search/?api=1&query=Mahanakhon+SkyWalk+Bangkok',
      },
    ],
  },
  {
    iso: '2026-06-07',
    date: 'Nd 7.06',
    base: 'Bangkok -> Krabi',
    title: 'Transfer lotniczy',
    tags: ['Lot krajowy'],
    weather: 'medium',
    bullets: ['Lot BKK -> KBV', 'Transfer do Ao Nang', 'Luzny wieczor'],
    nav: [
      {
        label: 'Krabi Airport -> Ao Nang',
        href: 'https://www.google.com/maps/dir/Krabi+Airport/Ao+Nang,+Krabi',
      },
    ],
  },
  {
    iso: '2026-06-08',
    date: 'Pn 8.06',
    base: 'Krabi',
    title: 'Railay Beach',
    tags: ['Long-tail'],
    weather: 'medium',
    bullets: ['Long-tail z Ao Nang', 'Railay Beach + opcjonalny viewpoint', 'Powrot przed wieczorem'],
    nav: [
      { label: 'Ao Nang Pier', href: 'https://www.google.com/maps/search/?api=1&query=Ao+Nang+Longtail+Boat+Service' },
      { label: 'Railay Beach', href: 'https://www.google.com/maps/search/?api=1&query=Railay+Beach+Krabi' },
    ],
  },
  {
    iso: '2026-06-09',
    date: 'Wt 9.06',
    base: 'Krabi',
    title: 'James Bond Island',
    tags: ['Boat day'],
    weather: 'high',
    bullets: ['Calodzienna wycieczka po Ao Phang Nga', 'Wczesny start, powrot wieczorem'],
    nav: [
      { label: 'James Bond Island', href: 'https://www.google.com/maps/search/?api=1&query=James+Bond+Island+Thailand' },
    ],
  },
  {
    iso: '2026-06-10',
    date: 'Sr 10.06',
    base: 'Krabi -> Phuket',
    title: 'Transfer ze stopem kulturowym',
    tags: ['Prywatny transfer'],
    weather: 'medium',
    bullets: ['Przejazd autem', 'Stop 45-60 min: Wat Phra Thong', 'Check-in w Phuket'],
    nav: [
      { label: 'Krabi -> Wat Phra Thong -> Phuket', href: 'https://www.google.com/maps/dir/Krabi,+Thailand/Wat+Phra+Thong/Phuket,+Thailand' },
    ],
  },
  {
    iso: '2026-06-11',
    date: 'Czw 11.06',
    base: 'Phuket',
    title: 'Old Town + Aquarium',
    tags: ['Miasto'],
    weather: 'low',
    bullets: ['Spacer po Phuket Old Town', 'Popoludnie: Aquaria Phuket'],
    nav: [
      { label: 'Phuket Old Town', href: 'https://www.google.com/maps/search/?api=1&query=Phuket+Old+Town' },
      { label: 'Aquaria Phuket', href: 'https://www.google.com/maps/search/?api=1&query=Aquaria+Phuket' },
    ],
  },
  {
    iso: '2026-06-12',
    date: 'Pt 12.06',
    base: 'Phuket',
    title: 'Koh Racha Yai day trip',
    tags: ['Speedboat', 'Snorkeling'],
    weather: 'high',
    bullets: ['Hotel -> Chalong Pier -> speedboat RT', 'Snorkeling + plaza', 'Lekka kolacja'],
    nav: [
      { label: 'Chalong Pier', href: 'https://www.google.com/maps/search/?api=1&query=Chalong+Pier+Phuket' },
      { label: 'Koh Racha Yai', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Racha+Yai' },
    ],
  },
  {
    iso: '2026-06-13',
    date: 'Sb 13.06',
    base: 'Phuket',
    title: 'Dzien przedstartowy',
    tags: ['Taper', 'Regeneracja'],
    weather: 'low',
    bullets: ['Lekki ruch 20-30 min', 'Nawodnienie + rzeczy startowe', 'Bez lodzi i dlugich przejazdow'],
    nav: [
      { label: 'Laguna Phuket race area', href: 'https://www.google.com/maps/search/?api=1&query=Laguna+Phuket+Marathon' },
    ],
  },
  {
    iso: '2026-06-14',
    date: 'Nd 14.06',
    base: 'Phuket',
    title: 'Polmaraton',
    tags: ['Race day'],
    weather: 'medium',
    bullets: ['Start wcześnie rano', 'Recovery, elektrolity, spokojny wieczor'],
    nav: [
      { label: 'Race start', href: 'https://www.google.com/maps/search/?api=1&query=Laguna+Phuket+Marathon' },
    ],
  },
  {
    iso: '2026-06-15',
    date: 'Pn 15.06',
    base: 'Phuket -> Khao Sok',
    title: 'Transfer do natury',
    tags: ['Prywatny transfer'],
    weather: 'medium',
    bullets: ['Przejazd do Khao Sok / Cheow Lan', 'Krotszy boat trip albo spokojny check-in'],
    nav: [
      { label: 'Phuket -> Khao Sok', href: 'https://www.google.com/maps/dir/Phuket,+Thailand/Khao+Sok+National+Park' },
    ],
  },
  {
    iso: '2026-06-16',
    date: 'Wt 16.06',
    base: 'Khao Sok -> Donsak -> Samui',
    title: 'Auto + prom',
    tags: ['Ferry'],
    weather: 'medium',
    bullets: ['Przejazd do Donsak Pier', 'Prom na Koh Samui', 'Wieczorem chill'],
    nav: [
      { label: 'Khao Sok -> Donsak Pier', href: 'https://www.google.com/maps/dir/Khao+Sok+National+Park/Donsak+Pier' },
      { label: 'Koh Samui', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Samui' },
    ],
  },
  {
    iso: '2026-06-17',
    date: 'Sr 17.06',
    base: 'Koh Samui',
    title: 'Luzny dzien',
    tags: ['Slow travel'],
    weather: 'low',
    bullets: ['Lekki dzien bez pospiechu'],
    nav: [{ label: 'Koh Samui', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Samui' }],
  },
  {
    iso: '2026-06-18',
    date: 'Czw 18.06',
    base: 'Koh Samui',
    title: '10. Rocznica',
    tags: ['Rocznica'],
    weather: 'low',
    bullets: ['Spokojny dzien', 'Romantyczna kolacja z opcjami vege'],
    nav: [{ label: 'Dinner ideas', href: 'https://www.google.com/maps/search/?api=1&query=romantic+vegetarian+dinner+Koh+Samui' }],
  },
  {
    iso: '2026-06-19',
    date: 'Pt 19.06',
    base: 'Samui -> Phangan',
    title: 'Transfer promem',
    tags: ['Ferry'],
    weather: 'medium',
    bullets: ['Transfer do portu + prom', 'Check-in i odpoczynek'],
    nav: [
      { label: 'Samui -> Phangan ferry', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Samui+to+Koh+Phangan+ferry' },
    ],
  },
  {
    iso: '2026-06-20',
    date: 'Sb 20.06',
    base: 'Koh Phangan',
    title: 'Soft start',
    tags: ['Adaptacja'],
    weather: 'low',
    bullets: ['Luzny rekonesans wyspy'],
    nav: [{ label: 'Koh Phangan', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Phangan' }],
  },
  {
    iso: '2026-06-21',
    date: 'Nd 21.06',
    base: 'Koh Phangan',
    title: 'Ang Thong Marine Park',
    tags: ['Boat day', 'Kajak'],
    weather: 'high',
    bullets: ['Boat + kajak + viewpoint hike', 'Realizowac przy najlepszym oknie pogodowym'],
    nav: [{ label: 'Ang Thong Marine Park', href: 'https://www.google.com/maps/search/?api=1&query=Ang+Thong+Marine+Park' }],
  },
  {
    iso: '2026-06-22',
    date: 'Pn 22.06',
    base: 'Koh Phangan',
    title: 'Hiking 1: Than Sadet',
    tags: ['Nature'],
    weather: 'medium',
    bullets: ['Trekking + wodospad', 'Wczesny start'],
    nav: [{ label: 'Than Sadet Waterfall', href: 'https://www.google.com/maps/search/?api=1&query=Than+Sadet+Waterfall+Koh+Phangan' }],
  },
  {
    iso: '2026-06-23',
    date: 'Wt 23.06',
    base: 'Koh Phangan',
    title: 'Hiking 2: Phaeng area',
    tags: ['Nature'],
    weather: 'medium',
    bullets: ['Trekking + viewpoint', 'Wariant trasy wg warunkow'],
    nav: [{ label: 'Phaeng Waterfall', href: 'https://www.google.com/maps/search/?api=1&query=Phaeng+Waterfall+Koh+Phangan' }],
  },
  {
    iso: '2026-06-24',
    date: 'Sr 24.06',
    base: 'Koh Phangan',
    title: 'Bufor pogodowy',
    tags: ['Plan B'],
    weather: 'medium',
    bullets: ['Dzien rezerwowy na boat trip lub hike'],
    nav: [{ label: 'Plan B nearby', href: 'https://www.google.com/maps/search/?api=1&query=spa+cafe+Koh+Phangan' }],
  },
  {
    iso: '2026-06-25',
    date: 'Czw 25.06',
    base: 'Koh Phangan',
    title: 'Free day',
    tags: ['Dowolny'],
    weather: 'low',
    bullets: ['Snorkeling, relaks albo spa'],
    nav: [{ label: 'Koh Phangan snorkeling', href: 'https://www.google.com/maps/search/?api=1&query=snorkeling+Koh+Phangan' }],
  },
  {
    iso: '2026-06-26',
    date: 'Pt 26.06',
    base: 'Phangan -> Samui -> Bangkok',
    title: 'Powrot na Bangkok',
    tags: ['Ferry + lot'],
    weather: 'medium',
    bullets: ['Prom + lot USM -> BKK', 'Lekki wieczor'],
    nav: [
      { label: 'Phangan -> Samui ferry', href: 'https://www.google.com/maps/search/?api=1&query=Koh+Phangan+to+Koh+Samui+ferry' },
      { label: 'Samui Airport', href: 'https://www.google.com/maps/search/?api=1&query=Samui+Airport' },
    ],
  },
  {
    iso: '2026-06-27',
    date: 'Sb 27.06',
    base: 'Bangkok',
    title: 'Domkniecie podrozy',
    tags: ['Elastycznie'],
    weather: 'low',
    bullets: ['Spacer, zakupy, ostatnie atrakcje'],
    nav: [{ label: 'Bangkok last day', href: 'https://www.google.com/maps/search/?api=1&query=Bangkok+shopping+vegetarian+restaurant' }],
  },
  {
    iso: '2026-06-28',
    date: 'Nd 28.06',
    base: 'Bangkok -> Warszawa',
    title: 'Wylot',
    tags: ['Powrot'],
    weather: 'medium',
    bullets: ['Wylot miedzynarodowy BKK -> WAW'],
    nav: [{ label: 'Bangkok -> BKK airport', href: 'https://www.google.com/maps/dir/Bangkok/Suvarnabhumi+Airport' }],
  },
]

export const TRANSPORT_BETWEEN_BASES = [
  'BKK -> KBV: lot krajowy, najlepiej bez zmiany lotniska.',
  'Krabi -> Phuket: prywatny transfer autem + Wat Phra Thong.',
  'Phuket -> Khao Sok: prywatny transfer autem.',
  'Khao Sok -> Donsak -> Samui: auto + prom.',
  'Samui -> Phangan: prom.',
  'Phangan -> Samui -> BKK: prom + lot.',
]

export const TRANSFER_TIMES = [
  'Krabi -> Phuket: ok. 3-3.5h',
  'Phuket -> Khao Sok: ok. 2.5-3h',
  'Khao Sok -> Donsak: ok. 2.5-3h',
  'Donsak -> Samui prom: ok. 1.5h',
  'Samui -> Phangan prom: ok. 30-60 min',
]

export const LINK_GROUPS = [
  {
    title: 'Bieg i aktywnosci',
    items: [
      { label: 'Laguna Phuket Marathon', href: 'https://phuketmarathon.com/registration/' },
      { label: 'White Lotus class', href: LOTUS_WORKSHOP.bookingUrl },
      { label: 'Mahanakhon SkyWalk', href: 'https://kingpowermahanakhon.co.th/plan-your-visit/' },
      { label: 'Aquaria Phuket', href: 'https://www.aquaria-phuket.com/' },
    ],
  },
  {
    title: 'Promy i loty',
    items: [
      { label: 'Bangkok Airways', href: 'https://www.bangkok-airway.com/route-map' },
      { label: 'Raja Ferry', href: 'https://www.rajaferry.com/' },
      { label: 'Seatran Ferry', href: 'https://www.seatranferry.com/' },
      { label: 'Lomprayah', href: 'https://www.lomprayah.com/time-table' },
    ],
  },
  {
    title: 'Pogoda i morze',
    items: [
      { label: 'TMD daily forecast', href: 'https://tmd.go.th/en/forecast/daily' },
      { label: 'TMD shipping forecast', href: 'https://tmd.go.th/en/forecast/shipping' },
      { label: 'June Samui climate', href: 'https://weatherspark.com/m/112991/6/Average-Weather-in-June-in-Ko-Samui-Thailand' },
      { label: 'June Phuket climate', href: 'https://weatherspark.com/m/112764/6/Average-Weather-in-June-in-Phuket-Thailand' },
    ],
  },
]

export const WEATHER_DECISIONS = [
  {
    title: 'Koh Racha Yai',
    date: '12.06',
    trigger: 'fale, wiatr, opoznienie speedboatu',
    action: 'przeniesc na 13.06 rano tylko przy spokojnym morzu',
  },
  {
    title: 'Ang Thong',
    date: '21.06',
    trigger: 'deszcz, niska widocznosc, odwolane lodzie',
    action: 'przeniesc na 24.06, czyli dzien buforowy',
  },
  {
    title: 'Hiking Phangan',
    date: '22-23.06',
    trigger: 'ulewa, sliskie zejscia, niski komfort po burzy',
    action: 'zamienic z free day, spa albo krotkim spacerem',
  },
  {
    title: 'Prom + lot do BKK',
    date: '26.06',
    trigger: 'opoznienia promow lub silny wiatr',
    action: 'wybrac wczesniejszy prom i zostawic duzy bufor przed USM',
  },
]

export const BOOKING_ITEMS = [
  { id: 'intl-flights', priority: 'Priorytet 1', text: 'Loty WAW <-> BKK', hint: 'PNR, godziny, terminale' },
  { id: 'domestic-bkk-kbv', priority: 'Priorytet 1', text: 'Lot BKK -> KBV', hint: 'numer lotu, bagaz, lotnisko' },
  { id: 'domestic-usm-bkk', priority: 'Priorytet 1', text: 'Lot USM -> BKK', hint: 'bufor po promie' },
  { id: 'accommodations', priority: 'Priorytet 1', text: 'Noclegi we wszystkich bazach', hint: 'adresy, telefony, check-in' },
  { id: 'lotus', priority: 'Priorytet 2', text: 'White Lotus Thai Cooking and Flower Garland Class', hint: 'slot, punkt spotkania, dieta vege' },
  { id: 'race', priority: 'Priorytet 2', text: 'Laguna Phuket Marathon', hint: 'pakiet startowy, start, transport' },
  { id: 'bond-tour', priority: 'Priorytet 2', text: 'James Bond Island tour', hint: 'pickup, operator, plan B' },
  { id: 'racha-yai', priority: 'Priorytet 2', text: 'Koh Racha Yai speedboat', hint: 'Chalong Pier, pogoda, reschedule' },
  { id: 'ang-thong', priority: 'Priorytet 2', text: 'Ang Thong day trip', hint: 'pickup, kajaki, viewpoint' },
  { id: 'cheow-lan', priority: 'Priorytet 2', text: 'Cheow Lan boat', hint: 'pier, godzina, wariant trasy' },
  { id: 'private-transfers', priority: 'Priorytet 3', text: 'Prywatne transfery drogowe', hint: 'driver contact, godziny' },
  { id: 'ferries', priority: 'Priorytet 3', text: 'Promy Donsak / Samui / Phangan', hint: 'pier, godzina, bufor' },
  { id: 'insurance', priority: 'Priorytet 3', text: 'Ubezpieczenie + assistance', hint: 'polisa, telefon, zakres sportowy' },
]

export const PACKING_ITEMS = [
  { id: 'passport', group: 'Dokumenty', text: 'Paszport + kopia offline' },
  { id: 'insurance', group: 'Dokumenty', text: 'Polisa i numer assistance' },
  { id: 'cash-split', group: 'Dokumenty', text: 'Gotowka rozdzielona na dwie osoby' },
  { id: 'race-kit', group: 'Bieg', text: 'Buty, zegarek, pas, numer startowy' },
  { id: 'electrolytes', group: 'Bieg', text: 'Elektrolity i zel/odzywka na recovery' },
  { id: 'rain-shell', group: 'Pogoda', text: 'Lekka kurtka przeciwdeszczowa' },
  { id: 'dry-bag', group: 'Pogoda', text: 'Dry bag na boat days' },
  { id: 'repellent', group: 'Zdrowie', text: 'Repelent, SPF, apteczka, leki na prom' },
]

export const EMERGENCY_CONTACTS = [
  { label: 'Tourist Police', number: '1155', note: 'English-speaking tourist help' },
  { label: 'Emergency / Police', number: '191', note: 'urgent emergency line' },
  { label: 'Medical EMS', number: '1669', note: 'ambulance / medical emergency' },
  { label: 'Fire', number: '199', note: 'fire emergency' },
  { label: 'TAT tourist assistance', number: '1672', note: 'tourism information and support' },
]

export const EMERGENCY_SOURCES = [
  {
    label: 'Tourist assistance numbers',
    href: 'https://thailand.go.th/issue-focus-detail/essential-tourist-assistance-contact-numbers-to-ensure-a-smooth-and-safe-journey?hl=en',
  },
  {
    label: 'Emergency telephone list',
    href: 'https://www.thailand.go.th/public/event-detail/003_003',
  },
]

export const DIET_CARD = {
  title: 'Vegetarian card',
  text: 'I am vegetarian. I do not eat meat, fish, seafood, chicken stock, fish sauce or oyster sauce. Eggs and dairy are OK.',
}

export const CALENDAR_EVENTS = [
  {
    title: 'Birthday: White Lotus + LEGO + SkyWalk',
    startDate: '20260606',
    endDate: '20260607',
    location: 'Bangkok, Thailand',
    description: 'White Lotus Thai Cooking and Flower Garland Class, LEGO Store, Mahanakhon SkyWalk and dinner.',
  },
  {
    title: 'Phuket Half Marathon',
    startDate: '20260614',
    endDate: '20260615',
    location: 'Laguna Phuket, Thailand',
    description: 'Race day and recovery.',
  },
  {
    title: '10th Anniversary Dinner',
    startDate: '20260618',
    endDate: '20260619',
    location: 'Koh Samui, Thailand',
    description: 'Quiet day and romantic dinner.',
  },
  {
    title: 'Ang Thong Marine Park window',
    startDate: '20260621',
    endDate: '20260622',
    location: 'Koh Phangan / Ang Thong, Thailand',
    description: 'Boat, kayak and viewpoint hike. Backup date: 24 June.',
  },
]
