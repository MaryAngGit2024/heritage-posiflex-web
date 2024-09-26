import { HeadersLanding } from "./(sections)/headers";
import { Posiflex } from "./(sections)/posiflex";
import Products from "./(sections)/products";

import Services from "./(sections)/services";

export default function Home() {
  return (
    <div className="">
      <HeadersLanding />
      <div className="bg-gray-50">
        <Services />
        {/* <Team /> */}
      </div>
      <Products />
      <Posiflex />
    </div>
  );
}
