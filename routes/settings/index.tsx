import { Handlers } from "$fresh/server.ts"
import { getCookies } from "$std/http/cookie.ts"

import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"

import Account from "~/routes/settings/(_components)/Account.tsx"
import Theme from "~/routes/settings/(_components)/Theme.tsx"
import Language from "~/routes/settings/(_components)/Language.tsx"
import Debug from "~/routes/settings/(_components)/Debug.tsx"

import { env } from "~/env.ts"

export const handler: Handlers = {
  GET(req, ctx) {
    if (getCookies(req.headers).rBucketAuth !== env.PASSWORD) {
      const url = new URL(req.url)
      url.pathname = "/signin"
      return Response.redirect(url)
    }

    return ctx.render!()
  },
}

export default () => {
  return (
    <>
      <nav class="flex items-center mx-auto w-full max-w-5xl p-2 gap-2">
        <a href="/" class="flex items-center p-3 hover:bg-slate-800 rounded">
          <FaArrowLeft />
        </a>
        <h1 class="font-black text-2xl">Settings</h1>
      </nav>

      <main class="w-full max-w-5xl mx-auto">
        <Account />
        <Theme />
        <Language />
        <Debug />
      </main>
    </>
  )
}
