import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        { id: "1", title: "Första inlägget", content: "Detta är mitt första blogginlägg!" },
        { id: "2", title: "Lär dig Next.js", content: "Next.js är ett kraftfullt ramverk för React." },
        { id: "3", title: "App Router vs Pages Router", content: "Vad är skillnaden mellan de två?" }
    ];
    return NextResponse.json(posts);
}
