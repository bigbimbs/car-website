import "./assets/styles/global.css";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
