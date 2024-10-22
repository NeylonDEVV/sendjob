import { createServerClient, createBrowserClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

// Função que cria o cliente do Supabase Server
export function createSupabaseServerClient() {
  const cookieStore = cookies()

  // Para casos que precisa de permissão de administrador ou permissão de usuario
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
    global: {
      headers: {
        // Receber o user-agent do browser
        'user-agent': headers().get('user-agent') as string,
      },
    },
  })
}

// Função que cria o cliente do Supabase Browser
export function createsupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
