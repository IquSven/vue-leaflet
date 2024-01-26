import type L from "leaflet";
import type { PropType } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { layerProps, setupLayer } from "./layer";

/**
 * @typedef {import('leaflet/dist/leaflet-src.esm.js').LatLngBounds} LatLngBounds
 */

export const imageOverlayProps = Object.assign(
  {},
  layerProps,
  {
    opacity: {
      type: Number,
    },
    alt: {
      type: String,
    },
    interactive: {
      type: Boolean,
      default: undefined,
    },
    crossOrigin: {
      type: Boolean,
      default: undefined,
    },
    errorOverlayUrl: {
      type: String,
    },
    zIndex: {
      type: Number,
    },
    className: {
      type: String,
    },
    url: {
      type: String,
      required: true,
      custom: true,
    },
    bounds: {
      type: [Array, Object] as PropType<L.LatLngBoundsExpression>,
      required: true,
      custom: true,
    },
  }
);

export const setupImageOverlay = (props, leafletRef, context) => {
  const { options: layerOptions, methods: layerMethods } = setupLayer(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions<L.ImageOverlayOptions>(
    props,
    imageOverlayProps,
    layerOptions
  );

  const methods = Object.assign(
    {},
    layerMethods,
    {
      setOpacity(opacity) {
        return leafletRef.value.setOpacity(opacity);
      },
      setUrl(url) {
        return leafletRef.value.setUrl(url);
      },
      setBounds(bounds) {
        return leafletRef.value.setBounds(bounds);
      },
      getBounds() {
        return leafletRef.value.getBounds();
      },
      getElement() {
        return leafletRef.value.getElement();
      },
      bringToFront() {
        return leafletRef.value.bringToFront();
      },
      bringToBack() {
        return leafletRef.value.bringToBack();
      },
      setZIndex(zIndex) {
        return leafletRef.value.setZIndex(zIndex);
      },
    }
  );

  return { options, methods };
};
