import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { books, FILTERS, FILTER_KEYS } from '../data/books.js';

/**
 * Catalogue filter state lives in the URL, so a filtered result is
 * shareable and back/forward behaves.
 */
export function useBookFilters() {
  const [params, setParams] = useSearchParams();

  const values = {};
  FILTER_KEYS.forEach((k) => {
    values[k] = params.get(k) || FILTERS[k].all;
  });

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === FILTERS[key].all) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const clear = () => setParams(new URLSearchParams(), { replace: true });

  const filtered = useMemo(
    () => books.filter((b) => FILTER_KEYS.every((k) => values[k] === FILTERS[k].all || b[k] === values[k])),
    [params] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const active = FILTER_KEYS.filter((k) => values[k] !== FILTERS[k].all).map((k) => values[k]);

  return {
    values,
    set,
    clear,
    filtered,
    active,
    summary: active.length ? active.join(' · ') : 'all countries and levels',
    query: params.toString()
  };
}
