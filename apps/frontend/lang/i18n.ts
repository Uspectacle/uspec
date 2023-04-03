import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import appEn from "./en/app.json";
import appFr from "./fr/app.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: { en: { app: appEn }, fr: { app: appFr } },
  debug: true, // TODO only for testing
  ns: ["app"],
  fallbackLng: "en",
  lng: global?.navigator?.language || "",
  keySeparator: ".",
  interpolation: { escapeValue: false, prefix: "{", suffix: "}" },
});

export default i18n;
