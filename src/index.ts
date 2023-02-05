import { Context } from "koa";
import { R } from "./connection/Koa";

const main = () => {
  R.get("/", async (ctx: Context) => {
    return (ctx.body = { status: "alive" });
  });
};

main();
