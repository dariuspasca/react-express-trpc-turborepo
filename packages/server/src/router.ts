import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { text: `${input?.name ?? "world"}` };
    }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
