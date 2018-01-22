import { ElementRef, EventEmitter, Renderer, OnInit, OnDestroy } from '@angular/core';
export declare class TinderCardDirective implements OnInit, OnDestroy {
    _overlay: any;
    overlay: any;
    _callLike: EventEmitter<any>;
    callLike: EventEmitter<any>;
    fixed: boolean;
    orientation: string;
    onLike: EventEmitter<any>;
    like: boolean;
    element: HTMLElement;
    renderer: Renderer;
    overlayElement: HTMLElement;
    constructor(el: ElementRef, renderer: Renderer);
    onReleaseLikeCb(event: any): void;
    onSwipeLikeCb(event: any): void;
    destroy(delay?: number): void;
    onSwipe(event: any): void;
    onAbort(event: any): void;
    onRelease(event: any): void;
    translate(params: any): void;
    initOverlay(): void;
    ngOnInit(): void;
    initCallLike(): void;
    ngOnDestroy(): void;
}
