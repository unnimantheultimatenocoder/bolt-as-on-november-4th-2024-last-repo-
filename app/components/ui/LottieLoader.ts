import { LottieView } from '@nativescript/lottie';

export class LottieLoader {
    static createLoader(): LottieView {
        const lottieView = new LottieView();
        lottieView.src = '~/assets/animations/loader.json';
        lottieView.loop = true;
        lottieView.autoPlay = true;
        return lottieView;
    }

    static createSuccess(): LottieView {
        const lottieView = new LottieView();
        lottieView.src = '~/assets/animations/success.json';
        lottieView.loop = false;
        lottieView.autoPlay = true;
        return lottieView;
    }

    static createError(): LottieView {
        const lottieView = new LottieView();
        lottieView.src = '~/assets/animations/error.json';
        lottieView.loop = false;
        lottieView.autoPlay = true;
        return lottieView;
    }
}