// src/app/api/addEmpresa/route.ts
import { NextResponse } from 'next/server';
import { addEmpresa } from '../../server/empresa-service';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email é obrigatório' }, { status: 400 });
    }

    await addEmpresa(email);

    return NextResponse.json({ message: 'Empresa adicionada com sucesso' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao adicionar a empresa' }, { status: 500 });
  }
}
