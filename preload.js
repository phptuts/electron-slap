const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("communication", {
  setSettings: (settings) => ipcRenderer.invoke("settings", settings),
});
