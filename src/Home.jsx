import heroImg1 from "./assets/Rectangle1.jpg";
import heroImg2 from "./assets/Rectangle1-1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import one from "./assets/1.svg";
import two from "./assets/2.svg";
import three from "./assets/3.svg";
import four from "./assets/4.svg";
import leriq from "./assets/Rectangle4.png";
import weirdImage from "./assets/Rectangle3.jpg";
import avc2 from "./assets/Avc2.png";

function Home() {
  return (
    <section className="Home">
      <h1 className="Home-hero-header">Curating African NFT Assets</h1>
      <div className="relative">
        <div className="flex justify-center">
          <div className="Home-hero-img-container">
            <img src={heroImg1} className="Home-hero-img-2" alt="heroImg1" />
            <img src={heroImg2} className="Home-hero-img-1" alt="heroImg2" />
          </div>
        </div>
        <div className="Home-hero-text-container">
          <article className="Home-hero-text">
            Empowering creatives across industries of art, music, film, sports,
            real estate and beyond
          </article>
        </div>
      </div>
      <section className="page-section-padding">
        <h2 className="page-section-header">How to get started</h2>
        <div className="-mt-[65px]">
          <Splide aria-label="How to get started">
            <SplideSlide>
              <div className="Home-how-to-item-container">
                <img src={one} alt="one" className="Home-how-to-item-img" />
                <div className="Home-how-to-item">
                  <p className="Home-how-to-item-text">
                    Apply to join African Valuables Collective as a Creator.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="Home-how-to-item-container">
                <img src={two} alt="one" className="Home-how-to-item-img" />
                <div className="Home-how-to-item">
                  <p className="Home-how-to-item-text">
                    Upload your digital content and generate NFTs.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="Home-how-to-item-container">
                <img src={three} alt="one" className="Home-how-to-item-img" />
                <div className="Home-how-to-item">
                  <p className="Home-how-to-item-text">
                    African Valuables Collective will list your NFTs across
                    multiple marketplaces.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="Home-how-to-item-container">
                <img src={four} alt="one" className="Home-how-to-item-img" />
                <div className="Home-how-to-item">
                  <p className="Home-how-to-item-text">
                    Manage your profile and grow your portfolio.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
      <section className="page-section-padding">
        <h2 className="page-section-header">Our Collections</h2>
        <div className="Home-collection-splide">
          <Splide aria-label="How to get started">
            <SplideSlide>
              <div className="flex lg:h-[660px] py-5 justify-center">
                <div className="Home-hero-img-container">
                  <img
                    src={weirdImage}
                    className="Home-hero-img-3"
                    alt="heroImg1"
                  />
                  <img src={leriq} className="Home-hero-img-1" alt="heroImg2" />
                  <h3 className="collection-name pt-8">LeriQ</h3>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex lg:h-[660px] py-5 justify-center">
                <div className="Home-hero-img-container">
                  <img
                    src={weirdImage}
                    className="Home-hero-img-3"
                    alt="heroImg1"
                  />
                  <img src={avc2} className="Home-hero-img-1" alt="heroImg2" />
                  <h3 className="collection-name pt-8">AVC Collection</h3>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
      <section className="page-section-padding">
        <h2 className="page-section-header">Get in touch</h2>
        <form className="Home-contact-form">
          <div>
            <label htmlFor="first-name" className="Home-contact-form-label">
              First Name
            </label>
            <input
              id="first-name"
              className="Home-contact-form-input"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="Home-contact-form-label">
              Last Name
            </label>
            <input
              id="last-name"
              className="Home-contact-form-input"
              type="text"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="Home-contact-form-label">
              Your E-mail
            </label>
            <input
              id="email"
              className="Home-contact-form-input"
              type="email"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="Home-contact-form-label">
              Your Message
            </label>
            <textarea
              rows="7"
              id="message"
              className="Home-contact-form-textarea"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="Home-contact-form-button">Send Message</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Home;
