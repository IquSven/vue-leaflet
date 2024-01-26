import type L from "leaflet";
import type { PropType } from "vue";
export declare const markerProps: {
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
    draggable: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: {
        type: PropType<L.Icon<L.IconOptions>>;
    };
    zIndexOffset: {
        type: NumberConstructor;
    };
    latLng: {
        type: PropType<L.LatLngExpression>;
        custom: boolean;
        required: boolean;
    };
};
export declare const setupMarker: (props: any, leafletRef: any, context: any) => {
    options: L.MarkerOptions;
    methods: {
        setAttribution(val: any): void;
        setName(): void;
        setLayerType(): void;
        setVisible(isVisible: any): void;
        bindPopup(leafletObject: any): void;
        bindTooltip(leafletObject: any): void;
        unbindTooltip(): void;
        unbindPopup(): void;
        updateVisibleProp(value: any): void;
    } & {
        setDraggable(value: any): void;
        latLngSync(event: any): void;
        setLatLng(newVal: any): void;
    };
};
/**
 * Determine whether the default Leaflet icon should be replaced with a blank div initially.
 *
 * @param {*} options Options object returned by setupMarker
 * @param {*} context Context object returned by setupMarker
 * @returns boolean
 */
export declare const shouldBlankIcon: (options: any, context: any) => any;
