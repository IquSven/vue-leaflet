import type L from "leaflet";
/**
 * ImageOverlay component, render a plain image instead of a geospatial map.
 */
declare const _sfc_main: import("vue").DefineComponent<{
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
        type: import("vue").PropType<L.LatLngBoundsExpression>;
        required: boolean;
        custom: boolean;
    };
}, {
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.ImageOverlay | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<L.LatLngBoundsExpression>;
        required: boolean;
        custom: boolean;
    };
}>>, {
    readonly options: Record<string, any>;
    visible: boolean;
    interactive: boolean;
    crossOrigin: boolean;
}>;
export default _sfc_main;
