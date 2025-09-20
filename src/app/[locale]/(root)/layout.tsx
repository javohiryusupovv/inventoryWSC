import NavbarLayout from "@/app/[locale]/(root)/components/Navbar/NavbarLayout"
import FooterPage from "@/app/[locale]/(root)/components/Footer/FooterPage"



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavbarLayout />
            <main className="pt-[100px]">{children}</main>
            <FooterPage />

        </>
    )
}
