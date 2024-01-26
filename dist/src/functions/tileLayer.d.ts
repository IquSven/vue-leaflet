import type L from "leaflet";
import type { PropType } from "vue";
export declare const tileLayerProps: {
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
        type: PropType<import("../types/enums/LayerType").LayerType>;
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
        type: PropType<Number | L.PointExpression>;
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
        type: PropType<String | String[]>;
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
};
export declare const setupTileLayer: (props: any, leafletRef: any, context: any) => {
    options: L.TileLayerOptions;
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
