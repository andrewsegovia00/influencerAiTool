import { Nav, Hero, Auth, SignUp } from "../Components"

const Home = () => {
    return (

    <div className="bg-contain bg-custom-image bg-no-repeat bg-grey-2 h-screen">
      <Nav />
      <Hero /> 
      <SignUp />
      <Auth />
    </div>
    )
}

export default Home