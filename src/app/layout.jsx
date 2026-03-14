import '../index.css';

export const metadata = {
  title: 'Safvan | Portfolio',
  description: 'Creative Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-gray-100 font-sans antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
