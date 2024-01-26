import type L from "leaflet";
declare const _sfc_main: import("vue").DefineComponent<{
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
    prefix: {
        type: StringConstructor;
    };
}, {
    leafletObject: import("vue").Ref<L.Control.Attribution | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    prefix: {
        type: StringConstructor;
    };
}>>, {
    readonly options: Record<string, any>;
}>;
export default _sfc_main;
