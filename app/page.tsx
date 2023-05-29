'use client'
import RootLayout from "./layout/RootLayout";
import HomeScreen from "@homePage/components/HomeScreen";
import AppTheme from "./theme/appTheme";
import ScrollToTop from "common/ScrollToTop";

export default function page() {
  return (
    <AppTheme>
    <RootLayout>
      <ScrollToTop/>
      <HomeScreen/>
    </RootLayout>
    </AppTheme>
  );
}
