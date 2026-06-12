import CustomButton from "@/components/button";
import CustomLink from "@/components/link";
import Title from "@/components/title";

const ContactSection = () => {
  return (
    <section id="contact" className="container section-shell pb-32 pt-32">
      <div className="responsive-panel relative overflow-hidden rounded-none py-8 text-center sm:rounded-[2rem] sm:px-10 sm:py-14 md:py-20">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-strong/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-soft">
            Contact
          </p>
          <Title title="Let's Talk" align="center" ignore />
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Have a product idea, mobile app, web platform, or existing system
            that needs better execution? Call{" "}
            <CustomLink text="(234) 7049938128" href="tel:2347049938128" /> or
            send an email to{" "}
            <CustomLink
              text="chinazaokuefuna5@gmail.com"
              href="mailto:chinazaokuefuna5@gmail.com"
            />
            .
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <CustomButton
              text="Book a Meeting"
              href="https://calendly.com/chinazaokuefuna5"
              icon="calendar"
              size="md"
              rounded
            />
            <a
              href="mailto:chinazaokuefuna5@gmail.com"
              className="flex h-12 cursor-pointer items-center justify-center rounded-full border border-white/15 px-8 font-semibold text-zinc-100 transition-all duration-300 hover:border-orange-soft hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
