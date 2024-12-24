// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx"
import * as $_app from "./routes/_app.tsx"
import * as $api_auth_signin from "./routes/api/auth/signin.ts"
import * as $api_auth_signout from "./routes/api/auth/signout.ts"
import * as $index from "./routes/index.tsx"
import * as $settings_index from "./routes/settings/index.tsx"
import * as $signin from "./routes/signin.tsx"

import type { Manifest } from "$fresh/server.ts"

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/auth/signin.ts": $api_auth_signin,
    "./routes/api/auth/signout.ts": $api_auth_signout,
    "./routes/index.tsx": $index,
    "./routes/settings/index.tsx": $settings_index,
    "./routes/signin.tsx": $signin,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest

export default manifest
