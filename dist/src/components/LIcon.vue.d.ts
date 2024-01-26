import type L from "leaflet";
/**
 * Icon component, lets you add and custom icons to the map
 */
declare const _sfc_main: import("vue").DefineComponent<{
    readonly iconUrl: {
        readonly type: StringConstructor;
    };
    readonly iconRetinaUrl: {
        readonly type: StringConstructor;
    };
    readonly iconSize: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly iconAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly popupAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly tooltipAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly shadowUrl: {
        readonly type: StringConstructor;
    };
    readonly shadowRetinaUrl: {
        readonly type: StringConstructor;
    };
    readonly shadowSize: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly shadowAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly bgPos: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
} & {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
}, {
    root: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly iconUrl: {
        readonly type: StringConstructor;
    };
    readonly iconRetinaUrl: {
        readonly type: StringConstructor;
    };
    readonly iconSize: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly iconAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly popupAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly tooltipAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly shadowUrl: {
        readonly type: StringConstructor;
    };
    readonly shadowRetinaUrl: {
        readonly type: StringConstructor;
    };
    readonly shadowSize: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly shadowAnchor: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly bgPos: {
        readonly type: import("vue").PropType<L.PointExpression>;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
} & {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
}>>, {
    readonly options: Record<string, any>;
}>;
export default _sfc_main;
