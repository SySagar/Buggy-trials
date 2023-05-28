'use client'
import RootLayout from "./layout/RootLayout";
import HomeScreen from "@homePage/components/HomeScreen";
import AppTheme from "./theme/appTheme";

export default function page() {
  return (
    <AppTheme>
    <RootLayout>
      <HomeScreen/>
    </RootLayout>
    </AppTheme>
  );
}
