import { isUndefined } from './isUndefined';
import { not } from './not';

export const isNotUndefined = <T,>(value: T) => not(isUndefined(value));
