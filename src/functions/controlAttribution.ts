import type L from "leaflet";

import { propsToLeafletOptions } from "@src/utils";

import { controlProps, setupControl } from "./control";

export const controlAttributionProps = Object.assign(
  {},
  controlProps,
  {
    prefix: {
      type: String,
    },
  }
);

export const setupControlAttribution = (props, leafletRef) => {
  const { options: controlOptions, methods: controlMethods } = setupControl(
    props,
    leafletRef
  );

  const options = propsToLeafletOptions<L.Control.AttributionOptions>(
    props,
    controlAttributionProps,
    controlOptions
  );

  const methods = Object.assign(
    {},
    controlMethods,
    {
      setPrefix(prefix) {
        leafletRef.value.setPrefix(prefix);
      },
    }
  );

  return { options, methods };
};
