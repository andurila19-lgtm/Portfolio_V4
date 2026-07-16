import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Privacy Policy ${METADATA.exTitle}`,
  description:
    "Privacy Policy for Anduril Ahmad's Portfolio App regarding TikTok API integration",
  keywords: "portfolio frontend developer, privacy policy, tiktok api",
  alternates: {
    canonical: `${process.env.DOMAIN}/privacy-policy`,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <Container data-aos="fade-up">
      <PageHeading title={"Privacy Policy"} />

      <div className="mt-8 space-y-8 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p className="text-sm italic">Effective Date: January 12, 2026</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold dark:text-neutral-100">
            1. Data Collection and Usage
          </h2>
          <p>
            The &quot;Portfolio&quot; application (the &quot;App&quot;) does NOT
            collect, store, or share any personal data from its visitors. The
            App functions as a read-only platform designed to showcase the
            developer&apos;s professional work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold dark:text-neutral-100">
            2. TikTok API Integration
          </h2>
          <p>
            The App utilizes the TikTok Display API to fetch and show the
            developer&apos;s (Anduril Ahmad) public TikTok content for
            professional display purposes.
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Profile Statistics:</strong> The App displays public
              metrics including follower count, following count, and total
              likes.
            </li>
            <li>
              <strong>Video Content:</strong> The App embeds public videos from
              the developer&apos;s TikTok feed on the site.
            </li>
          </ul>
          <p>
            The App only retrieves public data authorized via the official API
            flow and does not gain access to private messages, account settings,
            or non-public resources.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold dark:text-neutral-100">
            3. Third-Party Services
          </h2>
          <p>
            All media displayed through the TikTok API is subject to TikTok&apos;s
            own Terms of Service and Privacy Policy. By interacting with the App,
            you also acknowledge the terms specified in the{" "}
            <a
              href="https://www.tiktok.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TikTok Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold dark:text-neutral-100">
            4. Contact Information
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may
            contact the developer at: <strong>andurila19@gmail.com</strong>.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
