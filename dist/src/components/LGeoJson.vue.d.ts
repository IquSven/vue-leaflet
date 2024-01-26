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
    geojson: {
        type: import("vue").PropType<import("geojson").GeoJsonObject | import("geojson").GeoJsonObject[]>;
        custom: boolean;
    };
    optionsStyle: {
        type: import("vue").PropType<L.StyleFunction<any>>;
        custom: boolean;
    };
}, {
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.GeoJSON<any, import("geojson").Geometry> | undefined>;
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
    geojson: {
        type: import("vue").PropType<import("geojson").GeoJsonObject | import("geojson").GeoJsonObject[]>;
        custom: boolean;
    };
    optionsStyle: {
        type: import("vue").PropType<L.StyleFunction<any>>;
        custom: boolean;
    };
}>>, {
    readonly options: Record<string, any>;
    visible: boolean;
}>;
export default _sfc_main;
