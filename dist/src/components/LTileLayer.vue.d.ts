import type L from "leaflet";
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
}, {
    leafletObject: import("vue").Ref<L.TileLayer | undefined>;
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
}>>, {
    readonly options: Record<string, any>;
    visible: boolean;
    noWrap: boolean;
    tms: boolean;
    detectRetina: boolean;
}>;
export default _sfc_main;
