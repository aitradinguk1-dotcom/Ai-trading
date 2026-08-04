import './globals.css';

export const metadata = {
  title: 'AI Trading - Automated Crypto Staking',
  description: 'Deposit, Stake, and Earn Daily Automated Profits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="ltr">
      <body className="bg-brand-dark min-h-screen text-gray-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
