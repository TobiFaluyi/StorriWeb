"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/styles.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import EarlyAccessModal from "@/app/components/EarlyAccessModal";

import { ModalUtils } from "@/app/utils/utils";

export default function Policy() {
  const { isModalOpen, openModal, closeModal } = ModalUtils();

  return (
    <>
      <main className="bg-[#f6f6f6] max-w-[1380px] mx-auto">
        <NavBar openModal={openModal} />
        <div className="px-5 lg:px-20 pt-10 mt-20">
          <div className="flex justify-center lg:justify-between">
            <p className="text-4xl lg:text-7xl font-bold">
              Privacy
              <br />
              Policy
            </p>
            <Image
              className="hidden lg:block"
              alt="logo"
              src={"/assets/images/logoIcon.svg"}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-white mt-5 pt-5 px-5 lg:px-20">
          <p>
            Storri AI (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
            operates http://www.Storri.ai This page informs you of our policies
            regarding the collection, use, and disclosure of Personal
            Information we receive from users of the site.
            <br />
            <br />
            Please read our privacy policy carefully to get a clear
            understanding of how we collect, use, protect or otherwise handle
            your Personally Identifiable Information in accordance with our
            platform.
            <br />
            <br />
            We understand that when you use our services, you are trusting us
            with your information. This privacy policy has been compiled to
            better serve our users who are concerned with how their
            &apos;Personally Identifiable Information&apos; (PII) is being used
            on Storri AI. PII, as described in US privacy law and information
            security, is information that can be used on its own or with other
            information to identify, contact, or locate a single person, or to
            identify an individual in context.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Privacy notice for Storri AI
          </p>
          <p>
            Storri AI takes the protection of your privacy very seriously. We
            will only use your personal information to deliver the products or
            services you have requested from us, and to meet our legal
            responsibilities.
            <br />
            <br />
            We use your Personal Information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            How do we collect information from you?
          </p>
          <p>
            We obtain information about you when you engage us to deliver our
            [products and/or] services and/or when you use our website.
            <br />
            <br />
            <strong>We collect your data in three different ways:</strong>
            <br />
          </p>
          <ul className="list-disc pl-5">
            <li>Automatically, on visiting our website</li>
            <li>Upon downloading our Mobile App</li>
            <li>Through your voluntary input when asked to fill a form</li>
            <li>Through cookies</li>
            <li>When you contact us about our [products and/or] services.</li>
            <li>Information you provide</li>
            <li>Information from other sources</li>
          </ul>
          <p className="text-2xl font-bold mt-8 mb-3">
            What type of information do we collect from you?
          </p>
          <p>
            The personal information we collect from you will vary depending on
            which products or services you engage us to deliver. The personal
            information we collect might include your name, address, telephone
            number, email address, your IP address, which pages you may have
            visited on our website or mobile application and when you accessed
            them.
            <br />
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            We may collect the following information about you:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Your profile information. You give us information when you
              register on the Platform, including your username, password, date
              of birth (where applicable), email address and/or telephone
              number, information you disclose in your user profile, and your
              photograph or profile video.
            </li>
            <li>
              User content. We process the content you generate on the Platform,
              including photographs, audios and videos you upload or create,
              comments, hashtags, and feedback, you make, and the associated
              metadata, such as when, where, and by whom the content was created
              (“User Content”). Even if you are not a user, information about
              you may appear in User Content created or published by users on
              the Platform. We collect User Content through pre-loading at the
              time of creation, import, or upload, regardless of whether you
              choose to save or upload that User Content, in order to recommend
              content options and provide other personalized recommendations. If
              you apply an template to your User Content, we may collect a
              version of your User Content that does not include the template.
            </li>
            <li>
              Your phone and social network contacts. If you choose to sync your
              phone contacts, we will access and collect information such as
              names, phone numbers, and email addresses, and match that
              information against existing users of the Platform. If you choose
              to share your social network contacts, we will collect your public
              profile information as well as names and profiles of your social
              network contacts.
            </li>
            <li>
              Proof of your identity or age. We sometimes ask you to provide
              proof of identity or age in order to use certain features.
              Information in correspondence you send to us, including when you
              contact us for support or feedback.
            </li>
            <li>
              Information through surveys, research, promotion, contests,
              marketing campaigns, challenges, competitions or events conducted
              or sponsored by us, in which you participate.
            </li>
          </ul>
          <p className="text-2xl font-bold mt-8 mb-3">
            Obtaining information From Other Sources
          </p>
          <p className="font-bold mb-2">
            We may receive the information described in this Privacy Policy from
            other sources, such as
          </p>
          <ul className="list-disc pl-5">
            <li>
              If you choose to register or use the Platform using a third-party
              social network account details (e.g Facebook, Twitter, Instagram,
              Google, TikTok) or login service, you will provide us or allow us
              to provide you with your username, public profile, and other
              possible information related to such an account. We will likewise
              share certain information with your social network such as your
              app ID, access token and the referring URL. If you link your
              Storri AI account to another service, we may receive information
              about your use of that service.
            </li>
            <li>
              Advertisers, measurement and other partners share information with
              us about you and the actions you have taken outside of the
              Platform, such as your activities on other websites and apps or in
              stores, including the products or services you purchased, online
              or in person. These partners also share information with us, such
              as mobile identifiers for advertising, hashed email addresses and
              phone numbers, and cookie identifiers, which we use to help match
              you and your actions outside of the Platform with your Storri AI
              account.
            </li>
            <li>
              We may obtain information about you from certain affiliated
              entities within our corporate group, including about your
              activities on their platforms.
            </li>
            <li>
              We may receive information about you from others, including where
              you are included or mentioned in User Content, direct messages, in
              a complaint, appeal, request or feedback submitted to us, or if
              your contact information is provided to us. We may collect
              information about you from other publicly available sources.
            </li>
          </ul>
          <p className="text-2xl font-bold mt-8 mb-3">
            When do we collect information?
          </p>
          <p>
            When you register on Storri AI, we collect the personal information
            that you voluntarily provide to us when registering through your
            access device.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            How is your information used?
          </p>
          <p className="font-bold mb-2">
            In general terms, and depending on which products or services you
            engage us to deliver, as part of providing our agreed services we
            may use your information to:
          </p>
          <ul className="list-disc pl-5">
            <li>contact you by post, email, or telephone</li>
            <li>verify your identity where this is required</li>
            <li>understand your needs and how they may be met</li>
            <li>
              maintain our records in accordance with applicable legal and
              regulatory obligations
            </li>
            <li>When you contact us about our (products and/or) services.</li>
            <li>prevent and detect crime, fraud, or corruption</li>
            <li>Information from other sources</li>
          </ul>
          <p className="mt-2">
            We are required by legislation, other regulatory requirements, and
            our insurers to retain your data where we have ceased to act for
            you. The period of retention required varies with the applicable
            legislation but is typically five or six years. To ensure compliance
            with all such requirements it is the policy of the firm to retain
            all data for a period of [seven] years from the end of the period
            concerned.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Who has access to your information?
          </p>
          <p className="mt-2">
            We will not sell or rent your information to third parties.
            <br />
            We will not share your information with third parties for marketing
            purposes.
            <br />
            Any staff with access to your information has a duty of
            confidentiality under the ethical standards that this firm is
            required to follow.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Do we use &quot;cookies&quot;?</p>
          <p className="mt-2">
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer&quot;s hard drive through your Web browser (if
            you allow) that enables the site&quot;s or service provider&quot;s systems to
            recognize your browser and capture and remember certain information.
            For instance, we use cookies to help us remember and process your
            area of interest (amidst our various categories of contents, be it
            Sports, Entertainment, Politics, Business, Health, and Technology)
            based on your interactions on our platform.
            <br />
            <br />
            We also use cookies to help us compile aggregate data about site
            traffic and site interaction so that we can offer better site
            experiences in the future.
            <br />
            <br />
            You can choose to have your computer warn you each time a cookie is
            being sent, or you can choose to turn off all cookies. You do this
            through your browser settings.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Third-Party Service Providers
          </p>
          <p className="mt-2">
            We may pass your information to our third-party service providers,
            agents, subcontractors, and other associated organizations for the
            purposes of completing tasks and providing services to you on our
            behalf. However, when we use third-party service providers, we
            disclose only the personal information that is necessary to deliver
            the service and we have a contract in place that requires them to
            keep your information secure and not to use it for their own
            purposes.
            <br />
            <br />
            Please be assured that we will not release your information to third
            parties unless you have requested that we do so, or we are required
            to do so by law, for example, by a court order or for the purposes
            of prevention and detection of crime, fraud or corruption.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            How you can access and update your information
          </p>
          <p className="mt-2">
            Keeping your information up to date and accurate is important to us.
            We commit to regularly review and correct where necessary, the
            information that we hold about you. If any of your information
            changes, please email or write to us, or call us using the
            &quot;Contact information&quot; noted below.
            <br />
            <br />
            You have the right to ask for a copy of the information Storri AI
            holds about you.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3 max-w-[720px]">
            Security Precautions in place to protect the loss, misuse, or
            alteration of your information
          </p>
          <p className="mt-2">
            Whilst we strive to protect your personal information, we cannot
            guarantee the security of any information you transmit to us, and
            you do so at your own risk.
            <br />
            <br />
            Once we receive your information, we make our best effort to ensure
            its security on our systems. Where we have given, or where you have
            chosen, a password that enables you to access information, you are
            responsible for keeping this password confidential. We ask you not
            to share your password with anyone.
            <br />
            <br />
            Your data will usually be processed in our offices in the UK.
            However, to allow us to operate efficient digital processes, we
            sometimes need to store information in servers located outside the
            UK. We take the security of your data seriously and so all our
            systems have appropriate security in place that complies with all
            applicable legislative and regulatory requirements.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Your choices</p>
          <p className="mt-2">
            We may occasionally contact you by [post/email/telephone] with
            details of any changes in legal and regulatory requirements or other
            developments that may be relevant to your affairs and, where
            applicable, how we may assist you further. If you do not wish to
            receive such information from us, please let us know by contacting
            us as indicated under &quot;Contact information&quot; below.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Your rights</p>
          <p className="mt-2">
            <b>Access to your information:</b> You have the right to request a
            copy of the personal information about you that we hold.
            <br />
            <br />
            <b>Correcting your information:</b> We want to make sure that your
            personal information is accurate, complete, and up to date and you
            may ask us to correct any personal information about you that you
            believe does not meet these standards.
            <br />
            <br />
            <b>Deletion of your information:</b> You have the right to ask us to
            delete personal information about you where:
          </p>
          <ul className="list-disc pl-5">
            <li>
              you consider that we no longer require the information for the
              purposes for which it was obtained
            </li>
            <li>
              you have validly objected to our use of your personal information
              - see &quot;Objecting to how we may use your information&quot;
              below
            </li>
            <li>
              our use of your personal information is contrary to law or our
              other legal obligations
            </li>
            <li>
              [we are using your information with your consent and you have
              withdrawn your consent - see &quot;withdrawing consent to use your
              information&quot; below].
            </li>
          </ul>
          <br />
          <p>
            <b>Restricting how we may use your information:</b> In some cases,
            you may ask us to restrict how we use your personal information.
            This right might apply, for example, where we are checking the
            accuracy of personal information about you that we hold or assessing
            the validity of any objection you have made to our use of your
            information. The right might also apply where there is no longer a
            basis for using your personal information but you do not want us to
            delete the data. Where this right is validly exercised, we may only
            use the relevant personal information with your consent, for legal
            claims or where there are other public interest grounds to do so.
            <br />
            <br />
            <b>Objecting to how we may use your information:</b> Where we use
            your personal information to perform tasks carried out in the public
            interest then if you ask us to, we will stop using that personal
            information unless there are overriding legitimate grounds to
            continue. You have the right at any time to require us to stop using
            your personal information for direct marketing purposes.
            <br />
            <br />
            <b>Withdrawing consent to use your information:</b> Where we use
            your personal information with your consent you may withdraw that
            consent at any time and we will stop using your personal information
            for the purpose(s) for which consent was given. Please contact us in
            any of the ways set out in &quot;Contact information&quot; below if
            you wish to exercise any of these rights.
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">
            Changes to our privacy notice
          </p>
          <p>
            We keep this privacy notice under regular review and will place any
            updates on{" "}
            <a href="https://www.Storri.ai/updates" target="_blank">
              www.Storri.ai/updates.
            </a>{" "}
            Paper copies of the privacy notice may also be obtained from{" "}
            <a href="https://www.Storri.ai/downloads" target="_blank">
              www.Storri.ai/downloads.
            </a>
            <br />
            <br />
            This privacy notice was implemented on 20/06/2023
          </p>
          <p className="text-2xl font-bold mt-8 mb-3">Complaints</p>
          <p className="">
            We seek to resolve directly all complaints about how we handle your
            personal information but you also have the right to lodge a
            complaint with the Information
            <br />
            <br />
            Website:{" "}
            <a
              className="font-bold"
              href="https://www.Storri.ai"
              target="_blank"
            >
              https://www.Storri.ai
            </a>
          </p>
        </div>
        <Footer />
        <EarlyAccessModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </main>
    </>
  );
}
