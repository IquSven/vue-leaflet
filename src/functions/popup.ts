import type L from "leaflet";
import type { PropType } from "vue";

import { popperProps, setupPopper } from "./popper";

export const popupProps = Object.assign({}, popperProps, {
  latLng: {
    type: [Object, Array] as PropType<L.LatLngExpression>,
    default: () => [],
  },
});

export const setupPopup = (props, leafletRef) => {
  const { options, methods } = setupPopper(props, leafletRef);

  return { options, methods };
};
