// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $SearchHeroe from "./routes/SearchHeroe.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $addHeroe from "./routes/addHeroe.tsx";
import * as $api_DeleteHeroe from "./routes/api/DeleteHeroe.ts";
import * as $index from "./routes/index.tsx";
import * as $search_name_ from "./routes/search/[name].tsx";
import * as $DeleteHero from "./islands/DeleteHero.tsx";
import * as $Form from "./islands/Form.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/SearchHeroe.tsx": $SearchHeroe,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/addHeroe.tsx": $addHeroe,
    "./routes/api/DeleteHeroe.ts": $api_DeleteHeroe,
    "./routes/index.tsx": $index,
    "./routes/search/[name].tsx": $search_name_,
  },
  islands: {
    "./islands/DeleteHero.tsx": $DeleteHero,
    "./islands/Form.tsx": $Form,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
