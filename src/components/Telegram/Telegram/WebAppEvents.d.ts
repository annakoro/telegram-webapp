import { Telegram as T } from './Telegram';

export namespace Telegram.Unsafe.Events {
    /** Receives no parameters, new theme settings and color scheme can be received
     * via `this.themeParams` and `this.colorScheme` respectively. */
    type OnThemeChangedHandler = () => void;

    /** Receives an object with the single field `isStateStable`. If `isStateStable` = true,
     *  the resizing of the Web App is finished. If it is false, the resizing is ongoing
     * (the user is expanding or collapsing the Web App or an animated object is playing).
     * The current value of the visible section’s height is available in `this.viewportHeight`. */
    type OnViewPortChangedHandler = (
        this: T.Unsafe.WebApp,
        props: {
            isStateStable: boolean;
        }
    ) => void;

    /** Receives no parameters. */
    type OnMainButtonClickedHandler = (this: T.Unsafe.WebApp) => void;

    type Events = {
        /** Occurs whenever theme settings are changed in the user's Telegram app
         * (including switching to night mode). */
        themeChanged: OnThemeChangedHandler;
        viewportChanged: OnViewPortChangedHandler;
        mainButtonClicked: OnMainButtonClickedHandler;
    };

    export type EventsNames = keyof Events;
    export type EventHandlerArguments<N extends EventsNames> = Parameters<Events[N]>;
    export type EventHandlerReturnType<N extends EventsNames> = ReturnType<Events[N]>;
    export type EventHandler<N extends EventsNames> = (
        this: T.Unsafe.WebApp,
        ...args: EventHandlerArguments<N>
    ) => EventHandlerReturnType<N>;
}
