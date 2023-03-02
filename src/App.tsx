import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function App() {
    const { t } = useTranslation();

    const [is_login, setIsLogin] = useState(false)

    return (
        <div>
            {t('Welcome to React')}
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
        </div>
    )
}