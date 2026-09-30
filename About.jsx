import { Link } from "react-router-dom";

function About() {
  return (
    <div className="aquvana-page">

      {/* ============================================================
          PAGE HERO
          ============================================================ */}

      <section className="aquvana-page-hero">

        <div className="aquvana-container">

          <span className="aquvana-section-label">
            ABOUT AQUVANA
          </span>

          <h1 className="aquvana-page-title">
            Growing Food Through
            <span className="aquvana-brand-text">
              {" "}Rising Waters.
            </span>
          </h1>

          <p className="aquvana-page-description">
            AQUVANA is a modular, repairable household food-growing
            system designed to help households adapt their food-growing
            practices to flooding and waterlogging.
          </p>

        </div>

      </section>


      {/* ============================================================
          WHAT IS AQUVANA
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-two-column">

            <div>

              <span className="aquvana-section-label">
                WHAT IS AQUVANA?
              </span>

              <h2 className="aquvana-section-title">
                A Product Designed Around Changing Water Conditions.
              </h2>

            </div>

            <div>

              <p>
                AQUVANA is a product concept focused on household
                food growing in places where flooding or prolonged
                waterlogging can make conventional gardening difficult.
              </p>

              <p style={{ marginTop: "18px" }}>
                Rather than depending on one permanent growing
                structure, AQUVANA explores a modular approach where
                components can be assembled, maintained, repaired,
                replaced, and adapted to household needs.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          THE PROBLEM
          ============================================================ */}

      <section className="aquvana-section aquvana-section-soft">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              THE PROBLEM
            </span>

            <h2 className="aquvana-section-title">
              Flooding Changes What Households Can Grow.
            </h2>

            <p className="aquvana-section-description">
              When water remains around a household for extended
              periods, ordinary ground-level growing spaces may become
              difficult to use. AQUVANA is designed around this
              environmental reality.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-3">

            <div className="aquvana-card">

              <span className="aquvana-badge">
                01
              </span>

              <h3 className="aquvana-card-title">
                Waterlogging
              </h3>

              <p className="aquvana-card-description">
                Persistent water can make ordinary soil-based household
                gardening difficult or temporarily unusable.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                02
              </span>

              <h3 className="aquvana-card-title">
                Limited Growing Space
              </h3>

              <p className="aquvana-card-description">
                Households may have limited reliable land available
                around their homes for food production.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                03
              </span>

              <h3 className="aquvana-card-title">
                Changing Conditions
              </h3>

              <p className="aquvana-card-description">
                A useful growing system needs to work with changing
                household, weather, and water conditions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          OUR APPROACH
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              OUR APPROACH
            </span>

            <h2 className="aquvana-section-title">
              Built Around Four Principles.
            </h2>

            <p className="aquvana-section-description">
              AQUVANA focuses on practical design choices that can
              make a household growing system easier to adapt and
              maintain.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-4">

            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Modular
              </h3>

              <p className="aquvana-card-description">
                Individual components can be assembled and adapted
                according to household needs.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Repairable
              </h3>

              <p className="aquvana-card-description">
                Individual parts can be repaired or replaced rather
                than requiring replacement of the entire system.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Accessible
              </h3>

              <p className="aquvana-card-description">
                The concept emphasizes practical materials,
                understandable guidance, and local support.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Adaptable
              </h3>

              <p className="aquvana-card-description">
                The system can be adjusted as growing needs and
                environmental conditions change.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          PRODUCT + DIGITAL PLATFORM
          ============================================================ */}

      <section className="aquvana-section aquvana-section-mint">

        <div className="aquvana-container">

          <div className="aquvana-two-column">

            <div>

              <span className="aquvana-section-label">
                PRODUCT + DIGITAL SUPPORT
              </span>

              <h2 className="aquvana-section-title">
                More Than a Growing Structure.
              </h2>

              <p>
                AQUVANA combines a physical growing system with a
                digital platform that can support planning,
                crop management, maintenance, tasks, and harvest
                records.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                AQUVANA PLATFORM
              </span>

              <h3 className="aquvana-card-title">
                Plan. Grow. Maintain. Harvest.
              </h3>

              <p className="aquvana-card-description">
                The platform is designed to help users and local
                support partners manage the growing system and keep
                useful records throughout its lifecycle.
              </p>

              <Link
                to="/dashboard"
                className="aquvana-button aquvana-button-primary"
                style={{ marginTop: "24px" }}
              >
                Explore Dashboard
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          ACCESS MODEL
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              ACCESS MODEL
            </span>

            <h2 className="aquvana-section-title">
              Designed for Real-World Access.
            </h2>

            <p className="aquvana-section-description">
              AQUVANA does not assume that every household needs
              to become a direct website user. The physical product
              can be supported through local and community networks.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-3">

            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Households
              </h3>

              <p className="aquvana-card-description">
                Households use the physical AQUVANA system to grow
                food around their homes.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Local Support
              </h3>

              <p className="aquvana-card-description">
                Local agricultural and community partners can help
                with demonstration, distribution, guidance, and
                practical support.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Digital Access
              </h3>

              <p className="aquvana-card-description">
                Digitally capable household members and support
                partners can use the platform for planning,
                management, and record keeping.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          VISION
          ============================================================ */}

      <section className="aquvana-section aquvana-section-cta">

        <div className="aquvana-container">

          <div className="aquvana-cta">

            <span className="aquvana-section-label">
              THE VISION
            </span>

            <h2>
              Grow Through Rising Waters.
            </h2>

            <p>
              AQUVANA aims to explore a more adaptable way for
              flood-prone households to grow food, maintain their
              growing systems, and build resilience around changing
              water conditions.
            </p>

            <div className="aquvana-hero-actions">

              <Link
                to="/crops"
                className="aquvana-button aquvana-button-primary"
              >
                Explore Crops
              </Link>

              <Link
                to="/register"
                className="aquvana-button aquvana-button-secondary"
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;