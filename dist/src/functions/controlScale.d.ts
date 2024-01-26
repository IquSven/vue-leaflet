import type L from "leaflet";
export declare const controlScaleProps: {
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
    maxWidth: {
        type: NumberConstructor;
    };
    metric: {
        type: BooleanConstructor;
        default: undefined;
    };
    imperial: {
        type: BooleanConstructor;
        default: undefined;
    };
    updateWhenIdle: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export declare const setupControlScale: (props: any, leafletRef: any) => {
    options: L.Control.ScaleOptions;
    methods: {
        setPosition(position: any): void;
    };
};
