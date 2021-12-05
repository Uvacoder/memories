import Head from "next/head"
import Profile from "../components/Profile"

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function UserProfile() {
  return (
    <div>
      <Head>
        <title>User Profile</title>
      </Head>

      <Profile />
    </div>
  )
})
