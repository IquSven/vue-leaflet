import type L from "leaflet";
import { type PropType } from "vue";
export declare const controlProps: {
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
} & {
    position: {
        type: PropType<L.ControlPosition>;
    };
};
export declare const setupControl: (props: any, leafletRef: any) => {
    options: L.ControlOptions;
    methods: {
        setPosition(position: any): void;
    };
};
export declare const renderLControl: (slots: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null;
