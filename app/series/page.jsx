import CinemaPage from "@/components/popups/cinema";
import TargetsPage from "@/components/Tarjet";

const SeriesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsPage  />
            </div>
            <CinemaPage/>
        </main>
    )
}

export default SeriesPage