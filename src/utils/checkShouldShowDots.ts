import { PowerFlowCardCascadeConfig } from "../power-flow-card-cascade-config";

export const checkShouldShowDots = (config: PowerFlowCardCascadeConfig) => {
  return config.disable_dots !== true;
};
