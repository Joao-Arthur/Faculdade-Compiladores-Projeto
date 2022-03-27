import { toast as hotToast } from 'react-hot-toast';

export type messages = {
    loading: string;
    error: string;
    success: string;
};

const defaultOptions = {
    style: {
        minWidth: '250px'
    }
};

export function toast<T>(promise: Promise<T>, messages: messages) {
    return hotToast.promise(promise, messages, defaultOptions);
}

export function errorToast(message: string) {
    hotToast.error(message, defaultOptions);
}
