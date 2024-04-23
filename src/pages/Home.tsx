import {
    Navbar, 
    Homepage, 
    Footer
} from "@/components"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Homepage />
    </div>
    <Footer />
    </>
  )
}

export default Home