import type L from "leaflet";
export declare const wmsTileLayerProps: {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
} & {
    pane: {
        type: StringConstructor;
    };
    attribution: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
        custom: boolean;
    };
    layerType: {
        type: import("vue").PropType<import("../types/enums/LayerType").LayerType>;
        custom: boolean;
    };
    visible: {
        type: BooleanConstructor;
        custom: boolean;
        default: boolean;
    };
} & {
    opacity: {
        type: NumberConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
    tileSize: {
        type: import("vue").PropType<Number | L.PointExpression>;
    };
    noWrap: {
        type: BooleanConstructor;
        default: undefined;
    };
    minZoom: {
        type: NumberConstructor;
    };
    maxZoom: {
        type: NumberConstructor;
    };
    className: {
        type: StringConstructor;
    };
} & {
    tms: {
        type: BooleanConstructor;
        default: undefined;
    };
    subdomains: {
        type: import("vue").PropType<String | String[]>;
        validator: (prop: any) => boolean;
    };
    detectRetina: {
        type: BooleanConstructor;
        default: undefined;
    };
    url: {
        type: StringConstructor;
        required: boolean;
        custom: boolean;
    };
} & {
    layers: {
        type: StringConstructor;
        required: boolean;
    };
    styles: {
        type: StringConstructor;
    };
    format: {
        type: StringConstructor;
    };
    transparent: {
        type: BooleanConstructor;
        default: undefined;
    };
    version: {
        type: StringConstructor;
    };
    crs: {
        type: ObjectConstructor;
    };
    uppercase: {
        type: BooleanConstructor;
        default: undefined;
    };
};
export declare const setupWMSTileLayer: (props: any, leafletRef: any, context: any) => {
    options: L.WMSOptions;
    methods: {
        setAttribution(val: any): void;
        setName(): void;
        setLayerType(): void;
        setVisible(isVisible: any): void;
        bindPopup(leafletObject: any): void;
        bindTooltip(leafletObject: any): void;
        unbindTooltip(): void;
        unbindPopup(): void;
        updateVisibleProp(value: any): void;
    } & {
        setTileComponent(): void;
    };
};
