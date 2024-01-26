import type L from "leaflet";
export declare const controlZoomProps: {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
} & {
    position: {
        type: import("vue").PropType<L.ControlPosition>;
    };
} & {
    zoomInText: {
        type: StringConstructor;
    };
    zoomInTitle: {
        type: StringConstructor;
    };
    zoomOutText: {
        type: StringConstructor;
    };
    zoomOutTitle: {
        type: StringConstructor;
    };
};
export declare const setupControlZoom: (props: any, leafletRef: any) => {
    options: L.Control.ZoomOptions;
    methods: {
        setPosition(position: any): void;
    };
};
