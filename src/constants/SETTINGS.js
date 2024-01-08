export const SETTINGS = [
  [
    {
      active: true,
      id: "sort",
      label: "Sortowanie",
      type: "toggle",
      value: false,
      flags: ["MAIN_CONDITION"]
    },
    {
      active: true,
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
      active: true,
      id: "sortBy",
      label: "Sortowanie po",
      type: "select",
      value: {},
      selectOptions: [],
      flags: ["FILL_FIELDS", "NOT_EMPTY"]
    },
  ],
  [
    {
      active: true,
      id: "autoPlace",
      label: "Automatyczne miejsca",
      type: "toggle",
      value: false,
      flags: ["MAIN_CONDITION"]
    },
    {
      active: true,
      id: "badges",
      label: "Medale",
      type: "toggle",
      value: false,
    },
    {
      active: true,
      id: "sortPlaceBy",
      label: "Sortowanie miejsc po",
      type: "select",
      value: {},
      selectOptions: [],
      flags: ["FILL_FIELDS", "NOT_EMPTY"]
    },
    {
      active: true,
      id: "revertPlace",
      label: "Odwróć kolejność",
      type: "toggle",
      value: false,
    },
  ],
];
