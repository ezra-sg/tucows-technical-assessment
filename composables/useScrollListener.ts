import { onMounted, onBeforeUnmount } from 'vue';

export default function useScrollListener(
    handler: (event: Event) => void,
    throttleDelayMs: number,
) {
    const throttledHandler = throttle(handler, throttleDelayMs);

    onMounted(() => {
        window.addEventListener('scroll', throttledHandler);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', throttledHandler);
    });
}
