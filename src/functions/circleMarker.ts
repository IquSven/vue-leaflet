import type L from "leaflet";
import type { PropType } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { pathProps, setupPath as pathSetup } from "./path";

export const circleMarkerProps = Object.assign({}, pathProps, {
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number,
  },
  latLng: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
    required: true,
    custom: true,
  },
});

export type LCircleMarkerProps = typeof circleMarkerProps;

export const setupCircleMarker = (props, leafletRef, context) => {
  const { options: pathOptions, methods: pathMethods } = pathSetup(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions<L.CircleMarkerOptions>(
    props,
    circleMarkerProps,
    pathOptions
  );

  const methods = Object.assign({}, pathMethods, {
    setRadius(radius) {
      leafletRef.value.setRadius(radius);
    },
    setLatLng(latLng) {
      leafletRef.value.setLatLng(latLng);
    },
  });

  return { options, methods };
};
