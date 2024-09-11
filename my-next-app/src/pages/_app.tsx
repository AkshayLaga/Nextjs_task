import React, { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import store from '../store/Store';
import { Provider } from 'react-redux';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = ({ Component, pageProps: {...pageProps } }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  

  return (
    <Fragment>
    <ColorModeContext.Provider value={colorMode} >
      <Provider store={store}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ColorModeContext.Provider>
    </Fragment>
  );
};
export default App;
