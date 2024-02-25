import '@/app/ui/global.css'

import {Inter} from 'next/font/google';

// create variable from Inter
export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
