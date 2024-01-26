export declare const tooltipProps: {
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
export declare const setupTooltip: (props: any, leafletRef: any) => {
    options: any;
    methods: {
        setContent(newVal: any): void;
    };
};
