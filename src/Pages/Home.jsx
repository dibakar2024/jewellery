import React from 'react';
import Banner from '../Components/Banner';
import Benefits from '../Components/Benefits';
import CategorySection from '../sections/CategorySection';
import NewArrivals from '../sections/NewArrivals';
import PartnerLogos from '../sections/PartnerLogos';
import LatestItems from '../sections/LatestItems';
import BlogSection from '../sections/BlogSection';


function Home() {
  return (
    <div>
      <Banner />
      <Benefits />
      <CategorySection />
      <NewArrivals />
      <PartnerLogos />
      <LatestItems />
      <BlogSection />
      {/* other homepage sections */}
    </div>
  );
}

export default Home;
