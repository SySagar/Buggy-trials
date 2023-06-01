import { z } from 'zod';

export const userSchema = z.object({
    email: z.string().email().regex(/@gmail.com$/),
    password: z.string().min(8),
})

export const userProfileSchema = z.object({
    name: z.string().min(2),
    username: z.string().min(2).regex(/^[a-zA-Z0-9]+$/),
    githubId: z.string().url().regex(/github.com/),
})