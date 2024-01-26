import type L from "leaflet";
import { type PropType } from "vue";
import { type VueGridLayerTileRenderer } from '../functions/gridLayer';
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
        type: PropType<import("../types/enums/LayerType").LayerType>;
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
        type: PropType<Number | L.PointExpression>;
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
    childRender: {
        type: PropType<VueGridLayerTileRenderer>;
        required: boolean;
    };
}, {
    root: import("vue").Ref<null>;
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.GridLayer | undefined>;
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
        type: PropType<import("../types/enums/LayerType").LayerType>;
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
        type: PropType<Number | L.PointExpression>;
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
    childRender: {
        type: PropType<VueGridLayerTileRenderer>;
        required: boolean;
    };
}>>, {
    readonly options: Record<string, any>;
    visible: boolean;
    noWrap: boolean;
}>;
export default _sfc_main;
