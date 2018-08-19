// app/i18n/i18n.js

import I18n from 'react-native-i18n';
import en from './en';
import fr from './fr';
import znch from './zn-ch';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr,
  znch
};

export default I18n;