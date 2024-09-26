export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blend-colors bg-center bg-cover">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  About HMOPI
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl text-justify">
                  To date, HMOPI has ventured into the construction industry as
                  well to expand and cover a greater market by introducing three
                  new products: Engineered Hardwood Flooring, Window Blinds or
                  Coverings and Engineered Solid Strand-woven Bamboo Flooring.
                  Through the years, HMOPI has maintained its professional
                  integrity, satisfactory track record and accumulated an
                  increasing number of satisfied clients. In addition to this,
                  its marketing channel has grown to cover practically the
                  entire country
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                  A one stop shop of high quality modern office furniture.
                  Heritage Multi-Office Products, Inc. (HMOPI) was established
                  in May 1997 as the source of modern modular office partitions,
                  imported office furniture and stationery line of products.
                  With this nice, HMOPI can provide almost all the interior
                  office, condominium and residential requirements. Clients can
                  select from a wide variety of styles and finishes from the
                  most unique and up to date designs at the best possible
                  prices. HMOPI can likewise customize its products to suite the
                  clients preferred designs and standards.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                  We aim to be a company that understands our clients needs,
                  thereby, surpassing their expectations through our products
                  and services. As a practice, our relationship with our clients
                  is of much value as we strive to be their partner in their
                  respective industries. We strive to always lookout for new,
                  innovative and unique products to offer our ever growing
                  number of satisfied clients in various industries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'd love to hear from you. Reach out to us for any inquiries
                  or collaborations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your name" type="text" />
                  <Input placeholder="Your email" type="email" />
                  <Textarea placeholder="Your message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}
