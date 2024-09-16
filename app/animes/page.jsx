import CinemaPage from "@/components/popups/cinema";
import TargetsAnimePage from "@/components/TarjetAnimes";
import Bookscomp from "@/components/ui/bookscomp";


const AnimesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsAnimePage />
            </div>
            <CinemaPage />
            <Bookscomp/>

        </main>
    )
}

export default AnimesPage