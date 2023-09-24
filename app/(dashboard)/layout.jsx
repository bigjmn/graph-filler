import Navbar from "../components/Navbar"
export default async function DashboardLayout({children}){
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}