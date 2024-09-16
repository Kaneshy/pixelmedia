import CinemaPage from "@/components/popups/cinema";
import TargetsPage from "@/components/Tarjet";
import Bookscomp from "@/components/ui/bookscomp";

const SeriesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsPage  />
            </div>
            <CinemaPage/>
            <Bookscomp/>
        </main>
    )
}

export default SeriesPage