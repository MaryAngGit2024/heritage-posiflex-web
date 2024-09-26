import { About } from "./(sections)/about";
import { HeadersLanding } from "./(sections)/headers";
import { Posiflex } from "./(sections)/posiflex";
import Products from "./(sections)/products";

import Services from "./(sections)/services";

export default function Home() {
  return (
    <div className="">
      <div>
        <HeadersLanding />
        <Services />
        <Products />
        <About />
        <Posiflex />
      </div>
    </div>
  );
}
