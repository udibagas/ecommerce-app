import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TokoPakEdi",
  description: "Ini ecommerce",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <nav>
        Sidbar
      </nav>
      {children}
    </div>
  );
}
