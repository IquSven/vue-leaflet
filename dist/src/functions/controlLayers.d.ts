import type L from "leaflet";
export declare const controlLayersProps: {
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
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    autoZIndex: {
        type: BooleanConstructor;
        default: undefined;
    };
    hideSingleBase: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortLayers: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortFunction: {
        type: FunctionConstructor;
    };
};
export declare const setupControlLayers: (props: any, leafletRef: any) => {
    options: L.Control.LayersOptions;
    methods: {
        addLayer(layer: any): void;
        removeLayer(layer: any): void;
    };
};
