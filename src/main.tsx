import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-locize-backend';
import { locizePlugin } from 'locize';

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .use(locizePlugin)
  .use(Backend)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //     en: {
    //         translation: {
    //             'Welcome to React': 'Welcome to React and react-i18next',
    //         },
    //     },
    // },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    backend: {
      projectId: '7da49584-db41-4cc7-b372-90688243eb29',
      apiKey: '7b85d7b4-49db-4575-98df-bf06ade3a639',
    },

    react: {
      bindI18n: 'languageChanged editorSaved',
    },
    saveMissing: true,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
