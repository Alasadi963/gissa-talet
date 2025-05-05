import { NextRequest, NextResponse } from 'next/server';
import { openDb } from '@/app/lib/db';
import { getUser } from 'better-auth';

export async function GET() {
    const user = await getUser();
    const db = await openDb();
    const todos = await db.all('SELECT * FROM todos WHERE userId = ?', [user.id]);
    return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
    const user = await getUser();
    const { title } = await req.json();
    const db = await openDb();
    await db.run('INSERT INTO todos (userId, title) VALUES (?, ?)', [user.id, title]);
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const user = await getUser();
    const { id } = await req.json();
    const db = await openDb();
    await db.run('DELETE FROM todos WHERE id = ? AND userId = ?', [id, user.id]);
    return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
    const user = await getUser();
    const { id, title } = await req.json();
    const db = await openDb();
    await db.run('UPDATE todos SET title = ? WHERE id = ? AND userId = ?', [title, id, user.id]);
    return NextResponse.json({ success: true });
}
