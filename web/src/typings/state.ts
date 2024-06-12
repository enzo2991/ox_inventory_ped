import { Inventory } from './inventory';

export type State = {
  leftInventory: Inventory;
  midInventory: Inventory;
  rightInventory: Inventory;
  itemAmount: number;
  shiftPressed: boolean;
  isBusy: boolean;
  additionalMetadata: Array<{ metadata: string; value: string }>;
  history?: {
    leftInventory: Inventory;
    midInventory: Inventory;
    rightInventory: Inventory;
  };
};
