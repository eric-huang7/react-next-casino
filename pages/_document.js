import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Slots Idol</title>
        </Head>
        <body>
        <Main />
        <NextScript />
        <script defer type="text/javascript" src="/chatWidget/chatWidget.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument

// TODO: add for all pages /*<script type="text/javascript" src="/chatWidget/chatWidget.js"></script>*/