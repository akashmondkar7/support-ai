import scalekit from "@/lib/scalekit";
import { NextResponse } from "next/server";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl) {
    return NextResponse.json(
      { message: "NEXT_PUBLIC_APP_URL is not configured" },
      { status: 500 }
    );
  }

  const redirectUri = `${appUrl}/api/auth/callback`;
  const url = scalekit.getAuthorizationUrl(redirectUri);
  return NextResponse.redirect(url);
}