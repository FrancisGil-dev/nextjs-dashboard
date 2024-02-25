import '@/app/ui/global.css'

import {Poppins} from 'next/font/google';

// create variable from Inter
export const poppins =Poppins({
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
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
