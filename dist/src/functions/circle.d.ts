import type L from "leaflet";
export declare const circleProps: {
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
        /**
         * Radius of the circle in meters.
         */
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
    radius: {
        type: NumberConstructor;
    };
    latLng: {
        type: import("vue").PropType<L.LatLngExpression>;
        required: boolean;
        custom: boolean;
    };
} & {
    /**
     * Radius of the circle in meters.
     */
    radius: {
        type: NumberConstructor;
    };
};
export type LCircleProps = typeof circleProps;
export declare const setupCircle: (props: any, leafletRef: any, context: any) => {
    options: L.CircleOptions;
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
