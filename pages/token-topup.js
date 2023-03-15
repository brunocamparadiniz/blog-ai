import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/appLayout";

export default function TokenTopup() {
  const handleClick = async () => {
    await fetch(`/api/addTokens`, {
      method: "POST",
    }) 
  }
  return (
    <div>
      <h1>top up page</h1>
      <button className="btn text-white" onClick={handleClick}>Add Tokens</button>
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