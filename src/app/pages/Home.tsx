import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { Portfolio } from '../components/Portfolio';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
    </>
  );
}
