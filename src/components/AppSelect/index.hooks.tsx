import { useMemo } from "react";
import { useTheme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { useAtomicStyles } from "styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginTop: 15,
      minWidth: 120,
    },
  }),
);

const useAppSelect = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const classes = useMemo(() => ({}), []);
  const atomicStyles = useAtomicStyles();

  return {
    styles,
    classes,
    atomicStyles,
  };
};

export { useAppSelect as default };
