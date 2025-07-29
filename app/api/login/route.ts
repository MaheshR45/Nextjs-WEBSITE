import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const filePath = path.join(process.cwd(), 'data', 'users.json');
  const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const user = users.find((u: any) => u.email === email && u.password === password);

  if (user) {
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }
}
