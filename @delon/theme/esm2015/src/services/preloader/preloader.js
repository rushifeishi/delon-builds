/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
export function preloaderFinished() {
    /** @type {?} */
    const body = document.querySelector('body');
    /** @type {?} */
    const preloader = document.querySelector('.preloader');
    body.style.overflow = 'hidden';
    /**
     * @return {?}
     */
    function remove() {
        // preloader value null when running --hmr
        if (!preloader)
            return;
        preloader.addEventListener('transitionend', function () {
            preloader.className = 'preloader-hidden';
        });
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    ((/** @type {?} */ (window))).appBootstrap = () => {
        setTimeout(() => {
            remove();
            body.style.overflow = '';
        }, 100);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL3ByZWxvYWRlci9wcmVsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sVUFBVSxpQkFBaUI7O1VBQ3pCLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7VUFDckMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBRXRELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7OztJQUUvQixTQUFTLE1BQU07UUFDYiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxTQUFTLElBQUksbURBQW1ELENBQUM7SUFDN0UsQ0FBQztJQUVELENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ2hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlckZpbmlzaGVkKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJyk7XG5cbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAvLyBwcmVsb2FkZXIgdmFsdWUgbnVsbCB3aGVuIHJ1bm5pbmcgLS1obXJcbiAgICBpZiAoIXByZWxvYWRlcikgcmV0dXJuO1xuICAgIHByZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xuICAgIH0pO1xuXG4gICAgcHJlbG9hZGVyLmNsYXNzTmFtZSArPSAnIHByZWxvYWRlci1oaWRkZW4tYWRkIHByZWxvYWRlci1oaWRkZW4tYWRkLWFjdGl2ZSc7XG4gIH1cblxuICAoPGFueT53aW5kb3cpLmFwcEJvb3RzdHJhcCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbW92ZSgpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG59XG4iXX0=