import CategoriePage from "@/components/popups/categories";
import TargetsPage from "@/components/TarjetB";

export default function Home() {
  return (
    <main className='w-full  text-white'>
      <div className='p-6'>
        <div className='select-none '>
          <div className='flex justify-center   '>
            <img className='rounded-xl mt-10 mb-10 shadow-[0_20px_50px_rgba(111,_113,_230,_0.5)]' 
            src="https://res.cloudinary.com/dztz492su/image/upload/v1725678062/books/rrhbhkxol1uoqnq2azwr.jpg" alt="" />
          </div>
        </div>
        <div className='p-4 mb-4 lobster-regular  bg-[#C8A1E0] rounded-xl'>
          Discover a world of entertainment with our curated collection of movies and series. Whether youre in the mood for a thrilling blockbuster, a heartwarming romance, or a gripping TV series, weve got something for everyone. Enjoy seamless streaming, personalized recommendations, and an ever-growing library of the latest releases and timeless classics. Dive into your next favorite story today!
        </div>
        <TargetsPage  />
        <CategoriePage />
      </div>
    </main>
  );
}
