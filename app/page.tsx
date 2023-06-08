import HomeScreen from "./Home/components/HomeScreen";
import createEmotionCache from "./lib/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

export default function page() {
  
  return (
      <div>
      <HomeScreen/>
      </div>
  );
}
