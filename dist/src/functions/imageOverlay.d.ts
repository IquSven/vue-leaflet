import type L from "leaflet";
import type { PropType } from "vue";
/**
 * @typedef {import('leaflet/dist/leaflet-src.esm.js').LatLngBounds} LatLngBounds
 */
export declare const imageOverlayProps: {
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
    alt: {
        type: StringConstructor;
    };
    interactive: {
        type: BooleanConstructor;
        default: undefined;
    };
    crossOrigin: {
        type: BooleanConstructor;
        default: undefined;
    };
    errorOverlayUrl: {
        type: StringConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
    className: {
        type: StringConstructor;
    };
    url: {
        type: StringConstructor;
        required: boolean;
        custom: boolean;
    };
    bounds: {
        type: PropType<L.LatLngBoundsExpression>;
        required: boolean;
        custom: boolean;
    };
};
export declare const setupImageOverlay: (props: any, leafletRef: any, context: any) => {
    options: L.ImageOverlayOptions;
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
        setOpacity(opacity: any): any;
        setUrl(url: any): any;
        setBounds(bounds: any): any;
        getBounds(): any;
        getElement(): any;
        bringToFront(): any;
        bringToBack(): any;
        setZIndex(zIndex: any): any;
    };
};
