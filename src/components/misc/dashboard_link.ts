import { html } from "lit";
import { PowerFlowCardCascadeConfig } from "@/power-flow-card-cascade-config";
import { HomeAssistant } from "custom-card-helpers";

export const dashboardLinkElement = (config: PowerFlowCardCascadeConfig, hass: HomeAssistant) => {
  return config.dashboard_link || config.second_dashboard_link
    ? html`
        <div class="card-actions">
          ${config.dashboard_link
            ? html`
                <ha-button appearance="plain" size="small" href=${config.dashboard_link}>
                  ${config.dashboard_link_label || hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                </ha-button>
              `
            : ""}
          ${config.second_dashboard_link
            ? html`
                <ha-button appearance="plain" size="small" href=${config.second_dashboard_link}>
                  ${config.second_dashboard_link_label || hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                </ha-button>
              `
            : ""}
        </div>
      `
    : html``;
};
