import React from 'react';
import Banner from '../Banner';
import OurServices from '../../OurServices';
import FeaturesShowcase from './FeaturesShowcase';
import BeMerchant from './beMerchant/BeMerchant';
import BrandsSection from './Brandsection/BrandsSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import FAQSection from './FAQ/FaqSection';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner />
            <OurServices />
            <BrandsSection />
            <FeaturesShowcase />
            <BeMerchant></BeMerchant>
            <TestimonialSection />
            <FAQSection />
        </div>
    );
};

export default Home;