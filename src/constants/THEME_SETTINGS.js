export const THEME_SETTINGS = [
  [
    {
      active: true,
      id: "banner",
      label: "Pokaż baner",
      type: "toggle",
      value: true,
      flags: ["MULTIPLE_GROUP_MAIN_CONDITION"]
    },
  ],
  [
    {
      active: true,
      id: "picture",
      label: "Obrazek",
      type: "toggle",
      value: true,
      flags: ["MAIN_CONDITION"]
    },
    {
      active: true,
      id: "fileSelect",
      label: "Wybierz plik",
      type: "file",
      value: {},
      choice: 'banerPredefinded'
    },
    {
      active: true,
      id: "banerPredefinded",
      label: "Wybierz gotowy",
      type: "select",
      value: { value: "predef1", label: "Polska 1" },
      selectOptions: [
        { value: "predef1", label: "Polska 1" },
        { value: "predef2", label: "Polska 2" },
        { value: "predef3", label: "Święta 1" },
      ],
    },
  ],
  [
    {
      active: true,
      id: "text",
      label: "Tekst",
      type: "toggle",
      value: true,
      flags: ["MAIN_CONDITION"]
    },
    {
      active: true,
      id: "textValue",
      label: "Wpisz tekst",
      type: "text",
      value: "Nazwa tabeli",
    },
  ],
];
