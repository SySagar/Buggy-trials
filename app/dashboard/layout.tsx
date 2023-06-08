"use client";
import SharedLayout from "@layout/SharedLayout";

export default function SignupLayout({
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
