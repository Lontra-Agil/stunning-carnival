import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const evolutionRouter = createTRPCRouter({
    messages_upsert: publicProcedure
        .input(z.object({ text: z.string() }))
        .mutation(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
});
    