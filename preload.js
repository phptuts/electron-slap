const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("communication", {
  message: (settings) => ipcRenderer.invoke("settings", settings),
  // we can also expose variables, not just functions
});
