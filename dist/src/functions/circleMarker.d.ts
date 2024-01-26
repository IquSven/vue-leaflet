import type L from "leaflet";
import type { PropType } from "vue";
export declare const circleMarkerProps: {
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
    /**
     * Radius of the marker in pixels.
     */
    radius: {
        type: NumberConstructor;
    };
    latLng: {
        type: PropType<L.LatLngExpression>;
        required: boolean;
        custom: boolean;
    };
};
export type LCircleMarkerProps = typeof circleMarkerProps;
export declare const setupCircleMarker: (props: any, leafletRef: any, context: any) => {
    options: L.CircleMarkerOptions;
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
        setStroke(stroke: any): void;
        setColor(color: any): void;
        setWeight(weight: any): void;
        setOpacity(opacity: any): void;
        setLineCap(lineCap: any): void;
        setLineJoin(lineJoin: any): void;
        setDashArray(dashArray: any): void;
        setDashOffset(dashOffset: any): void;
        setFill(fill: any): void;
        setFillColor(fillColor: any): void;
        setFillOpacity(fillOpacity: any): void;
        setFillRule(fillRule: any): void;
        setClassName(className: any): void;
    } & {
        setRadius(radius: any): void;
        setLatLng(latLng: any): void;
    };
};
