import WebsitesComp from "@/components/popups/websites";
import TargetsWebsitePage from "@/components/TarjetWebsites";
import Bookscomp from "@/components/ui/bookscomp";


const WebsitesPage = () => {
    return (
        <main className='w-full  text-white'>
            <div className='p-6'>
                <TargetsWebsitePage />
            </div>
            <WebsitesComp />
            <Bookscomp/>

        </main>
    )
}

export default WebsitesPage