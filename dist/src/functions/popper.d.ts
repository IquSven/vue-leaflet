export declare const popperProps: {
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
};
export declare const setupPopper: (props: any, leafletRef: any) => {
    options: any;
    methods: {
        setContent(newVal: any): void;
    };
};
export declare const render: (slots: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null;
