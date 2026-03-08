import { PowerFlowCardCascadeConfig } from "@/power-flow-card-cascade-config";
import { EntityType } from "@/type";

export const isEntityInverted = (config: PowerFlowCardCascadeConfig, entityType: EntityType) => !!config.entities[entityType]?.invert_state;
