import { LoadingIndicator } from 'nativescript-loading-indicator';

export class LoadingState {
    private static instance: LoadingState;
    private loader: LoadingIndicator;

    private constructor() {
        this.loader = new LoadingIndicator();
    }

    static getInstance(): LoadingState {
        if (!LoadingState.instance) {
            LoadingState.instance = new LoadingState();
        }
        return LoadingState.instance;
    }

    show(message: string = 'Loading...') {
        this.loader.show({
            message,
            margin: 10,
            dimBackground: true,
            color: '#2563eb',
            backgroundColor: '#ffffff',
            userInteractionEnabled: false,
            hideBezel: false,
        });
    }

    hide() {
        this.loader.hide();
    }
}