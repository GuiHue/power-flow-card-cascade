import { HomeAssistant } from "custom-card-helpers";
import { DisplayZeroLinesMode } from "../power-flow-card-cascade-config";

export const defaultValues = {
  maxFlowRate: 6,
  minFlowRate: 0.75,
  wattDecimals: 0,
  kilowattDecimals: 1,
  minExpectedPower: 0.01,
  maxExpectedPower: 2000,
  wattThreshold: 1000,
  transparencyZeroLines: 0,
  displayZeroLines: {
    mode: "show" as DisplayZeroLinesMode,
    transparency: 50,
    grey_color: [189, 189, 189],
  },
};

export function getDefaultConfig(_hass: HomeAssistant): object {
  return {
    entities: {},
    clickable_entities: true,
    display_zero_lines: {
      mode: defaultValues.displayZeroLines.mode,
      transparency: defaultValues.displayZeroLines.transparency,
      grey_color: defaultValues.displayZeroLines.grey_color,
    },
    use_new_flow_rate_model: true,
    w_decimals: defaultValues.wattDecimals,
    kw_decimals: defaultValues.kilowattDecimals,
    min_flow_rate: defaultValues.minFlowRate,
    max_flow_rate: defaultValues.maxFlowRate,
    max_expected_power: defaultValues.maxExpectedPower,
    min_expected_power: defaultValues.minExpectedPower,
    watt_threshold: defaultValues.wattThreshold,
    sort_individual_devices: false,
  };
}
