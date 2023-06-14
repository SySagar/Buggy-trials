"use client";
import SharedLayout from "@layout/SharedLayout";

export default function profileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SharedLayout>{children}</SharedLayout>
    </html>
  );
}
