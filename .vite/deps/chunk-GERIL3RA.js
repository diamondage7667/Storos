import {
  require_react
} from "./chunk-P4I6WM76.js";
import {
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React = __toESM(require_react(), 1);
var useLayoutEffect2 = (globalThis == null ? void 0 : globalThis.document) ? React.useLayoutEffect : () => {
};

export {
  composeEventHandlers,
  useLayoutEffect2
};
//# sourceMappingURL=chunk-GERIL3RA.js.map
