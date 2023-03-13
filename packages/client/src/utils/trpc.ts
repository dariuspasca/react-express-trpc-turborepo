import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "@trpc-react/server";

export const trpc = createTRPCReact<AppRouter>();
