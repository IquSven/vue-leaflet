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
    maxWidth: {
        type: NumberConstructor;
    };
    metric: {
        type: BooleanConstructor;
        default: undefined;
    };
    imperial: {
        type: BooleanConstructor;
        default: undefined;
    };
    updateWhenIdle: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    leafletObject: import("vue").Ref<L.Control.Scale | undefined>;
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
    maxWidth: {
        type: NumberConstructor;
    };
    metric: {
        type: BooleanConstructor;
        default: undefined;
    };
    imperial: {
        type: BooleanConstructor;
        default: undefined;
    };
    updateWhenIdle: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    readonly options: Record<string, any>;
    metric: boolean;
    imperial: boolean;
    updateWhenIdle: boolean;
}>;
export default _sfc_main;
