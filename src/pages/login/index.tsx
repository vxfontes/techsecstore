import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../translate/i18n';

const Login = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('teste')}</h1>
        </>
    );
};

export default Login;
