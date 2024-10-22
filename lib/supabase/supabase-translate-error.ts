export function translateSupabaseError(message: string): string {
  if (message.includes('User already registered')) {
    return 'O usuário já está registrado.'
  } else {
    return message
  }
}
