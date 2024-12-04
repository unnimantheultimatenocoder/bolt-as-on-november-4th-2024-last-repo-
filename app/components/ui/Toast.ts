import * as Toast from 'nativescript-toast';

interface ToastOptions {
    text: string;
    duration?: 'short' | 'long';
    position?: 'bottom' | 'center' | 'top';
}

export function showToast(options: ToastOptions) {
    const toast = Toast.makeText(options.text);
    
    if (options.duration === 'long') {
        toast.setDuration(Toast.DURATION.LONG);
    }

    switch (options.position) {
        case 'top':
            toast.setGravity(80, 0, 0);
            break;
        case 'center':
            toast.setGravity(17, 0, 0);
            break;
        default:
            toast.setGravity(48, 0, 0);
    }

    toast.show();
}