import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import i18n from '../i18n';
import {fetchTranslations, fetchLanguages} from '../translations';

export function useLoadTranslations(language) {
  
    const query = useQuery({
        queryKey: ['translations', language],
        queryFn: () => fetchTranslations(language),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    useEffect(() => {
        if(query.data){
            i18n.addResourceBundle(language, 'translation', query.data, true, true);
            i18n.changeLanguage(language);
        }
    }, [query.data, language]);

    return query;
};

export function useLanguages() {
    return useQuery({
       queryKey: ['languages'],
       queryFn: fetchLanguages,
       staleTime: Infinity, 
    });
}