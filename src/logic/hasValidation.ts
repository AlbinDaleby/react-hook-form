import { Field } from '../types';

export default (options: Field['_f']) =>
  options.mount &&
  (options.required ||
    options.min ||
    options.max ||
    options.maxLength ||
    options.minLength ||
    options.maxDate ||
    options.minDate ||
    options.pattern ||
    options.validate);
