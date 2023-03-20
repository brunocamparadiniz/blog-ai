import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Quicksand } from "@next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { PostsProvider } from "../context/postsContext";
config.autoAddCss = false;

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: ["--font-quicksand"],
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <PostsProvider>
        <main className={`${quicksand.variable} font-body`}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
      </PostsProvider>
    </UserProvider>
  );
}

export default MyApp;
