import {useState} from 'react';
import {ActivityIndicator, Text, Button, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useTranslation} from 'react-i18next';

import './src/i18n';
import {useLoadTranslations, useLanguages} from './src/hooks/useTranslations';


const queryCleint = new QueryClient();


function Main () {
  const [language, setLanguage]  = useState('az');
  const {isLoading, isError}  = useLoadTranslations(language);
  
}
