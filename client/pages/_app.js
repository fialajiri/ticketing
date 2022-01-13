import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

export default AppComponent;

AppComponent.getInitialProps = async (appContenxt) => {
  const client = buildClient(appContenxt.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContenxt.Component.getInitialProps) {
    pageProps = await appContenxt.Component.getInitialProps(
      appContenxt.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    currentUser: data.currentUser,
  };
};
