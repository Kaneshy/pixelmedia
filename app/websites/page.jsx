import WebsitesComp from "@/components/popups/websites";
import TargetsWebsitePage from "@/components/TarjetWebsites";

const WebsitesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsWebsitePage  />
            </div>
            <WebsitesComp/>
            <div className="flex items-center justify-center">
                <img src="https://res.cloudinary.com/dztz492su/image/upload/v1725728945/books/lf8rlcbsjmx7bwyw6oxa.png" alt="" />
            </div>

        </main>
    )
}

export default WebsitesPage