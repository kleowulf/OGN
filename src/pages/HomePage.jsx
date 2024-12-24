import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import NavBar from '../components/Navbar';
import blog from '../blog.json'
import GatewayList from '../components/GatewayList';


const HomePage = () => {
  
  
  return (

    
    <>
      <NavBar />
      <Hero />
      <HomeCards post={blog} />
      <GatewayList />
    

      

    </>
  );
};
export default HomePage;
