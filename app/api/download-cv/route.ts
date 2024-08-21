import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), 'app/_assets', 'Cosmin_Ilie_CV.pdf')
  );

  const headers = new Headers();
  headers.append(
    'Content-Disposition',
    'attachment; filename="Cosmin_Ilie_CV.pdf"'
  );
  headers.append('Content-Type', 'application/pdf');

  return new Response(buffer, {
    headers,
  });
}
