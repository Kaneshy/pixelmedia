import CinemaPage from "@/components/popups/cinema";
import TargetsMovie from "@/components/Tarjetmovie";

const MoviesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsMovie />
            </div>
            <CinemaPage/>
        </main>
    )
}

export default MoviesPage