import { z } from 'zod';

export const userSchema = z.object({
    roomID: z.string(),
    username: z.string(),
})