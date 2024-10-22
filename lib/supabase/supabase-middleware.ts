import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Função que atualiza a sessão do Supabase
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANTE: Evite escrever qualquer lógica entre createServerClient e
  // supabase.auth.getUser(). Um erro simples pode dificultar a depuração
  // problemas com usuários sendo desconectados aleatoriamente.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/auth') &&
    request.nextUrl.pathname !== '/'
  ) {
    // nenhum usuário, potencialmente responder redirecionando o usuário para a página de login
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // IMPORTANTE: Você *deve* retornar o objeto supabaseResponse como ele está. Se você está
  // criando um novo objeto de resposta com NextResponse.next() certifique-se de:
  // 1. Passe a solicitação nele, assim:
  // const minhaNovaResponse = NextResponse.next({solicitação})
  // 2. Copie os cookies, assim:
  // myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Altere o objeto myNewResponse para atender às suas necessidades, mas evite alterar
  // os biscoitos!
  // 4. Finalmente:
  // retorna minhaNovaResposta
  // Se isso não for feito, você pode estar causando o desligamento do navegador e do servidor
  // de sincronizar e encerrar a sessão do usuário prematuramente!

  return supabaseResponse
}
