import Padding from "../../common/Padding";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <Padding className="py-20 lg:py-48">
      <h1
        id="faq"
        className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-appDarkPurple text-center"
      >
        Questions Fréquents
      </h1>

      <section className="w-full my-20">
        <FaqAccordion />
      </section>
    </Padding>
  );
};

export default Faq;
