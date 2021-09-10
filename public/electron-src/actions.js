const { dialog } = require("electron");

const openFileFromFolder = async (event, mainWindow) => {
  const { filePaths, canceled } = await dialog.showOpenDialog(mainWindow, {
    properties: ["openFile", "openDirectory"],
  });
  event.reply("actionReply", JSON.stringify({ filePaths, canceled }));
};

module.exports = {
  openFileFromFolder,
};
