import type L from "leaflet";
import { type PropType, h, onUnmounted } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { componentProps, setupComponent } from "./component";

export const controlProps = Object.assign(
  {},
  componentProps,
  {
    position: {
      type: String as PropType<L.ControlPosition>,
    },
  }
);

export const setupControl = (props, leafletRef) => {
  const { options: componentOptions, methods: componentMethods } =
    setupComponent(props);

  const options = propsToLeafletOptions<L.ControlOptions>(
    props,
    controlProps,
    componentOptions
  );

  const methods = Object.assign(
    {},
    componentMethods,
    {
      setPosition(position) {
        if (leafletRef.value) {
          leafletRef.value.setPosition(position);
        }
      },
    }
  );

  onUnmounted(() => {
    if (leafletRef.value) {
      leafletRef.value.remove();
    }
  });

  return { options, methods };
};

export const renderLControl = (slots) => {
  if (slots.default) {
    return h("div", { ref: "root" }, slots.default());
  }

  return null;
};
