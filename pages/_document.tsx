import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  // useEffect(() => {
  //   const theme = getThemeModeFromLocaleStorage();
  // }, []);

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
