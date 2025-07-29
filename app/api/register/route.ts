import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(req: Request) {
  try {
    const user = await req.json();

    // Basic field check
    if (!user.email || !user.password || !user.name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let users = [];

    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      users = JSON.parse(fileData);
    } catch (err) {
      // Log and treat as empty array if file doesn't exist or parse fails
      console.warn('Could not read users.json:', err);
      users = [];
    }

    const exists = users.find((u: any) => u.email === user.email);
    if (exists) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    users.push(user);

    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: 'User registered' }, { status: 200 });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
