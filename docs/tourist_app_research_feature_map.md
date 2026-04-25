# Thailand 2026 Travel App - research i mapa funkcjonalnosci

Data opracowania: 25.04.2026

## Cel aplikacji

Aplikacja ma byc osobistym, mobilnym centrum dowodzenia na wyjazd do Tajlandii 5-28 czerwca 2026. Nie ma zastapic spontanicznego odkrywania miejsc. Ma chronic przed typowymi problemami w podrozy: zgubiona rezerwacja, brak internetu, niejasny transfer, zapomniany sprzet na bieg, zla decyzja pogodowa przy boat tripie albo brak szybkiego dostepu do numerow alarmowych.

## Profil uzytkownikow

1. Para z Hiszpanii, okolice Barbate.
2. Podroz do Tajlandii trwa 23 noce: Bangkok, Krabi, Phuket, Khao Sok / Cheow Lan, Koh Samui, Koh Phangan, Bangkok.
3. Plaze nie sa glownym celem same w sobie, bo uzytkownicy mieszkaja nad morzem. Wazniejsze sa natura, aktywnosci, hiking, boat tripy, kultura, jedzenie, gotowanie, miejsca z charakterem i dobra logistyka.
4. Kluczowe daty:
   - 4.06.2026: faktyczna data urodzin podana na poczatku planowania.
   - 6.06.2026: celebracja urodzin w Bangkoku, White Lotus Thai Cooking and Flower Garland Class, LEGO Store, Mahanakhon SkyWalk, kolacja.
   - 14.06.2026: polmaraton na Phuket.
   - 18.06.2026: 10. rocznica slubu na Koh Samui.
5. Dieta: jedna osoba je wegetariansko, druga bez ograniczen.
6. Wyjazd odbywa sie w czerwcu, czyli trzeba planowac z uwzglednieniem deszczu, fal, burz i mozliwych zmian w rejsach.
7. Trasa ma wysoka zlozonosc transportowa: loty, prywatne transfery, promy, speedboaty, przystanie, transfery hotel-pier-hotel, dni buforowe.

## Jak czytac research

Nie mozemy doslownie zadzwonic do losowych turystow i biegaczy w czasie rzeczywistym. Zamiast tego research zostal oparty na istniejacych wypowiedziach doswiadczonych podroznikow i biegaczy, checklistach race-day, poradnikach destination race oraz oficjalnych zrodlach pogodowych i bezpieczenstwa dla Tajlandii.

W praktyce potraktowalem to jak mini-panel:

1. Doswiadczony podroznik offline-first.
2. Para w dlugiej, wieloetapowej podrozy.
3. Biegacz jadacy na zawody za granice.
4. Uzytkownik z ograniczeniem dietetycznym.
5. Podroznik aktywny w porze deszczowej.

## Wnioski z doswiadczonych podroznikow

1. Offline jest wazniejsze niz ladne animacje. Najczesciej powtarzaja sie offline mapy, offline rezerwacje, offline dokumenty, offline tlumaczenia i dostep do planu bez internetu.
2. Aplikacja powinna pokazywac "co teraz", a nie zmuszac do czytania calego planu. W podrozy najbardziej liczy sie ekran dzisiejszy: miejsce, hotel, transfer, nastepna aktywnosc, czas do wyjscia, link do nawigacji.
3. Rezerwacje musza byc w jednym vaultcie. Podroznicy wskazuja narzedzia typu TripIt/Wanderlog dlatego, ze trzymaja loty, hotele, potwierdzenia i plan razem.
4. Mapa powinna byc szybka i praktyczna. Nie chodzi tylko o ladna trase, ale o zapisane punkty: hotel, pier, start biegu, apteka, szpital, restauracje wege, miejsca awaryjne.
5. Dobry plan ma tryb awaryjny. Przy boat tripach i promach potrzebne sa alternatywy na deszcz, fale, spozniony prom albo odwolana wycieczke.
6. Wspolne planowanie dla pary jest mile, ale nie musi byc od razu pelnym backendem. Na start wystarczy lokalny stan, eksport, udostepnianie linkow i czytelny backup.

## Wnioski od biegaczy i destination racers

1. Najwiekszy stres nie dotyczy samego biegu, tylko logistyki: odbior pakietu, dojazd na start, godzina pobudki, rzeczy w depozycie, spotkanie po mecie.
2. Krytyczne rzeczy biegowe powinny jechac w bagazu podrecznym: buty, stroj startowy, zegarek/ladowarka, zele, elektrolity, numer startowy jesli juz odebrany.
3. "Nothing new on race day" musi byc widoczne w aplikacji. Nie testujemy nowego sniadania, zeli, butow, skarpet ani hydracji w dniu startu.
4. Trzeba miec liste paliwa i hydracji. Szczegolnie w Tajlandii, gdzie bedzie cieplo i wilgotno, appka powinna przypominac o elektrolitach, wodzie i sprawdzeniu punktow odzywczych na trasie.
5. Dzien przed startem powinien byc chroniony. W Waszym planie 13.06 zostaje lekki: nawodnienie, odbior pakietu, przygotowanie stroju, wczesny sen.
6. Po biegu potrzebny jest recovery plan: zimny napoj, lekkie jedzenie, prysznic, transport, ubrania na zmiane, ewentualnie masaz/spacer.

## Wnioski specyficzne dla Tajlandii w czerwcu

1. Phuket i Krabi leza po stronie Andamanskiej, gdzie czerwiec moze oznaczac wiecej deszczu, fale i ryzyko zmian w rejsach.
2. Koh Samui i Koh Phangan leza po stronie Zatoki Tajlandzkiej, zwykle korzystniejszej w czerwcu niz Andamany, choc nadal potrzebne sa alerty burzowe i elastycznosc.
3. Boat tripy trzeba planowac wczesniej w pobycie, a nie ostatniego dnia, zeby miec bufor na przestawienie.
4. Przy kazdym transferze promowym potrzebny jest margines 2-3 godziny przed kolejnym krytycznym elementem.
5. Aplikacja powinna linkowac do oficjalnych prognoz TMD: daily forecast, shipping forecast, ocean wave forecast / wave risk.
6. W SOS musza byc numery: Tourist Police 1155, Police 191, Medical Emergency 1669, Fire 199, TAT 1672, Immigration 1178, National Disaster Warning Center 1784.

## Must-have funkcje

| Funkcja | Problem, ktory rozwiazuje | Priorytet | Offline |
| --- | --- | --- | --- |
| Today / Next Up dashboard | W podrozy nie chce sie przewijac calego planu | P0 | Tak |
| Itinerary day-by-day | Jedno zrodlo prawdy dla calej trasy | P0 | Tak |
| Reservation Vault | Loty, hotele, promy, wycieczki i potwierdzenia w jednym miejscu | P0 | Tak |
| Map & Navigation Hub | Szybkie przejscie do hoteli, przystani, atrakcji i transferow | P0 | Czesciowo |
| Race Day Command Center | Ochrona dnia polmaratonu i redukcja stresu startowego | P0 | Tak |
| Weather & Boat Decision Helper | Decyzja: plynac, przelozyc, zmienic plan | P0 | Czesciowo |
| SOS & Medical | Szybki dostep do numerow, ubezpieczenia i danych medycznych | P0 | Tak |
| Vegetarian Food Assistant | Bezpieczne zamawianie jedzenia i wyszukiwanie opcji wege | P0 | Tak |
| Checklists | Pakowanie, bieganie, boat trip, hiking, transfer, dokumenty | P0 | Tak |
| Calendar export / reminders | Mniej ryzyka zapomnienia transferu lub aktywnosci | P1 | Tak |

## Should-have funkcje

| Funkcja | Dlaczego warto |
| --- | --- |
| Budget & Currency | Szybkie przeliczanie THB/EUR, kontrola kosztow, gotowka na promy i taxi |
| Trip Memory Log | Notatki, ulubione miejsca, mini-dziennik, zdjecia do wspomnien |
| Share / Export PDF | Awaryjna kopia planu dla drugiej osoby albo do wydruku |
| Hotel & Pier Contacts | Jeden klik do hotelu, kierowcy, operatora wycieczki, przystani |
| Couple Sync Lite | Eksport/import stanu bez budowania pelnego backendu |
| Context Packing | Lista rzeczy zalezna od dnia: bieg, boat trip, hiking, transfer |
| Thai Phrase Cards | Karty do pokazania lokalnie: wege, alergie, adres hotelu, prosba o taxi |
| Plan B Cards | Alternatywy dla deszczu: muzea, kawiarnie, masaz, old town, cooking/indoor |

## Nice-to-have funkcje

| Funkcja | Uwagi |
| --- | --- |
| Live weather API | Przydatne, ale wymaga integracji, cache i obslugi bledow |
| Live ferry / flight status | Bardzo dobre, ale wymaga zrodel danych i moze byc kruche |
| Offline map tiles / GPX | Wysoka wartosc dla hikingow, ale wiekszy zakres techniczny |
| Expense split | Przydatne, ale nie krytyczne dla bezpieczenstwa ani logistyki |
| AI travel assistant | Moze pomagac w zmianie planu, ale MVP powinno dzialac bez AI i internetu |
| Auto-import z emaili / screenshotow | Swietne pozniej, na start wystarczy reczne dodawanie danych |

## Luka wzgledem obecnej aplikacji

Obecna aplikacja juz ma mocny fundament:

1. PWA i offline shell.
2. Ekran "Dzisiaj".
3. Plan dzien po dniu.
4. Mape trasy.
5. Vault rezerwacji.
6. SOS i numery alarmowe.
7. Karte wegetarianska.
8. Checklisty.
9. Eksport kalendarza ICS.
10. iOS glassy UI.

Najbardziej wartosciowe braki:

1. Osobny Race Day Command Center dla 13-14.06.
2. Weather & Boat Decision Helper dla Railay, James Bond Island, Koh Racha Yai, Cheow Lan i Ang Thong.
3. Rozbudowany Vault kontaktow: hotel, kierowca, operator wycieczki, pier, emergency contact.
4. Budzet i waluta THB/EUR.
5. Eksport/druk planu jako PDF albo tryb "share".
6. Lepsze, prawdziwe zdjecia miejsc zamiast placeholderow.
7. Tryb "Plan B" przy zlej pogodzie.
8. Szybkie karty "co zabrac dzisiaj" zalezne od aktywnosci.
9. Offline hiking support dla Koh Phangan i Khao Sok.

## Roadmapa produktowa

### Sprint 1 - logistyka krytyczna

Cel: usunac najwieksze ryzyka przed rezerwacjami i wyjazdem.

1. Rozbudowac Reservation Vault o kategorie: lot, hotel, transfer, prom, wycieczka, bieg, ubezpieczenie.
2. Dodac pola: numer rezerwacji, operator, telefon, WhatsApp, adres, link do mapy, PDF/screenshot, status platnosci.
3. Zbudowac Race Day Command Center.
4. Dodac checklisty: pre-race, race morning, carry-on race kit, recovery.
5. Dodac ekran "Key Dates": birthday, half marathon, anniversary.

### Sprint 2 - pogoda i aktywnosci

Cel: aplikacja pomaga decydowac, czy boat trip/hike ma sens danego dnia.

1. Weather & Boat Decision Helper z recznym statusem: green / yellow / red.
2. Linki do TMD daily forecast, shipping forecast, wave risk.
3. Plan B dla kazdej bazy: Bangkok, Krabi, Phuket, Khao Sok, Samui, Phangan.
4. Kontekstowe checklisty: boat bag, hiking bag, transfer day, city day.
5. Oznaczenie aktywnosci, ktore da sie zamieniac miejscami.

### Sprint 3 - komfort w telefonie

Cel: appka ma byc szybka, piekna i praktyczna w uzyciu na ulicy albo w taxi.

1. Tryb "Today" jeszcze bardziej skondensowany.
2. Jeden klik: nawiguj, zadzwon, pokaz karte po tajsku, otworz rezerwacje.
3. Notatki i ulubione miejsca.
4. Memory Log: krotka notka + zdjecie + ocena miejsca.
5. Eksport/druk planu.

### Sprint 4 - automatyzacje i dane live

Cel: ulepszenia, ktore sa mile, ale nie powinny blokowac wyjazdu.

1. Pogoda z API.
2. Status promow/lotow, jesli znajdziemy stabilne zrodla.
3. Sync miedzy telefonami.
4. Auto-import rezerwacji z maili albo screenshotow.
5. Offline map tiles / GPX dla hikingow.

## Proponowana architektura informacji

1. Dzisiaj
2. Plan
3. Mapa
4. Aktywnosci
5. Bieg
6. Vault
7. Pogoda
8. SOS
9. Wspomnienia
10. Ustawienia / eksport

## User stories

1. Jako osoba w taxi chce jednym kliknieciem otworzyc adres hotelu lub przystani.
2. Jako biegaczka chce wieczorem 13.06 widziec tylko to, co dotyczy startu 14.06.
3. Jako osoba jedzaca wegetariansko chce pokazac kelnerowi prosta karte po tajsku.
4. Jako para chce miec plan dnia w trybie offline, gdy nie ma zasiegu albo eSIM nie dziala.
5. Jako osoba planujaca boat trip chce sprawdzic prognoze fal i miec plan B.
6. Jako osoba po biegu chce wiedziec, jak wrocic, gdzie zjesc i co zabrac do recovery bag.
7. Jako osoba odpowiedzialna za dokumenty chce szybko znalezc rezerwacje, ubezpieczenie i kontakt do hotelu.
8. Jako uzytkownik w stresie chce miec SOS bez grzebania w menu.

## Zasady projektowe

1. Calm over clever: appka ma uspokajac, nie dokladac bodzcow.
2. Offline-first: plan, SOS, vault i checklisty dzialaja bez internetu.
3. One-tap actions: nawiguj, zadzwon, pokaz, skopiuj, otworz.
4. Weather-aware: aktywnosci morskie i hiking maja status pogodowy oraz plan B.
5. Race-protected: 13-14.06 sa dniami chronionymi, bez ciezkich transferow i eksperymentow.
6. Couple-friendly: wszystko jest czytelne dla dwoch osob, nie tylko dla tej, ktora planowala wyjazd.
7. Notion-level depth, Apple Wallet-level speed: duzo informacji, ale szybkie uzycie w ruchu.

## Metryki sukcesu

1. Wazna informacja jest dostepna w maksymalnie 2 tapnieciach.
2. Aplikacja dziala po wlaczeniu trybu samolotowego.
3. Kazdy dzien ma: nocleg, transport, glowne aktywnosci, plan B i checklisty.
4. Kazdy boat trip ma status pogodowy i alternatywe.
5. Dzien polmaratonu ma kompletny plan od pobudki do recovery.
6. SOS jest widoczne zawsze z dolnej nawigacji.
7. Nie ma miejsca, w ktorym uzytkownik musi "pamietac, gdzie to bylo".

## Zrodla i inspiracje

1. Reddit / GummySearch, analiza opinii o aplikacjach turystycznych: https://gummysearch.com/tools/best-products/travel-apps/
2. Thailand official tourist assistance contact numbers: https://thailand.go.th/issue-focus-detail/essential-tourist-assistance-contact-numbers-to-ensure-a-smooth-and-safe-journey?hl=en
3. Thailand emergency contact numbers: https://thailand.go.th/guide-book-detail/009-017
4. Thai Meteorological Department - Daily Weather Forecast: https://tmd.go.th/en/forecast/daily
5. Thai Meteorological Department - Shipping Forecast: https://tmd.go.th/en/forecast/shipping
6. REI marathon running gear checklist: https://www.rei.com/learn/expert-advice/marathon-running-gear-checklist.html
7. SELF destination race packing advice: https://www.self.com/story/best-gear-for-destination-races
8. SELF marathon fueling and hydration guide: https://www.self.com/story/marathoners-guide-to-fuel-and-hydration
9. Tom's Guide marathon race-day packing list: https://www.tomsguide.com/wellness/fitness/running-your-first-marathon-here-are-9-essential-things-to-pack-for-race-day
10. Thailand rainy-season coast comparison, travel context: https://www.thailandhighlights.com/thailand/rainy-season-travel-guide
