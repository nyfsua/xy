import { Hono } from "hono";
import { handle, Ibody } from "./chat";

const app = new Hono();

app.post("/", async (c) => {
    const body = (await c.req.json()) as Ibody;
    try {
        console.log(JSON.stringify(body, null, 2));
        const response = await handle({
            env: c.env,
            request: body,
        });

        return c.json({
            response,
        });
    } catch (error) {
        console.log(error);
        return c.json({
            response: "check yout dis ting abeg",
        });
    }
});

export default app;