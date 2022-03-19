import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";
import {
  DateTime
} from 'luxon';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    react: {
      useSuspense: false
    },
    detection: {
      order: ['path', 'htmlTag']
    },
    interpolation: {
      format: (value, format, lng) => { // legacy usage
        if (value instanceof Date) {
          return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
        }
        return value;
      }
    }
  });