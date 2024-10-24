'use server';

import { prisma } from "../lib/prisma/prisma";

export async function addEmpresa(email: string) {
  if (!email) {
    throw new Error('Email inválido');
  }

  try {
    const empresa = await prisma.empresa.create({
      data: { email },
    });
    return empresa;
  } catch (error) {
    console.error('Erro ao adicionar empresa:', error);
    throw error;
  }
}

export async function getEmpresasMany() {
  return await prisma.empresa.findMany({
    select: {
      email: true,
    },
  });
}