import Headers from "../components/Header.tsx"
import BackgroundImageComponent from "../components/BackgroundImageComponent.tsx"
const Home = () => {
    return (
        <div>
            <Headers />
            <div className=" h-52  md:h-80 lg:h-96 xl:h-96 w-screen">
                <BackgroundImageComponent />
            </div>
        </div>
    )
}
export default Home
