import { HomeAssistant } from "custom-card-helpers";
import { PowerFlowCardCascadeConfig } from "@/power-flow-card-cascade-config";
import { getFieldInState, getFieldOutState } from "./base";
import { getEntityState } from "../utils/getEntityState";

export const getBatteryStateOfCharge = (hass: HomeAssistant, config: PowerFlowCardCascadeConfig) => {
  const entity = config.entities.battery?.state_of_charge;

  if (entity === undefined) return null;

  return getEntityState(hass, entity);
};

export const getBatteryInState = (hass: HomeAssistant, config: PowerFlowCardCascadeConfig) => getFieldInState(hass, config, "battery");

export const getBatteryOutState = (hass: HomeAssistant, config: PowerFlowCardCascadeConfig) => getFieldOutState(hass, config, "battery");
