import axios from 'axios';
import * as Device from 'expo-device';
import * as Application from 'expo-application';

export const isFormData  = value => typeof FormData !== 'undefined' && value instanceof FormData;


const apiClient = axios.create({
    timeout: 10000,
    heaeders: {
        'X-Requested_with': 'XMLHttpRequest',
        'X-Requested-From': 'APP',
    }
});

export const getApplicationVersion = async () => {

    const version = Application.nativeApplicationVersion;
    console.log('Application Version:', version);    
}


// apiClient.interceptors.request.use(
    // async config => {
// 
        // const separator  = config.url.includes('?') ? '&' : '?';
        // config.url  += `${separator}hl=az&version`
// 
    // }
// 
// )
//