import About from "./(sections)/about";
import { HeadersLanding } from "./(sections)/headers";
import { Posiflex } from "./(sections)/posiflex";
import Products from "./(sections)/products";

import Services from "./(sections)/services";
import { Team } from "./(sections)/team";
import Testimonials from "./(sections)/testimonial";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 pb-20">
      <HeadersLanding />
      <About />
      <Products />
      <Services />
      <Posiflex />
      <Team />
      <Testimonials />
    </div>
  );
}
