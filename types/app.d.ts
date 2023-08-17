declare global {
  export type Email = string;
  export type Id = number;

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */

  declare type RootState = import("../src/app/appStore").RootState;
  declare type AppDispatch = import("../src/app/appStore").AppDispatch;
}

export {};
