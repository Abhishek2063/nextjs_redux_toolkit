import './globals.css';
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}