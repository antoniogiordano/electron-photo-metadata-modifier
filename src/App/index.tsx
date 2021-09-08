import React, { memo } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import AppSnackbar from "components/AppSnackbar";
import useAppHooks from "./index.hooks";

const App: React.FC = () => {
  const { theme } = useAppHooks();

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <div>Test message ok</div>
        </Route>
      </Switch>
      <AppSnackbar />
    </MuiThemeProvider>
  );
};

export default memo(App);
