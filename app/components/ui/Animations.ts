import { Animation, View } from '@nativescript/core';

export class AnimationHelper {
    static fadeIn(target: View, duration: number = 300): Promise<void> {
        return new Animation([{
            target,
            opacity: 1,
            duration
        }]).play();
    }

    static fadeOut(target: View, duration: number = 300): Promise<void> {
        return new Animation([{
            target,
            opacity: 0,
            duration
        }]).play();
    }

    static slideIn(target: View, direction: 'left' | 'right' | 'top' | 'bottom', duration: number = 300): Promise<void> {
        const translate = {
            left: { x: target.getMeasuredWidth(), y: 0 },
            right: { x: -target.getMeasuredWidth(), y: 0 },
            top: { x: 0, y: target.getMeasuredHeight() },
            bottom: { x: 0, y: -target.getMeasuredHeight() }
        }[direction];

        return new Animation([{
            target,
            translate,
            duration
        }]).play();
    }

    static shake(target: View, duration: number = 300): Promise<void> {
        return new Animation([{
            target,
            translate: { x: -10, y: 0 },
            duration: duration / 6
        }, {
            target,
            translate: { x: 10, y: 0 },
            duration: duration / 6
        }, {
            target,
            translate: { x: -10, y: 0 },
            duration: duration / 6
        }, {
            target,
            translate: { x: 10, y: 0 },
            duration: duration / 6
        }, {
            target,
            translate: { x: -5, y: 0 },
            duration: duration / 6
        }, {
            target,
            translate: { x: 0, y: 0 },
            duration: duration / 6
        }]).play();
    }
}