import type L from "leaflet";
import type { PropType } from "vue";
export declare const popupProps: {
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
        type: PropType<L.LatLngExpression>;
        default: () => never[];
    };
};
export declare const setupPopup: (props: any, leafletRef: any) => {
    options: any;
    methods: {
        setContent(newVal: any): void;
    };
};
