import { useEffect, useMemo, useState } from 'react'
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  CloudSun,
  Download,
  ExternalLink,
  Heart,
  Home,
  Luggage,
  MapPinned,
  Navigation,
  NotebookPen,
  Phone,
  Plane,
  Route,
  Search,
  Shield,
  Star,
  Utensils,
  Waves,
  Wifi,
  WifiOff,
} from 'lucide-react'
import {
  BOOKING_ITEMS,
  CALENDAR_EVENTS,
  DAY_BY_DAY,
  DESTINATIONS,
  DIET_CARD,
  EMERGENCY_CONTACTS,
  EMERGENCY_SOURCES,
  KEY_EVENTS,
  LINK_GROUPS,
  LOTUS_WORKSHOP,
  PACKING_ITEMS,
  TRANSFER_TIMES,
  TRANSPORT_BETWEEN_BASES,
  TRIP_END_ISO,
  TRIP_START_ISO,
  WEATHER_DECISIONS,
} from './data/trip'
import { downloadIcs } from './utils/calendar'
import './App.css'

const STORAGE_KEYS = {
  booking: 'thai-trip-booking-v2',
  vault: 'thai-trip-vault-v1',
  packing: 'thai-trip-packing-v1',
  notes: 'thai-trip-notes-v1',
  favorites: 'thai-trip-favorites-v1',
}

const TABS = [
  { id: 'today', label: 'Dzisiaj', Icon: Home },
  { id: 'days', label: 'Dni', Icon: CalendarDays },
  { id: 'route', label: 'Mapa', Icon: MapPinned },
  { id: 'vault', label: 'Vault', Icon: ClipboardCheck },
  { id: 'sos', label: 'SOS', Icon: Shield },
]

const weatherLabels = {
  low: 'spokojnie',
  medium: 'monitoruj',
  high: 'plan B gotowy',
}

function readStoredValue(key, fallback) {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => readStoredValue(key, fallback))

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function dateToLocalIso(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function daysBetween(fromIso, toIso) {
  const from = new Date(`${fromIso}T00:00:00`)
  const to = new Date(`${toIso}T00:00:00`)
  return Math.round((to - from) / 86_400_000)
}

function getTripPosition() {
  const todayIso = dateToLocalIso(new Date())
  const todayIndex = DAY_BY_DAY.findIndex((day) => day.iso === todayIso)

  if (todayIndex >= 0) {
    return {
      mode: 'in-trip',
      todayIso,
      activeDay: DAY_BY_DAY[todayIndex],
      nextDay: DAY_BY_DAY[todayIndex + 1],
      label: `Dzien ${todayIndex + 1} z ${DAY_BY_DAY.length}`,
    }
  }

  if (todayIso < TRIP_START_ISO) {
    return {
      mode: 'before',
      todayIso,
      activeDay: DAY_BY_DAY[0],
      nextDay: DAY_BY_DAY[1],
      label: `${daysBetween(todayIso, TRIP_START_ISO)} dni do wyjazdu`,
    }
  }

  if (todayIso > TRIP_END_ISO) {
    return {
      mode: 'after',
      todayIso,
      activeDay: DAY_BY_DAY.at(-1),
      nextDay: null,
      label: 'Podroz zakonczona',
    }
  }

  return {
    mode: 'between',
    todayIso,
    activeDay: DAY_BY_DAY[0],
    nextDay: DAY_BY_DAY[1],
    label: 'Plan gotowy',
  }
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    groups[item[key]] ||= []
    groups[item[key]].push(item)
    return groups
  }, {})
}

function App() {
  const [activeTab, setActiveTab] = useState('today')
  const [query, setQuery] = useState('')
  const [online, setOnline] = useState(() => navigator.onLine)
  const [bookingState, setBookingState] = useStoredState(STORAGE_KEYS.booking, {})
  const [vaultState, setVaultState] = useStoredState(STORAGE_KEYS.vault, {})
  const [packingState, setPackingState] = useStoredState(STORAGE_KEYS.packing, {})
  const [notesState, setNotesState] = useStoredState(STORAGE_KEYS.notes, {})
  const [favoritesState, setFavoritesState] = useStoredState(STORAGE_KEYS.favorites, {})

  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine)
    window.addEventListener('online', updateOnline)
    window.addEventListener('offline', updateOnline)
    return () => {
      window.removeEventListener('online', updateOnline)
      window.removeEventListener('offline', updateOnline)
    }
  }, [])

  const tripPosition = useMemo(() => getTripPosition(), [])
  const filteredDays = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      return DAY_BY_DAY
    }

    return DAY_BY_DAY.filter((day) =>
      [day.date, day.base, day.title, day.tags.join(' '), day.bullets.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  const checkedBookings = BOOKING_ITEMS.filter((item) => bookingState[item.id]).length
  const checkedPacking = PACKING_ITEMS.filter((item) => packingState[item.id]).length
  const bookingGroups = useMemo(() => groupBy(BOOKING_ITEMS, 'priority'), [])
  const packingGroups = useMemo(() => groupBy(PACKING_ITEMS, 'group'), [])

  const updateVault = (id, field, value) => {
    setVaultState((previous) => ({
      ...previous,
      [id]: {
        ...previous[id],
        [field]: value,
      },
    }))
  }

  return (
    <main className="app-shell">
      <StatusPill online={online} label={tripPosition.label} />

      <section className="hero-glass">
        <div>
          <p className="eyebrow">Thailand 2026</p>
          <h1>Wasz kieszonkowy plan podrozy</h1>
          <p>
            23 noce, bieg na Phuket, urodziny w Bangkoku i rocznica na Koh Samui. Wszystko
            pod reka, z zapisem lokalnym na telefonie.
          </p>
        </div>
        <button className="icon-action primary" type="button" onClick={() => downloadIcs(CALENDAR_EVENTS)}>
          <Download size={18} aria-hidden="true" />
          ICS
        </button>
      </section>

      <nav className="tabbar" aria-label="Sekcje aplikacji">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className={activeTab === id ? 'active' : ''}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {activeTab === 'today' && (
        <TodayView
          checkedBookings={checkedBookings}
          checkedPacking={checkedPacking}
          favoritesState={favoritesState}
          setActiveTab={setActiveTab}
          tripPosition={tripPosition}
        />
      )}

      {activeTab === 'days' && (
        <DaysView
          favoritesState={favoritesState}
          filteredDays={filteredDays}
          notesState={notesState}
          query={query}
          setFavoritesState={setFavoritesState}
          setNotesState={setNotesState}
          setQuery={setQuery}
        />
      )}

      {activeTab === 'route' && <RouteView />}

      {activeTab === 'vault' && (
        <VaultView
          bookingGroups={bookingGroups}
          bookingState={bookingState}
          checkedBookings={checkedBookings}
          checkedPacking={checkedPacking}
          packingGroups={packingGroups}
          packingState={packingState}
          setBookingState={setBookingState}
          setPackingState={setPackingState}
          updateVault={updateVault}
          vaultState={vaultState}
        />
      )}

      {activeTab === 'sos' && <SosView />}
    </main>
  )
}

function StatusPill({ online, label }) {
  const Icon = online ? Wifi : WifiOff

  return (
    <div className="status-strip">
      <span>{label}</span>
      <span>
        <Icon size={15} aria-hidden="true" />
        {online ? 'online' : 'offline'}
      </span>
    </div>
  )
}

function TodayView({ checkedBookings, checkedPacking, favoritesState, setActiveTab, tripPosition }) {
  const favoriteDays = DAY_BY_DAY.filter((day) => favoritesState[day.iso])

  return (
    <section className="screen-stack">
      <section className="glass-panel today-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Next up</p>
            <h2>{tripPosition.activeDay.title}</h2>
          </div>
          <span className={`risk-chip ${tripPosition.activeDay.weather}`}>
            <CloudSun size={15} aria-hidden="true" />
            {weatherLabels[tripPosition.activeDay.weather]}
          </span>
        </div>
        <p className="muted">
          {tripPosition.activeDay.date} · {tripPosition.activeDay.base}
        </p>
        <ul className="clean-list">
          {tripPosition.activeDay.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="quick-actions">
          <button type="button" onClick={() => setActiveTab('days')}>
            <CalendarDays size={17} aria-hidden="true" />
            Dzien po dniu
          </button>
          <button type="button" onClick={() => setActiveTab('route')}>
            <Navigation size={17} aria-hidden="true" />
            Nawigacje
          </button>
        </div>
      </section>

      <section className="metrics-grid">
        <Metric icon={Plane} label="Bazy" value="7" />
        <Metric icon={ClipboardCheck} label="Rezerwacje" value={`${checkedBookings}/${BOOKING_ITEMS.length}`} />
        <Metric icon={Luggage} label="Pakowanie" value={`${checkedPacking}/${PACKING_ITEMS.length}`} />
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Daty, ktore chronimy</h2>
          <CalendarDays size={19} aria-hidden="true" />
        </div>
        <div className="event-list">
          {KEY_EVENTS.map((event) => (
            <div className="event-row" key={event.title}>
              <strong>{event.date}</strong>
              <div>
                <h3>{event.title}</h3>
                <p>{event.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel workshop-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Urodziny</p>
            <h2>{LOTUS_WORKSHOP.name}</h2>
          </div>
          <Utensils size={20} aria-hidden="true" />
        </div>
        <div className="meta-grid">
          <span>{LOTUS_WORKSHOP.date}</span>
          <span>{LOTUS_WORKSHOP.slot}</span>
          <span>{LOTUS_WORKSHOP.diet}</span>
        </div>
        <div className="quick-actions">
          <a href={LOTUS_WORKSHOP.bookingUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={17} aria-hidden="true" />
            Rezerwacja
          </a>
          <a href={LOTUS_WORKSHOP.mapsUrl} target="_blank" rel="noreferrer">
            <MapPinned size={17} aria-hidden="true" />
            Mapa
          </a>
        </div>
      </section>

      {favoriteDays.length > 0 && (
        <section className="glass-panel">
          <div className="panel-heading">
            <h2>Zapisane dni</h2>
            <Heart size={19} aria-hidden="true" />
          </div>
          <div className="compact-list">
            {favoriteDays.map((day) => (
              <span key={day.iso}>
                {day.date} · {day.title}
              </span>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="metric glass-panel">
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function DaysView({
  favoritesState,
  filteredDays,
  notesState,
  query,
  setFavoritesState,
  setNotesState,
  setQuery,
}) {
  return (
    <section className="screen-stack">
      <label className="search-box">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Szukaj: prom, bieg, Railay..."
        />
      </label>

      <div className="day-list">
        {filteredDays.map((day) => (
          <details className="glass-panel day-panel" key={day.iso}>
            <summary>
              <div>
                <span>{day.date}</span>
                <h2>{day.title}</h2>
                <p>{day.base}</p>
              </div>
              <button
                aria-label="Oznacz dzien"
                className={favoritesState[day.iso] ? 'round-icon active' : 'round-icon'}
                type="button"
                onClick={(event) => {
                  event.preventDefault()
                  setFavoritesState((previous) => ({ ...previous, [day.iso]: !previous[day.iso] }))
                }}
              >
                <Star size={17} aria-hidden="true" />
              </button>
            </summary>

            <div className="tag-row">
              {day.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className={`risk-chip ${day.weather}`}>{weatherLabels[day.weather]}</span>
            </div>

            <ul className="clean-list">
              {day.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="link-grid">
              {day.nav.map((item) => (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  <Navigation size={16} aria-hidden="true" />
                  {item.label}
                </a>
              ))}
            </div>

            <label className="note-field">
              <NotebookPen size={17} aria-hidden="true" />
              <textarea
                value={notesState[day.iso] || ''}
                onChange={(event) =>
                  setNotesState((previous) => ({ ...previous, [day.iso]: event.target.value }))
                }
                placeholder="Notatki: godzina pickup, hotel, numer rezerwacji..."
              />
            </label>
          </details>
        ))}
      </div>
    </section>
  )
}

function RouteView() {
  return (
    <section className="screen-stack">
      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Trasa po kolei</h2>
          <Route size={20} aria-hidden="true" />
        </div>
        <a
          className="map-link"
          href="https://www.google.com/maps/dir/Bangkok,+Thailand/Krabi,+Thailand/Phuket,+Thailand/Khao+Sok+National+Park,+Thailand/Donsak+Pier,+Surat+Thani,+Thailand/Koh+Samui,+Thailand/Koh+Phangan,+Thailand/Bangkok,+Thailand"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/maps/route-thailand.png"
            alt="Mapa trasy Bangkok, Krabi, Phuket, Khao Sok, Donsak, Koh Samui, Koh Phangan, Bangkok"
          />
        </a>
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Bazy</h2>
          <MapPinned size={20} aria-hidden="true" />
        </div>
        <div className="destination-strip">
          {DESTINATIONS.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <img src={destination.photo} alt={`Widok z ${destination.name}`} loading="lazy" />
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.dates}</p>
                <span>{destination.nights}</span>
                <small>{destination.focus}</small>
                <a className="photo-credit" href={destination.photoSource} target="_blank" rel="noreferrer">
                  foto: {destination.photoCredit}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Transport</h2>
          <Plane size={20} aria-hidden="true" />
        </div>
        <ul className="clean-list">
          {TRANSPORT_BETWEEN_BASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="compact-list">
          {TRANSFER_TIMES.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Boat days i pogoda</h2>
          <Waves size={20} aria-hidden="true" />
        </div>
        <div className="decision-grid">
          {WEATHER_DECISIONS.map((decision) => (
            <article className="decision-row" key={decision.title}>
              <strong>{decision.date}</strong>
              <div>
                <h3>{decision.title}</h3>
                <p>{decision.trigger}</p>
                <span>{decision.action}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function VaultView({
  bookingGroups,
  bookingState,
  checkedBookings,
  checkedPacking,
  packingGroups,
  packingState,
  setBookingState,
  setPackingState,
  updateVault,
  vaultState,
}) {
  return (
    <section className="screen-stack">
      <section className="metrics-grid">
        <Metric icon={ClipboardCheck} label="Rezerwacje" value={`${checkedBookings}/${BOOKING_ITEMS.length}`} />
        <Metric icon={Luggage} label="Pakowanie" value={`${checkedPacking}/${PACKING_ITEMS.length}`} />
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Reservation vault</h2>
          <ClipboardCheck size={20} aria-hidden="true" />
        </div>
        {Object.entries(bookingGroups).map(([priority, items]) => (
          <details className="vault-group" key={priority} open={priority === 'Priorytet 1'}>
            <summary>{priority}</summary>
            {items.map((item) => (
              <article className="vault-row" key={item.id}>
                <label className="check-line">
                  <input
                    type="checkbox"
                    checked={Boolean(bookingState[item.id])}
                    onChange={() => setBookingState((previous) => ({ ...previous, [item.id]: !previous[item.id] }))}
                  />
                  <span>{bookingState[item.id] ? <CheckCircle2 size={18} /> : <Circle size={18} />}</span>
                  {item.text}
                </label>
                <div className="vault-inputs">
                  <input
                    value={vaultState[item.id]?.ref || ''}
                    onChange={(event) => updateVault(item.id, 'ref', event.target.value)}
                    placeholder={item.hint}
                  />
                  <input
                    value={vaultState[item.id]?.contact || ''}
                    onChange={(event) => updateVault(item.id, 'contact', event.target.value)}
                    placeholder="kontakt / pickup / notatka"
                  />
                </div>
              </article>
            ))}
          </details>
        ))}
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Packing + health</h2>
          <Luggage size={20} aria-hidden="true" />
        </div>
        {Object.entries(packingGroups).map(([group, items]) => (
          <div className="packing-group" key={group}>
            <h3>{group}</h3>
            {items.map((item) => (
              <label className="check-line" key={item.id}>
                <input
                  type="checkbox"
                  checked={Boolean(packingState[item.id])}
                  onChange={() => setPackingState((previous) => ({ ...previous, [item.id]: !previous[item.id] }))}
                />
                <span>{packingState[item.id] ? <CheckCircle2 size={18} /> : <Circle size={18} />}</span>
                {item.text}
              </label>
            ))}
          </div>
        ))}
      </section>
    </section>
  )
}

function SosView() {
  return (
    <section className="screen-stack">
      <section className="glass-panel sos-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Thailand emergency</p>
            <h2>Numery alarmowe</h2>
          </div>
          <Shield size={21} aria-hidden="true" />
        </div>
        <div className="sos-grid">
          {EMERGENCY_CONTACTS.map((contact) => (
            <a className="sos-call" href={`tel:${contact.number}`} key={contact.number}>
              <Phone size={19} aria-hidden="true" />
              <strong>{contact.number}</strong>
              <span>{contact.label}</span>
              <small>{contact.note}</small>
            </a>
          ))}
        </div>
        <div className="source-list">
          {EMERGENCY_SOURCES.map((source) => (
            <a className="source-link" href={source.href} key={source.href} target="_blank" rel="noreferrer">
              <ExternalLink size={16} aria-hidden="true" />
              {source.label}
            </a>
          ))}
        </div>
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>{DIET_CARD.title}</h2>
          <Utensils size={20} aria-hidden="true" />
        </div>
        <p className="diet-card">{DIET_CARD.text}</p>
      </section>

      <section className="glass-panel">
        <div className="panel-heading">
          <h2>Linki robocze</h2>
          <ExternalLink size={20} aria-hidden="true" />
        </div>
        <div className="link-groups">
          {LINK_GROUPS.map((group) => (
            <details className="link-group" key={group.title}>
              <summary>{group.title}</summary>
              <div className="link-grid">
                {group.items.map((item) => (
                  <a href={item.href} key={item.href} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} aria-hidden="true" />
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-panel caution-panel">
        <AlertTriangle size={20} aria-hidden="true" />
        <p>
          Dodaj w vault: numer polisy, kontakt assistance, adresy hoteli, zdjecia paszportu offline i
          kontakty do transferow.
        </p>
      </section>
    </section>
  )
}

export default App
