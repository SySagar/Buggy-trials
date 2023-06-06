import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { useRouter } from 'next/router';
import { APIMethods } from "@lib/axios/api";
import useFullScreenStore from "@lib/context/useFullScreenStore"

export default async function middleware(req: NextRequest){
    // let token = req.cookies.get("accessToken");
    // console.log(token)
    console.log("middleware")
    const url = req.nextUrl.clone()
    let curURL = req.url
    
    if(curURL.includes("/dashboard")){
      
      try{
        const res = await APIMethods.dashboard.dashboard()
        console.log(res)
        url.pathname = 'dashboard'
        if(res.status === 200){
          console.log("ok")
          return NextResponse.rewrite(url);
      }
      else
      {
        url.pathname = 'auth/login'
        console.log("not ok")
        return NextResponse.redirect(url);
      }
      }
      catch(err){
        url.pathname = 'auth/login'
        console.log(err)
        return NextResponse.redirect(url);
      }
    }



    // if (url === "http://localhost:3000/") {
    //   return NextResponse.redirect("http://localhost:3000/dashboard");
    // }


}