import {create} from 'zustand';
import NetInfo from '@react-native-community/netinfo';

export const useNetworkStore  = create((set) => ({
    isConnected: true,
    isInternetreachable: true,
    isOffline: false,
    type: 'unknown',
    setNetworkState: (state) => set({
        isConnected: !!state.isConnected,
        isInternetreachable: state.isInternetReachable,
        isOffline: state.isConnected === false || state.isInternetReachable === false,
        type: state.type,

    }),
}));

let unsubscribe = null;

export const startNetworkListener = () => {
    if(unsubscribe) {
        return unsubscribe();
    }

    unsubscribe = NetInfo.addEventListener((state) => {
        useNetworkStore.getState().setNetworkState(state);
    })
}