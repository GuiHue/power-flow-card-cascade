import { HomeAssistant } from "custom-card-helpers";
import { getSecondaryState } from "./base";
import { PowerFlowCardCascadeConfig } from "@/power-flow-card-cascade-config";

export const getHomeSecondaryState = (hass: HomeAssistant, config: PowerFlowCardCascadeConfig) => getSecondaryState(hass, config, "home");
