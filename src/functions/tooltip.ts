import { onBeforeUnmount } from "vue";

import { UnbindTooltipInjection } from "@src/types/injectionKeys";
import { assertInject } from "@src/utils";

import { popperProps, setupPopper } from "./popper";

export const tooltipProps = Object.assign({}, popperProps);

export const setupTooltip = (props, leafletRef) => {
  const { options, methods } = setupPopper(props, leafletRef);

  const unbindTooltip = assertInject(UnbindTooltipInjection);

  onBeforeUnmount(() => {
    unbindTooltip();
  });

  return { options, methods };
};
