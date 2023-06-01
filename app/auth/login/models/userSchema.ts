import { z } from 'zod';

export const userSchema = z.object({
    email: z.string().email().regex(/@gmail.com$/),
    password: z.string().min(8),
})
