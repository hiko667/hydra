export const mock_graph = {
  "nodes": [
    {
      "id": 0,
      "name": "Projekt_Akademicki_Root",
      "group": "body"
    },
    {
      "id": 1,
      "name": "Faza_Inicjacji_i_Teorii",
      "group": "neck"
    },
    {
      "id": 2,
      "name": "Przegląd_Literatury",
      "group": "neck"
    },
    {
      "id": 3,
      "name": "Faza_Badawczo_Techniczna",
      "group": "neck"
    },
    {
      "id": 4,
      "name": "Przygotowanie_Metodologii",
      "group": "neck"
    },
    {
      "id": 5,
      "name": "Faza_Podsumowania",
      "group": "neck"
    },
    {
      "id": 6,
      "name": "Zdefiniowanie_Celu_Badawczego",
      "group": "head"
    },
    {
      "id": 7,
      "name": "Analiza_Artykułów_Naukowych",
      "group": "head"
    },
    {
      "id": 8,
      "name": "Sformułowanie_Hipotez",
      "group": "head"
    },
    {
      "id": 9,
      "name": "Zakup_i_Konfiguracja_Aparatury",
      "group": "head"
    },
    {
      "id": 10,
      "name": "Przeprowadzenie_Eksperymentów",
      "group": "head"
    },
    {
      "id": 11,
      "name": "Zbieranie_Surowych_Danych",
      "group": "head"
    },
    {
      "id": 12,
      "name": "Statystyczna_Obróbka_Wyników",
      "group": "head"
    },
    {
      "id": 13,
      "name": "Pisanie_Pracy_i_Wniosków",
      "group": "head"
    },
    {
      "id": 14,
      "name": "Obrona_Projektu_i_Prezentacja",
      "group": "head"
    }
  ],
  "links": [
    {
      "source": 0,
      "target": 1
    },
    {
      "source": 0,
      "target": 3
    },
    {
      "source": 0,
      "target": 5
    },
    {
      "source": 1,
      "target": 6
    },
    {
      "source": 1,
      "target": 2
    },
    {
      "source": 2,
      "target": 7
    },
    {
      "source": 2,
      "target": 8
    },
    {
      "source": 3,
      "target": 4
    },
    {
      "source": 3,
      "target": 10
    },
    {
      "source": 4,
      "target": 9
    },
    {
      "source": 10,
      "target": 11
    },
    {
      "source": 5,
      "target": 12
    },
    {
      "source": 5,
      "target": 13
    },
    {
      "source": 5,
      "target": 14
    }
  ]
}

export const mock_graph1 = {
  "nodes": [
    {
      "id": 0,
      "name": "Korzen_Główny",
      "group": "body"
    },
    {
      "id": 1,
      "name": "Rozgałęzienie_A",
      "group": "neck"
    },
    {
      "id": 2,
      "name": "Rozgałęzienie_B",
      "group": "neck"
    },
    {
      "id": 3,
      "name": "Liść_A1",
      "group": "head"
    },
    {
      "id": 4,
      "name": "Liść_A2",
      "group": "head"
    },
    {
      "id": 5,
      "name": "Liść_B1",
      "group": "head"
    }
  ],
  "links": [
    {
      "source": 0,
      "target": 1
    },
    {
      "source": 0,
      "target": 2
    },
    {
      "source": 1,
      "target": 3
    },
    {
      "source": 1,
      "target": 4
    },
    {
      "source": 2,
      "target": 5
    }
  ]
}