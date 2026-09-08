import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { Portfolio } from '../components/Portfolio';
import { StorePreview } from '../components/StorePreview';
import { getProducts } from '../../lib/products';
import { HomeExperience } from '../components/homepage/HomeExperience';

export async function Home() {
  const products = await getProducts();

  return (
    <HomeExperience>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <StorePreview products={products} />
      <Portfolio />
    </HomeExperience>
  );
}
