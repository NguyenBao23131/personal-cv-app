import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css"
import { TopBar, LeftSideBar, BottomBar } from "@/components/shared";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "PortfolioAppCV",
  title: "DevAnonitos Portfolio",
  keywords: ['Next.js', 'React', 'TypeScript'],
  description: "Build a project profile to CV",
  category: "Development",
  creator: "DevAnonitos",
  authors: [{ name: "BaoNguyen" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main className="flex flex-row">
          <LeftSideBar />
          <section className="main-container bg-slate-500">
            <div className="w-full flex max-w-4xl">
              {children}
            </div>
          </section>
        </main>
        <BottomBar />
      </body>
    </html>
  );
}
