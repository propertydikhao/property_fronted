import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Disclaimer</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Disclaimer</li>
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
              <h1>Disclaimer</h1>
              <p className="intro-text">
                The data that is presented on Property Dikhao
                (propertydikhao.in) is just some informational purposes.
                Although we ensure that the content is accurate and current, we
                do not make any representations or warranties, express or
                implied, regarding the completeness, accuracy, reliability,
                suitability, or availability of the information, products,
                services or graphics on the site in any way. It is at your own
                risk to be dependent on such information.
              </p>
              <p className="intro-text">
                Property Dikhao is neither a real estate broker nor agent or
                real estate developer. We merely are a property listing and
                information service. Third party sellers, agents, or developers
                provide all property listings, prices, and availability, and are
                subject to change without notice. They can be highly encouraged
                to check every information themselves before committing to any
                purchase, investing, or any other legal choice.
              </p>
              <p className="intro-text">
                Property Dikhao will in no case suffer any loss or damage,
                directly or indirectly, as a result of the use of this web site
                or relying on the information on it.
              </p>
              <p className="intro-text">
                You can possibly connect to other sites via this site but the
                sites are not under the control of Property Dikhao. We cannot
                control what, what, and how those other sites are. Any links
                included does not mean that the views are recommended or
                approved of it.
              </p>
              <p className="intro-text">
                Through this site, you consent that Property Dikhao will not
                bear responsibility, in case of the decision made on the basis
                of the content posted. The users are advised to seek the advice
                of professional services (legal, financial, or real estate
                professionals) before undertaking any decision involving
                property transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Disclaimer;
