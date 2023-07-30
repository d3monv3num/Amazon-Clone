import Product from './Product';
import ProductData from './ProductData';
import Header from './Header';
import './Home.css';
const Home=()=>{
    return(
        <>
        <Header/>
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="true"/>
            <div className='home_row'>
                {ProductData.slice(0,2).map((element,index)=>(<Product title={element.title} price={element.price} rating={element.rating} image={element.image} id={element.id}/>))}
            </div>
            <div className='home_row'>
            {ProductData.slice(2,5).map((element,index)=>(<Product title={element.title} price={element.price} rating={element.rating} image={element.image} id={element.id}/>))}
            </div>
            <div className='home_row'>
            {ProductData.slice(5,6).map((element,index)=>(<Product title={element.title} price={element.price} rating={element.rating} image={element.image} id={element.id}/>))}
            </div>
            </div>
        </div>
        </>
    );
}
export default Home;