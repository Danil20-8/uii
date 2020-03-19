export function pushState<TState>(state: TState, url: string, handler: { onenter: (state: TState) => void, onexit?: () => void });

export function popState();

export function restore(store, state);

export function useFallbackBackHandler(handler: () => void);

declare class NRouteHanadler<TState>{
    routeKey?: string;

    onenter?(state: TState, anchor: any): void;
    onpushEnter?(state: TState, anchor: any): void;
    onpopEnter?(state: TState, anchor: any): void;
    onexit?(): void;
    onpushExit?(): void;
    onpopExit?(): void;
}
declare class NRouter {
    pathname: string
    search: string
    hash: string

    pushState<TState>(state: TState, url: string, handler: NRouteHanadler<TState>);
    popState(anchor: any);
}
export const router: NRouter;

declare class NRoute<TState>{
    constructor(routeKey?: string);

    routeKey?: string;

    onpushEnter(state: TState, anchor: any): void;
    onpopEnter(state: TState, anchor: any): void;
    onpushExit(): void;
    onpopExit(): void;

    pushState<TState>(state: TState, url: string);
    popState();

    handleEnter(state: TState): void;
    handlePushEnter(state: TState): void;
    handlePopEnter(state: TState): void;
    handleExit(): void;
    handlePushExit(): void;
    handlePopExit(): void;
}

export function useRouteHandler<TState>(handler: NRouteHanadler<TState>);
export function dropRouteHandler<TState>(handler: NRouteHanadler<TState>);