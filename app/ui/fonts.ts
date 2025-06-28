// app/ui/fonts.ts or app/fonts.ts
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // or just '400' depending on your use
});