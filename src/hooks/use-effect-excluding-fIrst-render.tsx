import { useEffect } from "react";
import { useFirstRender } from "./use-first-render";

function useEffectExcludingFirstRender(effect: any, deps: Array<any>) {
  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender) {
      effect();
    }
  }, deps);
}

export { useEffectExcludingFirstRender };
