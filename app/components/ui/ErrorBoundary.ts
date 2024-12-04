import { Observable } from '@nativescript/core';
import { showToast } from './Toast';

export class ErrorBoundary extends Observable {
    private static instance: ErrorBoundary;
    private errorHandlers: Map<string, (error: Error) => void>;

    private constructor() {
        super();
        this.errorHandlers = new Map();
        this.setupGlobalErrorHandler();
    }

    static getInstance(): ErrorBoundary {
        if (!ErrorBoundary.instance) {
            ErrorBoundary.instance = new ErrorBoundary();
        }
        return ErrorBoundary.instance;
    }

    private setupGlobalErrorHandler() {
        global.handleUncaughtException = (error: Error) => {
            this.handleError(error);
        };

        global.handleUnhandledRejection = (reason: any) => {
            this.handleError(reason instanceof Error ? reason : new Error(String(reason)));
        };
    }

    private handleError(error: Error) {
        console.error('Error caught by boundary:', error);

        // Show user-friendly message
        showToast({
            text: 'Something went wrong. Please try again.',
            duration: 'long',
            position: 'bottom'
        });

        // Execute registered handlers
        this.errorHandlers.forEach(handler => {
            try {
                handler(error);
            } catch (handlerError) {
                console.error('Error handler failed:', handlerError);
            }
        });
    }

    registerErrorHandler(key: string, handler: (error: Error) => void) {
        this.errorHandlers.set(key, handler);
    }

    unregisterErrorHandler(key: string) {
        this.errorHandlers.delete(key);
    }
}