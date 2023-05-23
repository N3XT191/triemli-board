import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware({
	users: [{ name: "triemli", password: "Triemli2022" }],
});

export const config = {
	// Replace this with your own matcher logic
	matcher: ["/(.*)"],
};
