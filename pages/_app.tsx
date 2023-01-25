import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { DashboardLayout } from 'src/layouts'
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider >
      <DashboardLayout >
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  )
}
