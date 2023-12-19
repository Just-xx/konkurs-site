import { useEffect, useRef, useState } from "react";

function checkInStorage(initVal, lsname, setState) {
  const res = localStorage.getItem(lsname);

  if (res) {
    switch (typeof initVal) {
      case "object":
        setState(JSON.parse(res));
        break;
      case "number":
        setState(parseFloat(res));
        break;
      case "string":
        setState(JSON.parse(res));
        break;
      case "boolean":
        setState(res === "true" ? true : false);
        break;
    }
    return;
  }

  setState(initVal);
}

export function useStateStorage(lsname, initVal) {

  const [state, setState] = useState(initVal);

  useEffect(() => {
    checkInStorage(initVal, lsname, setState)
  }, []);

  useEffect(() => {
    if (state !== initVal) {
      localStorage.setItem(lsname, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState, () => checkInStorage(initVal, lsname, setState)];
}
