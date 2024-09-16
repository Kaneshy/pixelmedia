import CinemaPage from "@/components/popups/cinema";
import TargetsMovie from "@/components/Tarjetmovie";
import Bookscomp from "@/components/ui/bookscomp";


const MoviesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsMovie />
            </div>
            <CinemaPage />
            <Bookscomp/>
        </main>
    )
}

export default MoviesPage