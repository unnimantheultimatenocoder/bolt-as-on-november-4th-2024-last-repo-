import { SkeletonView } from '@nativescript/skeleton-view';

export function createSkeletonView(options: {
    width: number | string;
    height: number | string;
    cornerRadius?: number;
}) {
    const skeleton = new SkeletonView();
    skeleton.width = options.width;
    skeleton.height = options.height;
    if (options.cornerRadius) {
        skeleton.cornerRadius = options.cornerRadius;
    }
    return skeleton;
}