import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Sono } from "@next/font/google";

const sono = Sono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: ["--font-sono"],
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <main className={`${sono.variable} font-body`}>{getLayout(<Component {...pageProps} />, pageProps)}</main>
    </UserProvider>
  );
}

export default MyApp;
