import {SUPABASE_URL, SUPABASE_ANON_KEY} from './config';

const headers = {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
} ;

async function request(path) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {headers});
    if(!res.ok) {
        throw new Error(`Sorgu ugursuz oldu: ${res.status}`);
    }
};

export async function fetchTranslations(language) {
    const data  = await request(`translations?select=key,value&language=eq.${language}`);
    return Object.fromEntries(data.map(r => [r.key, r.value]));
};

export async function fetchLanguages() {
    const data  = await request('available_languages?select=language');
    return data.map(r => r.language);
}
