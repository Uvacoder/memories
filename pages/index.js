import Head from "next/head"
import { useUser } from "@auth0/nextjs-auth0"


export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      <Head>
        <title>Memory Log</title>
      </Head>

      <div className={"container content introText"}>
        <h1>Memory Log</h1>
        <p>A simple tool to help you remember things.</p>
      </div>

      {/* {user ? <Profile /> : ""} */}
    </div>
  )
}
