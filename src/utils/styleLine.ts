import { PowerFlowCardCascadeConfig } from "../power-flow-card-cascade-config";

export const styleLine = (power: number, config: PowerFlowCardCascadeConfig): string => {
  if (power > 0) return "";
  const displayZeroMode = config?.display_zero_lines?.mode;
  if (displayZeroMode === "show" || displayZeroMode === undefined) return "";
  let styleclass = "";
  if (displayZeroMode === "transparency" || displayZeroMode === "custom") {
    const transparency = config?.display_zero_lines?.transparency;
    if (transparency ?? 50 > 0) styleclass += "transparency ";
  }
  if (displayZeroMode === "grey_out" || displayZeroMode === "custom") {
    styleclass += "grey";
  }
  return styleclass;
};
