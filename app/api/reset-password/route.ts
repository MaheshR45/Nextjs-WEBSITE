// app/api/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', 'users.json');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'User data file not found' }, { status: 500 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let users;

    try {
      users = JSON.parse(fileContent);
    } catch (err) {
      console.error('Error parsing users.json:', err);
      return NextResponse.json({ error: 'Invalid user data format' }, { status: 500 });
    }

    const userIndex = users.findIndex((user: any) => user.email === email);

    if (userIndex === -1) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    users[userIndex].password = password;

    try {
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    } catch (err) {
      console.error('Error writing users.json:', err);
      return NextResponse.json({ error: 'Failed to update password' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error in reset-password:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
