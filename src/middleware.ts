import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getGeoInfo, isPathExempt } from './lib/common';
import { geoConfig } from './types/common';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip middleware for exempt paths
    if (isPathExempt(pathname)) {
        return NextResponse.next();
    }

    // Get geo information
    const geoInfo = getGeoInfo(request);

    // Check if request should be blocked
    if (geoInfo.isBlocked) {
        // Create blocked page URL
        const blockedUrl = new URL(geoConfig.redirectUrl, request.url);
        blockedUrl.searchParams.set('country', geoInfo.country);
        blockedUrl.searchParams.set('ip', geoInfo.ip);
        blockedUrl.searchParams.set('reason', encodeURIComponent(geoInfo.blockReason || ''));

        return NextResponse.redirect(blockedUrl);
    }

    // Add geo headers to response
    const response = NextResponse.next();
    response.headers.set('x-geo-country', geoInfo.country);
    response.headers.set('x-geo-city', geoInfo.city || '');
    response.headers.set('x-geo-blocked', 'false');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. Static files (e.g. /favicon.ico, /sitemap.xml, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
