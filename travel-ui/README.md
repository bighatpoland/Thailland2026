# Thailand Travel Companion (React)

Mobilna aplikacja React z Waszym planem podróży do Tajlandii (5-28 czerwca 2026):
- mapa trasy,
- plan dzień po dniu,
- transport między miejscami,
- szybkie linki do rezerwacji,
- checklista rezerwacji zapisywana lokalnie.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Aplikacja domyślnie uruchamia się pod adresem:
- `http://localhost:5173`

## Użycie na telefonie (ta sama sieć Wi-Fi)

```bash
npm run dev -- --host
```

Potem otwórz na telefonie adres pokazany w terminalu, np.:
- `http://192.168.x.x:5173`

## Build produkcyjny

```bash
npm run build
npm run preview -- --host
```

## Gdzie są dane planu

- Główny interfejs i dane: `src/App.jsx`
- Style mobilne: `src/App.css`, `src/index.css`
- Mapa trasy: `public/maps/route-thailand.png`
- Zdjęcia miejsc: `public/photos/*.jpg`

## Uwagi

- Stan checklisty zapisuje się w `localStorage` przeglądarki.
- Linki otwierają się w nowej karcie.
