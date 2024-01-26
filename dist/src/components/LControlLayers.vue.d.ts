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
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    autoZIndex: {
        type: BooleanConstructor;
        default: undefined;
    };
    hideSingleBase: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortLayers: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortFunction: {
        type: FunctionConstructor;
    };
}, {
    leafletObject: import("vue").Ref<L.Control.Layers | undefined>;
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
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    autoZIndex: {
        type: BooleanConstructor;
        default: undefined;
    };
    hideSingleBase: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortLayers: {
        type: BooleanConstructor;
        default: undefined;
    };
    sortFunction: {
        type: FunctionConstructor;
    };
}>>, {
    readonly options: Record<string, any>;
    collapsed: boolean;
    autoZIndex: boolean;
    hideSingleBase: boolean;
    sortLayers: boolean;
}>;
export default _sfc_main;
