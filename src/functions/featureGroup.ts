import type L from "leaflet";

import { propsToLeafletOptions } from "@src/utils";

import { layerGroupProps, setupLayerGroup } from "./layerGroup";

export const featureGroupProps = Object.assign(
  {}, layerGroupProps,
);

export const setupFeatureGroup = (props, leafletRef, context) => {
  const { options: layerOptions, methods: layerGroupMethods } = setupLayerGroup(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions<L.InteractiveLayerOptions>(
    props,
    featureGroupProps,
    layerOptions
  );

  const methods = Object.assign({}, layerGroupMethods);

  return { options, methods };
};
