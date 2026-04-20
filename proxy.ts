import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const STUDIO_HOST_SUFFIX = "studio.";

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isStudioHost = host.startsWith(STUDIO_HOST_SUFFIX);

  // studio.kyks.io → rewrite everything to /studio
  if (isStudioHost) {
    const url = request.nextUrl.clone();
    if (!url.pathname.startsWith("/studio")) {
      url.pathname = `/studio${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // On the main site, /studio is reserved for local dev of the Studio only.
  // In prod, the Studio is only reachable via the studio subdomain.
  if (request.nextUrl.pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip Next.js internals and static files. Match everything else.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
