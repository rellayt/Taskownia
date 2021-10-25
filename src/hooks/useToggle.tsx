import { useCallback, useState } from 'react';
import { not } from 'core/base/utility/not';

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);

	const toggle = useCallback(() => setState((state) => not(state)), []);

	return [state, toggle];
};
