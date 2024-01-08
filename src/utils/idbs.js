import { createStore } from "idb-keyval";

export const TablesStore = createStore("tables-db", "tables");
export const ImgsStore = createStore("imgs-db", "imgs");