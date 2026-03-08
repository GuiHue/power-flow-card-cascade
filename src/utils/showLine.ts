import { PowerFlowCardCascadeConfig } from "../power-flow-card-cascade-config";

export const showLine = (config: PowerFlowCardCascadeConfig, power: number): boolean => {
  if (power > 0) return true;
  return config?.display_zero_lines?.mode !== "hide";
};
