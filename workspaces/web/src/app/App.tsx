import { Effect, EffectState, LogicalSize, UserAttentionType, getCurrent } from "@tauri-apps/api/window";
import "./App.css";
import { createSignal, onMount } from "solid-js";
import { invoke } from "@tauri-apps/api/primitives";

const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));


const App = () => {
  const [maximized, setMaximized] = createSignal(false);

  onMount(async () => {
    const appWindow = getCurrent();
    appWindow.onResized(() => appWindow.isMaximized().then(setMaximized));

    await appWindow.show();
  });

  return (
    <>
      <header data-tauri-drag-region>
        <div class="title">
          {/* <div class="icon"></div> */}
          <img class="icon" src="/icon.png"></img>
          <div class="name">blendl</div>
        </div>
        <div class="search">
          <input class="box" type="text"></input>
        </div>
        <div class="buttons">
          <div class="button" onClick={() => getCurrent().minimize()}><svg width={16} height={16} viewBox="0 0 16 16" shape-rendering="crispEdges">
              <text fill="white" font-family="Segoe Fluent Icons" font-size="10px" x={3} y={13}></text>
            </svg></div>
            <div class="button" onClick={() => getCurrent().toggleMaximize()}><svg width={16} height={16} viewBox="0 0 16 16" shape-rendering="crispEdges">
              <text fill="white" font-family="Segoe Fluent Icons" font-size="10px" x={3} y={13}>{maximized() ? "" : ""}</text>
            </svg></div>
          <div class="button" onClick={() => getCurrent().close()}>
            <svg width={16} height={16} viewBox="0 0 16 16" shape-rendering="crispEdges">
              <text fill="white" font-family="Segoe Fluent Icons" font-size="10px" x={3} y={13}></text>
            </svg>
          </div>
        </div>
      </header>
    </>
  )
}

export default App;
