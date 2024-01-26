import type L from "leaflet";
/**
 * Rectangle component, lets you add and customize rectangular regions on the map
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
    interactive: {
        type: BooleanConstructor;
        default: undefined;
    };
    bubblingMouseEvents: {
        type: BooleanConstructor;
        default: undefined;
    };
} & {
    stroke: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: {
        /**
         * Rectangle component, lets you add and customize rectangular regions on the map
         */
        type: StringConstructor;
    };
    weight: {
        type: NumberConstructor;
    };
    opacity: {
        type: NumberConstructor;
    };
    lineCap: {
        type: StringConstructor;
    };
    lineJoin: {
        type: StringConstructor;
    };
    dashArray: {
        type: StringConstructor;
    };
    dashOffset: {
        type: StringConstructor;
    };
    fill: {
        type: BooleanConstructor;
        default: undefined;
    };
    fillColor: {
        type: StringConstructor;
    };
    fillOpacity: {
        type: NumberConstructor;
    };
    fillRule: {
        type: StringConstructor;
    };
    className: {
        type: StringConstructor;
    };
} & {
    smoothFactor: {
        type: NumberConstructor;
    };
    noClip: {
        type: BooleanConstructor;
        default: undefined;
    };
    latLngs: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        required: boolean;
        custom: boolean;
    };
} & {
    latLngs: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        required: boolean;
        custom: boolean;
    } & {
        required: boolean;
    };
    bounds: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        custom: boolean;
    };
}, {
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.Rectangle<any> | undefined>;
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
    interactive: {
        type: BooleanConstructor;
        default: undefined;
    };
    bubblingMouseEvents: {
        type: BooleanConstructor;
        default: undefined;
    };
} & {
    stroke: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: {
        /**
         * Rectangle component, lets you add and customize rectangular regions on the map
         */
        type: StringConstructor;
    };
    weight: {
        type: NumberConstructor;
    };
    opacity: {
        type: NumberConstructor;
    };
    lineCap: {
        type: StringConstructor;
    };
    lineJoin: {
        type: StringConstructor;
    };
    dashArray: {
        type: StringConstructor;
    };
    dashOffset: {
        type: StringConstructor;
    };
    fill: {
        type: BooleanConstructor;
        default: undefined;
    };
    fillColor: {
        type: StringConstructor;
    };
    fillOpacity: {
        type: NumberConstructor;
    };
    fillRule: {
        type: StringConstructor;
    };
    className: {
        type: StringConstructor;
    };
} & {
    smoothFactor: {
        type: NumberConstructor;
    };
    noClip: {
        type: BooleanConstructor;
        default: undefined;
    };
    latLngs: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        required: boolean;
        custom: boolean;
    };
} & {
    latLngs: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        required: boolean;
        custom: boolean;
    } & {
        required: boolean;
    };
    bounds: {
        type: import("vue").PropType<L.LatLngExpression[]>;
        custom: boolean;
    };
}>>, {
    fill: boolean;
    readonly options: Record<string, any>;
    visible: boolean;
    interactive: boolean;
    bubblingMouseEvents: boolean;
    stroke: boolean;
    noClip: boolean;
}>;
export default _sfc_main;
