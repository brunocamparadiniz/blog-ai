import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/appLayout";

export default function NewPost(props) {
  console.log('test:', props);
  return (
    <div>
      <h1>new post</h1>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired (() => {
  return {
    props: {},
  }
})