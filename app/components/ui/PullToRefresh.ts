import { PullToRefresh } from '@nativescript/pulltorefresh';

export function setupPullToRefresh(ptr: PullToRefresh, refreshFunc: () => Promise<void>) {
    ptr.on('refresh', async () => {
        try {
            await refreshFunc();
        } catch (error) {
            console.error('Refresh failed:', error);
        } finally {
            ptr.refreshing = false;
        }
    });
}