/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useEffectOnce(effectCallback: EffectCallback) {
  useEffect(effectCallback, []);
}
