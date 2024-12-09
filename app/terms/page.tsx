import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Title } from "@/components/title";

export default function Terms() {
  return (
    <section className="lg:flex lg:h-full overflow-y-scroll">
      <Container className="lg:flex-1 border-r border-[#DFDFDF] lg:pt-[162px] xl:pt-[280px]">
        <BackButton />
        <div className="max-w-[619px]">
          <Title data="Terms & Conditions" />
          <div className="mt-[8px] md:mt-[20px]">
            <Text data="This may mean our list of supported countries and regions could differ from PayPal’s official list. While we strive to keep this list current, the supported locations may occasionally be updated by PayPal/Hyperwallet. For the most up-to-date information, please refer to PayPal support." />
          </div>
        </div>
      </Container>
      <Container className="lg:flex-1">
        <div className="mt-[20px] [&>p]:mt-[5px] lg:[&>p]:mt-[10px]">
          <Text weight="bold" data="1. Agreement to Terms." />
          <Text data="By using our Services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the Services." />
          <div className="my-[16px]">
            <Text weight="bold" data="2. Privacy Policy." />
            <Text data="Please review our Privacy Policy, which also governs your use of the Services, for information on how we collect, use, and share your information." />
          </div>
          <Text
            weight="bold"
            data="3. Changes to these Terms or the Services."
          />
          <Text data="We may update the Terms from time to time in our sole discretion. If we do, we’ll let you know by posting the updated Terms on the Site, to the App and/or may also send other communications. It’s important that you review the Terms whenever we update them, or you use the Services. If you continue to use the Services after we have posted updated Terms, it means that you accept and agree to the changes. If you don’t agree to be bound by the changes, you may not use the Services anymore. Because our Services are evolving over time, we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion." />
        </div>
      </Container>
    </section>
  );
}
