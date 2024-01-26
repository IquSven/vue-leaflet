import type { GeoJsonObject } from "geojson";
import type L from "leaflet";
import type { PropType } from "vue";
export declare const geoJSONProps: {
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
    geojson: {
        type: PropType<GeoJsonObject | GeoJsonObject[]>;
        custom: boolean;
    };
    optionsStyle: {
        type: PropType<L.StyleFunction<any>>;
        custom: boolean;
    };
};
export declare const setupGeoJSON: (props: any, leafletRef: any, context: any) => {
    options: L.GeoJSONOptions<any, import("geojson").Geometry>;
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
        addLayer(layer: any): void;
        removeLayer(layer: any): void;
    } & {
        setGeojson(newVal: any): void;
        setOptionsStyle(newVal: any): void;
        getGeoJSONData(): any;
        getBounds(): any;
    };
};
