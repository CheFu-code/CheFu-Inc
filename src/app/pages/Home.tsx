import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { Portfolio } from '../components/Portfolio';
import { StorePreview } from '../components/StorePreview';
import { getProducts } from '../../lib/products';

export async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <StorePreview products={products} />
      <Portfolio />
    </>
  );
}
