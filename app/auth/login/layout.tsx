"use client";
import SharedLayout from "@layout/SharedLayout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SharedLayout>
        {children}
      </SharedLayout>
    </html>
  );
}
