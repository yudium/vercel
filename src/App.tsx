import { useState } from "react";
import { useTranslation } from "react-i18next"
import i18next from 'i18next';

export default function App() {
    const { t } = useTranslation();

    const [is_login, setIsLogin] = useState(false)

    return (
        <div>
            {i18next.t('Welcome to React')}
            <button onClick={() => setIsLogin(true)}>Login</button>

            {is_login && <InsideApp />}
        </div>
    )
}

function InsideApp() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('inside.app')}</h1>
            <h1>{t('key.baru')}</h1>
        </div>
    )
}