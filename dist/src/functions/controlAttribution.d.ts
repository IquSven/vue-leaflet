import type L from "leaflet";
export declare const controlAttributionProps: {
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
    prefix: {
        type: StringConstructor;
    };
};
export declare const setupControlAttribution: (props: any, leafletRef: any) => {
    options: L.Control.AttributionOptions;
    methods: {
        setPosition(position: any): void;
    } & {
        setPrefix(prefix: any): void;
    };
};
