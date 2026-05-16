export const mock_graph = {
  "nodes": [
    {
      "id": 0,
      "name": "Projekt_Akademicki_Root",
      "group": "body",
      "description": "Główny węzeł spinający wszystkie etapy i fazy projektu akademickiego."
    },
    {
      "id": 1,
      "name": "Faza_Inicjacji_i_Teorii",
      "group": "neck",
      "description": "Początkowy etap projektu skupiony na podstawach teoretycznych i określaniu ram badań."
    },
    {
      "id": 2,
      "name": "Przegląd_Literatury",
      "group": "neck",
      "description": "Proces zbierania, czytania i ewaluacji dotychczasowych publikacji naukowych w danym temacie."
    },
    {
      "id": 3,
      "name": "Faza_Badawczo_Techniczna",
      "group": "neck",
      "description": "Etap koncentrujący się na aspektach praktycznych, inżynieryjnych i wykonawczych."
    },
    {
      "id": 4,
      "name": "Przygotowanie_Metodologii",
      "group": "neck",
      "description": "Opracowanie dokładnego planu, metod i narzędzi badawczych niezbędnych do eksperymentów."
    },
    {
      "id": 5,
      "name": "Faza_Podsumowania",
      "group": "neck",
      "description": "Końcowy etap projektu obejmujący analizę danych, wyciąganie wniosków i prezentację."
    },
    {
      "id": 6,
      "name": "Zdefiniowanie_Celu_Badawczego",
      "group": "head",
      "description": "Jasne określenie problemu naukowego, który projekt ma rozwiązać."
    },
    {
      "id": 7,
      "name": "Analiza_Artykułów_Naukowych",
      "group": "head",
      "description": "Szczegółowa weryfikacja i krytyczna ocena wybranych pozycji literaturowych."
    },
    {
      "id": 8,
      "name": "Sformułowanie_Hipotez",
      "group": "head",
      "description": "Postawienie przypuszczeń badawczych, które zostaną zweryfikowane w toku eksperymentów."
    },
    {
      "id": 9,
      "name": "Zakup_i_Konfiguracja_Aparatury",
      "group": "head",
      "description": "Pozyskanie sprzętu laboratoryjnego lub oprogramowania i przygotowanie go do pracy."
    },
    {
      "id": 10,
      "name": "Przeprowadzenie_Eksperymentów",
      "group": "head",
      "description": "Wykonanie zaplanowanych testów i badań zgodnie z przyjętą metodologią."
    },
    {
      "id": 11,
      "name": "Zbieranie_Surowych_Danych",
      "group": "head",
      "description": "Rejestracja nieprzetworzonych wyników uzyskanych podczas prób laboratoryjnych."
    },
    {
      "id": 12,
      "name": "Statystyczna_Obróbka_Wyników",
      "group": "head",
      "description": "Zastosowanie metod matematycznych do analizy i wizualizacji zebranych danych."
    },
    {
      "id": 13,
      "name": "Pisanie_Pracy_i_Wniosków",
      "group": "head",
      "description": "Tworzenie dokumentacji tekstowej zawierającej interpretację wyników i podsumowanie."
    },
    {
      "id": 14,
      "name": "Obrona_Projektu_i_Prezentacja",
      "group": "head",
      "description": "Przedstawienie rezultatów pracy przed komisją i odpowiedź na pytania."
    }
  ],
  "links": [
    { "source": 0, "target": 1 },
    { "source": 0, "target": 3 },
    { "source": 0, "target": 5 },
    { "source": 1, "target": 6 },
    { "source": 1, "target": 2 },
    { "source": 2, "target": 7 },
    { "source": 2, "target": 8 },
    { "source": 3, "target": 4 },
    { "source": 3, "target": 10 },
    { "source": 4, "target": 9 },
    { "source": 4, "target": 11 },
    { "source": 5, "target": 12 },
    { "source": 5, "target": 13 },
    { "source": 5, "target": 14 }
  ]
}

export const mock_graph1 = {
  "nodes": [
    {
      "id": 0,
      "name": "Korzen_Główny",
      "group": "body",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "id": 1,
      "name": "Rozgałęzienie_A",
      "group": "neck",
      "description": "Pierwsza główna gałąź dzieląca strukturę na podobszary."
    },
    {
      "id": 2,
      "name": "Rozgałęzienie_B",
      "group": "neck",
      "description": "Druga alternatywna gałąź prowadząca do osobnej sekcji."
    },
    {
      "id": 3,
      "name": "Liść_A1",
      "group": "head",
      "description": "Węzeł końcowy przypisany do pierwszej podgrupy rozgałęzienia A."
    },
    {
      "id": 4,
      "name": "Liść_A2",
      "group": "head",
      "description": "Drugi węzeł końcowy powiązany z rozgałęzieniem A."
    },
    {
      "id": 5,
      "name": "Liść_B1",
      "group": "head",
      "description": "Węzeł końcowy stanowiący zakończenie rozgałęzienia B."
    }
  ],
  "links": [
    { "source": 0, "target": 1 },
    { "source": 0, "target": 2 },
    { "source": 1, "target": 3 },
    { "source": 1, "target": 4 },
    { "source": 2, "target": 5 }
  ]
}