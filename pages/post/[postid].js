import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Post() {
  return (
  <div>
    <h1>post page</h1>
  </div>
  )
}

export const getServerSideProps = withPageAuthRequired (() => {
  return {
    props: {},
  }
})