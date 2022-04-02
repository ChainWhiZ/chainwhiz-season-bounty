import { Background } from "components/Background"
import { Footer } from "components/Footer"
import { FC, ReactNode } from "react"

type PageLayoutProps = {
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Background>
      <div className="flex flex-col min-h-screen xl:container xl:mx-auto">
        <header className="flex items-center justify-between px-4 py-4 xl:px-8" />
        <main className="flex flex-col p-4 grow xl:px-8">
          {children}
        </main>
        <footer className="flex justify-center p-4 rounded-t-md" >
          <Footer />
        </footer>
      </div>
    </Background>
  )
}
