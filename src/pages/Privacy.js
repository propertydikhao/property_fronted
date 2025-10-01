import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Privacy</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Privacy</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="privacy" className="privacy section mt-4">
        <div className="container" data-aos="fade-up">
          <div className="privacy-header" data-aos="fade-up">
            <div className="header-content">
              <div className="last-updated">
                Effective Date: September 28, 2025
              </div>
              <h1>Privacy Policy</h1>
              <p className="intro-text">
                Welcome to Property Dikhao! This Privacy Policy describes how we
                collect, use and protect your personal information in connection
                with our website at www. propertydikhao. in
              </p>
            </div>
          </div>

          <div className="privacy-content" data-aos="fade-up">
            <div className="content-section">
              <h2>1. Information We Collect</h2>
              <p>
                We may receive user information including, but not limited to:
                Personal Information Name, email address, phone number and any
                other information that you give us when contacting us or filling
                in forms. Non-Identifying Information: Type of internet browser,
                IP address, operating system you are using, pages that may have
                led you to our site and the pages that were accessed and any
                page visits.
              </p>
            </div>

            <div className="content-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                We collect information to provide better services to our users.
                The types of information we collect include:
              </p>

              <h3>2.1 Information You Provide</h3>
              <p>We gather this information in order to:</p>
              <ul>
                <li>
                  Answer questions and offer property management services.
                </li>
                <li>Enhance our website, services and content.</li>
                <li>
                  Emails containing promotions or updates (if you have opted in
                  only).
                </li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>3. Cookies and Tracking</h2>
              <p>
                See if you have earlier installed any Adware and its removal
                guide here. We do not use cookies that store your personal
                information. You may disable cookies through your browser
                settings, in which case some site functions may not work.
              </p>
            </div>

            <div className="content-section">
              <h2>4. Sharing Your Info</h2>
              <p>
                Look, we're not in the business of selling your info to random
                third parties. That's just not our vibe. And we're not blabbing
                to our service partners either -unless they pinky swear to keep
                your data on lockdown.
              </p>
            </div>

            <div className="content-section">
              <h2>5. Keeping Your Data Safe</h2>
              <p>
                We try our best to keep your info away from nosy intruders,
                cyber weirdos, and anyone looking to mess with it. That said,
                the internet is, well, the internet. No system is totally
                hacker-proof. Just being real with you.
              </p>
            </div>

            <div className="content-section">
              <h2>6. Third-Party Links</h2>
              <p>
                You might find some links here that'll whisk you off to other
                websites. Once you're there, their rules apply-not ours.
                Honestly, read their privacy stuff before you get too comfy or
                start sharing anything.
              </p>
            </div>

            <div className="content-section">
              <h2>7. Kids, This Ain't For You</h2>
              <p>
                If you're under 18, this site isn't really meant for you. And if
                you're under 13, yeah, we're definitely not collecting your info
                on purpose. Go play outside or something.
              </p>
            </div>
            <div className="content-section">
              <h2>8. Your Choices</h2>
              <p>
                Want to see what info we've got on you? Or maybe you want to
                update or delete it? No big deal-just hit us up.
              </p>
            </div>
            <div className="content-section">
              <h2>9. Changing Stuff</h2>
              <p>
                We might tweak this privacy thing every now and then. Any
                updates? We'll slap 'em on this page and update the date up top
                so you know what's new.
              </p>
            </div>
          </div>

          <div className="privacy-contact" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our
              practices, please contact us:
            </p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> support@propertydikhao.in
              </p>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
