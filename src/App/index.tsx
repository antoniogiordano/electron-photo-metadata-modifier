import React, { memo, useEffect } from "react";
import { Button, MuiThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import AppSnackbar from "components/AppSnackbar";
import useAppHooks from "./index.hooks";
const { ipcRenderer } = window.require("electron");

const App: React.FC = () => {
  const { theme } = useAppHooks();

  useEffect(() => {
    ipcRenderer.once("actionReply", function (event, response) {
      alert(JSON.stringify(response));
    });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <div>
            <Button
              onClick={() => {
                ipcRenderer.send("invokeAction", "someData");
              }}
            >
              Open
            </Button>
          </div>
        </Route>
      </Switch>
      <AppSnackbar />
    </MuiThemeProvider>
  );
};

export default memo(App);
