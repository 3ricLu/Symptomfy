import {
  constructFrom
} from "./chunk-SD3LJISK.js";

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

export {
  normalizeDates
};
//# sourceMappingURL=chunk-6VNLUQT6.js.map
