import type L from "leaflet";
/**
 * Marker component, lets you add and personalize markers on the map
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
    draggable: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: {
        type: import("vue").PropType<L.Icon<L.IconOptions>>;
    };
    zIndexOffset: {
        type: NumberConstructor;
    };
    latLng: {
        type: import("vue").PropType<L.LatLngExpression>;
        custom: boolean;
        required: boolean;
    };
}, {
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.Marker<any> | undefined>;
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
    draggable: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: {
        type: import("vue").PropType<L.Icon<L.IconOptions>>;
    };
    zIndexOffset: {
        type: NumberConstructor;
    };
    latLng: {
        type: import("vue").PropType<L.LatLngExpression>;
        custom: boolean;
        required: boolean;
    };
}>>, {
    readonly options: Record<string, any>;
    visible: boolean;
    draggable: boolean;
}>;
export default _sfc_main;
