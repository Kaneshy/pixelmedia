import CinemaPage from "@/components/popups/cinema";
import TargetsAnimePage from "@/components/TarjetAnimes";

const AnimesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsAnimePage  />
            </div>
            <CinemaPage/>
            <div className="flex items-center justify-center">
                <img src="https://res.cloudinary.com/dztz492su/image/upload/v1725728945/books/lf8rlcbsjmx7bwyw6oxa.png" alt="" />
            </div>

        </main>
    )
}

export default AnimesPage