import { onMounted, onBeforeUnmount } from 'vue';

/**
 * Defines a method which should be called when the user scrolls the page.
 * The listener is cleaned up when the component is unmounted.
 *
 * @param handler - The method to call when the user scrolls the page.
 * @param throttleDelayMs - The delay in milliseconds to throttle the scroll event.
 */
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
