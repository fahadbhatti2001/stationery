import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { QueryClient, QueryClientProvider } from "react-query"
// import { useReducer } from "react"
// import { Router, useRouter } from "next/router"
// import { initState, reducer } from "@/lib/reducers/AuthReducer"
// import { AuthContext } from "@/lib/context/AuthContext"
// import nProgress from "nprogress"

// Router.events.on("routeChangeStart", nProgress.start)
// Router.events.on("routeChangeError", nProgress.done)
// Router.events.on("routeChangeComplete", nProgress.done)

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter()
  // const [state, dispatch] = useReducer(reducer, initState)

  return (
    // <AuthContext.Provider value={{ state, dispatch }}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    //  </AuthContext.Provider>
  )
}
