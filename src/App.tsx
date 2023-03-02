import { useTranslation } from "react-i18next"

export default function App() {
    const { t } = useTranslation();

    return (
        <div>
            {t('Welcome to React')}
        </div>
    )
}