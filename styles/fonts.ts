import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    weight: ['400', '700'], // Specify weights if not a variable font
    subsets: ['latin'],
    variable: '--font-roboto-sans',
});