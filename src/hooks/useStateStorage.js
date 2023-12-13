import { useEffect, useState } from "react";

class StateStorageHandler {
  constructor(LSname, initVal) {
    const [state, setState] = useState(initVal);
    this.state = state;
    this.setState = setState;
    this.LSname = LSname;
    this.initVal = initVal;

    this.#checkInStorageEffect();
    this.#updateLS();
  }

  checkInStorage() {
    const res = localStorage.getItem(this.LSname);

    if (res) {
      switch (typeof this.initVal) {
        case "object":
          this.setState(JSON.parse(res));
          break;
        case "number":
          this.setState(parseFloat(res));
          break;
        case "string":
          this.setState(JSON.parse(res));
          break;
        case "boolean":
          this.setState(res === "true" ? true : false);
          break;
      }
      return;
    }

    this.setState(this.initVal);
  }

  #checkInStorageEffect() {
    useEffect(this.checkInStorage.bind(this), []);
  }

  #updateLS() {
    useEffect(() => {
      localStorage.setItem(this.LSname, JSON.stringify(this.state));
    }, [this.state]);
  }
}

export function useStateStorage(LSname, initVal) {
  const stateStorageHandler = new StateStorageHandler(LSname, initVal);
  return [stateStorageHandler.state, stateStorageHandler.setState, stateStorageHandler.checkInStorage.bind(stateStorageHandler)];
}
