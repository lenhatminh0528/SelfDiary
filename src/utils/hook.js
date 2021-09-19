import {useState, useRef, useEffect} from 'react';
import _ from 'lodash';

export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => {
      const expectedState = _.assign(prevState, newState);
      return {...expectedState};
    });
  return [state, setMergedState];
};

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
