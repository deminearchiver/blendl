interface TauriInternals {
  plugins: {
    [name: string]: never;
  };
  convertFileSrc: typeof import("@tauri-apps/api/primitives").convertFileSrc;
  invoke: typeof import("@tauri-apps/api/primitives").invoke;
  ipc: (...args: never) => never;
}

interface Window {
  __TAURI_INTERNALS__: TauriInternals;
}
