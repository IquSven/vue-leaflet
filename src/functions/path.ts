import type L from "leaflet";
import { onBeforeUnmount } from "vue";

import { RemoveLayerInjection } from "@src/types/injectionKeys";
import { assertInject, propsToLeafletOptions } from "@src/utils";

import {
  interactiveLayerProps,
  setupInteractiveLayer,
} from "./interactiveLayer";

export const pathProps = Object.assign(
  {},
  interactiveLayerProps,
  {
    stroke: {
      type: Boolean,
      default: undefined,
    },
    color: {
      type: String,
    },
    weight: {
      type: Number,
    },
    opacity: {
      type: Number,
    },
    lineCap: {
      type: String,
    },
    lineJoin: {
      type: String,
    },
    dashArray: {
      type: String,
    },
    dashOffset: {
      type: String,
    },
    fill: {
      type: Boolean,
      default: undefined,
    },
    fillColor: {
      type: String,
    },
    fillOpacity: {
      type: Number,
    },
    fillRule: {
      type: String,
    },
    className: {
      type: String,
    },
  }
);

export const setupPath = (props, leafletRef, context) => {
  const { options: interactiveLayerOptions, methods: interactiveLayerMethods } =
    setupInteractiveLayer(props, leafletRef, context);

  const options = propsToLeafletOptions<L.PathOptions>(
    props,
    pathProps,
    interactiveLayerOptions
  );

  const removeLayer = assertInject(RemoveLayerInjection);
  const methods = Object.assign(
    {},
    interactiveLayerMethods,
    {
      setStroke(stroke) {
        leafletRef.value.setStyle({ stroke });
      },
      setColor(color) {
        leafletRef.value.setStyle({ color });
      },
      setWeight(weight) {
        leafletRef.value.setStyle({ weight });
      },
      setOpacity(opacity) {
        leafletRef.value.setStyle({ opacity });
      },
      setLineCap(lineCap) {
        leafletRef.value.setStyle({ lineCap });
      },
      setLineJoin(lineJoin) {
        leafletRef.value.setStyle({ lineJoin });
      },
      setDashArray(dashArray) {
        leafletRef.value.setStyle({ dashArray });
      },
      setDashOffset(dashOffset) {
        leafletRef.value.setStyle({ dashOffset });
      },
      setFill(fill) {
        leafletRef.value.setStyle({ fill });
      },
      setFillColor(fillColor) {
        leafletRef.value.setStyle({ fillColor });
      },
      setFillOpacity(fillOpacity) {
        leafletRef.value.setStyle({ fillOpacity });
      },
      setFillRule(fillRule) {
        leafletRef.value.setStyle({ fillRule });
      },
      setClassName(className) {
        leafletRef.value.setStyle({ className });
      },
    }
  );

  onBeforeUnmount(() => {
    removeLayer({ leafletObject: leafletRef.value });
  });

  return { options, methods };
};
