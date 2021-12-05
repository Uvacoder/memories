import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          {/* <link rel="icon" href=" /FuegoCreatorsMark.png" />
          <meta name="theme-color" content="#70503C" />
          <meta property="description" content="Fuego Creators - The future home for musicans, writers, artists, and all creators to collaborate and share their work with like-minded individuals." />
          <meta property="og:title" content="Fuego Creators" />
          <meta property="og:theme-color" content="#70503C" />
          <meta property="og:url" content=" " />
          <meta property="og:description" content="Fuego Creators - The future home for musicans, writers, artists, and all creators to collaborate and share their work with like-minded individuals." />
          <meta property="og:thumbnail" content=" /FuegoCreatorsMark.png" />

          <link rel="apple-touch-icon" href=" /FuegoCreatorsMark.png" />
          <script async src="https://arc.io/widget.min.js#D6BWVfFW"></script> */}
        </Head>
        <body className="bodybg has-background-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument