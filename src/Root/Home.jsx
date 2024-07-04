import Banner from '../LayOut/Banner';
import Blog from '../LayOut/Blog';
import FrequentlyAskQuestion from '../LayOut/FrequentlyAskQuestion';
import OfferSessionBanner from '../LayOut/OfferSessionBanner';
import Services from '../LayOut/Services';
import Testimonial from '../LayOut/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Blog />
            <Services />
            <Testimonial />
            <FrequentlyAskQuestion />
            <OfferSessionBanner />
        </div>
    );
};

export default Home;