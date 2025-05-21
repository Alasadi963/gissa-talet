import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const genre = url.searchParams.get('genre');
    const platform = url.searchParams.get('platform');
    const year = url.searchParams.get('year');

    let query = 'SELECT * FROM Games';
    const conditions: string[] = [];
    const params: any[] = [];

    if (genre) {
        conditions.push(`genre = ?`);
        params.push(genre);
    }

    if (platform) {
        conditions.push(`platform LIKE ?`);
        params.push(`%${platform}%`);
    }

    if (year) {
        conditions.push(`release_date >= ?`);
        params.push(`${year}-01-01`);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    const stmt = db.prepare(query);
    const games = stmt.all(...params);

    return NextResponse.json(games);
}
