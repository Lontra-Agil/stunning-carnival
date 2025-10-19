import { type DependencyList, useEffect } from "react";
import { useFirstRender } from "./use-first-render";

function useEffectExcludingFirstRender(
	effect: () => void,
	deps: DependencyList,
) {
	const firstRender = useFirstRender();

	useEffect(() => {
		if (!firstRender) {
			effect();
		}
	}, [firstRender, effect, ...deps]);
}

export { useEffectExcludingFirstRender };
