import { toast as hotToast } from 'react-hot-toast';

export type messages = {
    loading: string;
    error: string;
    success: string;
};

export function toast<T>(promise: Promise<T>, messages: messages) {
    return hotToast.promise(promise, messages, {
        style: {
            minWidth: '250px'
        }
    });
}
