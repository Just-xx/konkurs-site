import { useEffect, useState } from "react";

class StateStorageHandler {
  constructor(LSname, initVal) {
    const [state, setState] = useState(initVal);
    this.state = state;
    this.setState = setState;
    this.LSname = LSname;
    this.initVal = initVal;

    this.#checkInStorage();
    this.#updateLS();
  }

  #checkInStorage() {
    useEffect(() => {
      const res = localStorage.getItem(this.LSname);

      if (res) {
        switch (typeof this.initVal) {
          case "object":
            this.#arrayAndObjectHandler(res);
            break;
          case "number":
            this.setState(parseFloat(res));
            break;
          case "string":
            this.setState(res);
            break;
          case "boolean":
            this.setState(res === "true" ? true : false);
            break;
        }
        return;
      }

      this.setState(this.initVal);

    }, []);
  }

  #arrayAndObjectHandler(res) {
    if (Array.isArray(this.initVal)) {
      this.setState(res.split(","));
    } else {
      this.setState(JSON.parse(res));
    }
  }

  #updateLS() {
    useEffect(() => {
      localStorage.setItem(this.LSname, String(this.state));
    }, [this.state]);
  }
}

export function useStateStorage(LSname, initVal) {
  const stateStorageHandler = new StateStorageHandler(LSname, initVal);
  return [stateStorageHandler.state, stateStorageHandler.setState];
}
