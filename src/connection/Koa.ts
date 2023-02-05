import Cors from "@koa/cors";
import Application from "koa";
import Koa, { Context } from "koa";
import Router from "koa-router";
import { koaBody } from "koa-body";

const App: Application = new Koa();
export const R = new Router();

App.use(Cors());
App.use(koaBody());
App.use(R.routes());
App.use(R.allowedMethods());

App.on("error", (err, ctx: Context) => {
  console.log({ status: err, route: ctx });
});

App.listen(process.env.PORT || 5000, () => {
  console.log("Listening to : ", process.env.PORT || 5000);
});
