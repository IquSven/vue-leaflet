import type L from "leaflet";
/**
 * Display a popup on the map
 */
declare const _sfc_main: import("vue").DefineComponent<{
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
} & {
    content: {
        type: StringConstructor;
        default: null;
    };
} & {
    latLng: {
        type: import("vue").PropType<L.LatLngExpression>;
        default: () => never[];
    };
}, {
    root: import("vue").Ref<null>;
    leafletObject: import("vue").Ref<L.Popup | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
} & {
    content: {
        type: StringConstructor;
        default: null;
    };
} & {
    latLng: {
        type: import("vue").PropType<L.LatLngExpression>;
        default: () => never[];
    };
}>>, {
    readonly options: Record<string, any>;
    latLng: L.LatLngExpression;
    content: string;
}>;
export default _sfc_main;
