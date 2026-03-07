import CustomButton from "@/components/button";
import CustomLink from "@/components/link";
import Title from "@/components/title";

const ContactSection = () => {
  return (
    <section id="contact" className="container pb-40 pt-40">
      <div className="mt-14 flex flex-col items-center gap-7 text-center">
        <Title title="Let's Talk" align="center" ignore />
        <p className="max-w-xl text-base text-zinc-500 sm:text-lg">
          If you have any questions or ideas, feel free to call me at{" "}
          <CustomLink text="(234) 7049938128" href="tel:2347049938128" /> or
          email me at{" "}
          <CustomLink
            text="chinazaokuefuna5@gmail.com"
            href="mailto:chinazaokuefuna5@gmail.com"
          />
          , I'm eagerly ready to collaborate.
        </p>
        <p>OR</p>
        <div className="flex items-center text-center">
          <CustomButton
            text="Meeting with Chinex"
            href="https://calendly.com/chinazaokuefuna5"
            icon="calendar"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
