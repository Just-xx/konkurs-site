export const SETTINGS = [
  [
    {
      id: "sort",
      label: "Sortowanie",
      type: "toggle",
      value: false,
    },
    {
      id: "sortType",
      label: "Typ sortowania",
      type: "select",
      value: { value: "descending", label: "malejąco" },
      selectOptions: [
        { value: "descending", label: "malejąco" },
        { value: "ascending", label: "rosnąco" },
      ],
    },
    {
      id: "sortBy",
      label: "Sortowanie po",
      type: "select",
      value: {},
      selectOptions: [],
      flags: ["FILL_FIELDS"]
    },
  ],
  [
    {
      id: "autoPlace",
      label: "Automatyczne miejsca",
      type: "toggle",
      value: false,
    },
    {
      id: "badges",
      label: "Medale",
      type: "toggle",
      value: false,
    },
    {
      id: "sortPlaceBy",
      label: "Sortowanie miejsc po",
      type: "select",
      value: {},
      selectOptions: [],
      flags: ["FILL_FIELDS"]
    },
    {
      id: "revertPlace",
      label: "Odwróć kolejność",
      type: "toggle",
      value: false,
    },
  ],
];
