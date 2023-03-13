import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/appLayout";

export default function TokenTopup() {
  return (
    <div>
      <h1>top up page</h1>
    </div>
  );
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired (() => {
  return {
    props: {},
  }
})