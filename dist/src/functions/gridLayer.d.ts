import type L from "leaflet";
import { type PropType } from "vue";
import { type VNode } from "vue";
export type VueGridLayerTileRenderer = (props: {
    coords: L.Point;
}) => () => VNode;
export declare const gridLayerProps: {
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
};
export declare const setupGridLayer: (props: any, leafletRef: any, context: any) => {
    options: L.GridLayerOptions;
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
export declare const CreateVueGridLayer: (GridLayer: typeof L.GridLayer, DomUtil: typeof L.DomUtil, Util: typeof L.Util, childRenderer: VueGridLayerTileRenderer) => (new (options: L.GridLayerOptions) => L.GridLayer) & typeof L.Class;
