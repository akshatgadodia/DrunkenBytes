import { NextResponse } from "next/server";
import authenticatedRoutes from "@/app/constants/authenticatedRoutes";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith("/images")) {
    return NextResponse.next()
  }
  const isRegistering = req.cookies.get("db_register");
  const role = req.cookies.get("db_login");
  if(isRegistering?.value === 'true' && !req.url.includes('/register')){
    return NextResponse.redirect(new URL('/register', req.url))
  }
  if( req.url.includes('/register') ){
    if(isRegistering?.value === 'true'){
      return NextResponse.next();
    }
    else{
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
  if (role === undefined && authenticatedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/hold', req.url))
  }
  if (role?.value === 'true' && req.url.includes('/hold')) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  
  return NextResponse.next()
}