import { SeasonBounty } from "content/SeasonBounty"
import { PageLayout } from "layouts/PageLayout"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <PageLayout>
        <SeasonBounty />
      </PageLayout>
    </>
  )
}

export default Home
