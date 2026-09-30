import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="aquvana-page">

      {/* E:\aquvana\client\public\aquvana-logo.pn ============================================================
          HERO
          ============================================================ */}

      <section className="aquvana-hero">

        <div className="aquvana-container">

          <img
          src="/aquvana-logo.png"
          alt="AQUVANA"
          className="aquvana-hero-logo"
          />

          <div className="aquvana-hero-content">

            <span className="aquvana-section-label">
              FLOOD-RESILIENT FOOD GROWING
            </span>

            <h1 className="aquvana-hero-title">
              Grow Through
              <span className="aquvana-brand-text">
                {" "}Rising Waters.
              </span>
            </h1>

            <p className="aquvana-hero-description">
              AQUVANA is a modular, repairable household food-growing
              system designed for communities living with flooding
              and waterlogging.
            </p>

            <div className="aquvana-hero-actions">

              <Link
                to="/register"
                className="aquvana-button aquvana-button-primary"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="aquvana-button aquvana-button-secondary"
              >
                Learn About AQUVANA
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          THE PROBLEM
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              THE CHALLENGE
            </span>

            <h2 className="aquvana-section-title">
              When Water Rises, Growing Food Becomes Harder.
            </h2>

            <p className="aquvana-section-description">
              Flooding and prolonged waterlogging can reduce the
              usable space available for conventional household
              food growing. AQUVANA explores a different approach.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-3">

            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Flooding
              </h3>

              <p className="aquvana-card-description">
                Rising water can make ordinary ground-level growing
                spaces difficult or temporarily unusable.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Limited Space
              </h3>

              <p className="aquvana-card-description">
                Many households do not have enough reliable land
                around the home for conventional vegetable gardens.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Limited Resources
              </h3>

              <p className="aquvana-card-description">
                A practical system needs to consider affordability,
                locally available materials, maintenance, and repair.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          THE SOLUTION
          ============================================================ */}

      <section className="aquvana-section aquvana-section-soft">

        <div className="aquvana-container">

          <div className="aquvana-two-column">

            <div>

              <span className="aquvana-section-label">
                THE AQUVANA APPROACH
              </span>

              <h2 className="aquvana-section-title">
                A Growing System Designed to Adapt.
              </h2>

              <p>
                AQUVANA is designed around modularity, repairability,
                and practical adaptation to changing water conditions.
              </p>

              <p>
                Instead of depending on one permanent growing structure,
                the system can be assembled from replaceable modules
                and adapted to the needs of the household.
              </p>

              <Link
                to="/about"
                className="aquvana-button aquvana-button-primary"
              >
                Explore the Approach
              </Link>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                AQUVANA
              </span>

              <h3 className="aquvana-card-title">
                Water. Growth. Resilience.
              </h3>

              <p className="aquvana-card-description">
                A practical product concept for growing food where
                conventional household gardening becomes difficult
                because of rising or persistent water.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          HOW IT WORKS
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              HOW AQUVANA WORKS
            </span>

            <h2 className="aquvana-section-title">
              From Product to Harvest.
            </h2>

            <p className="aquvana-section-description">
              AQUVANA combines a physical growing system with
              practical digital support.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-3">

            <div className="aquvana-card">

              <span className="aquvana-badge">
                01
              </span>

              <h3 className="aquvana-card-title">
                Plan
              </h3>

              <p className="aquvana-card-description">
                Understand your available space, growing needs,
                materials, and suitable crops.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                02
              </span>

              <h3 className="aquvana-card-title">
                Build
              </h3>

              <p className="aquvana-card-description">
                Assemble a modular AQUVANA system using practical,
                locally accessible components.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                03
              </span>

              <h3 className="aquvana-card-title">
                Grow
              </h3>

              <p className="aquvana-card-description">
                Grow suitable crops and manage everyday garden
                activities through the AQUVANA system.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                04
              </span>

              <h3 className="aquvana-card-title">
                Maintain
              </h3>

              <p className="aquvana-card-description">
                Monitor the system, identify maintenance needs,
                and replace or repair individual modules.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                05
              </span>

              <h3 className="aquvana-card-title">
                Harvest
              </h3>

              <p className="aquvana-card-description">
                Record what your household grows and track
                harvests over time.
              </p>

            </div>


            <div className="aquvana-card">

              <span className="aquvana-badge">
                06
              </span>

              <h3 className="aquvana-card-title">
                Adapt
              </h3>

              <p className="aquvana-card-description">
                Adjust your growing system as your household,
                crops, and water conditions change.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          ACCESS MODEL
          ============================================================ */}

      <section className="aquvana-section aquvana-section-mint">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              BUILT FOR REAL COMMUNITIES
            </span>

            <h2 className="aquvana-section-title">
              AQUVANA Does Not Depend on Everyone Being a Website User.
            </h2>

            <p className="aquvana-section-description">
              The physical product can reach households through
              trusted local partners and community access points,
              while the digital platform supports planning,
              management, and knowledge.
            </p>

          </div>


          <div className="aquvana-grid aquvana-grid-3">

            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Households
              </h3>

              <p className="aquvana-card-description">
                Families receive and use the AQUVANA growing system
                to produce food around their homes.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Local Partners
              </h3>

              <p className="aquvana-card-description">
                Local agricultural and community partners can help
                introduce, demonstrate, distribute, and support
                the product.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Digital Support
              </h3>

              <p className="aquvana-card-description">
                The AQUVANA platform provides tools for crop
                planning, tasks, maintenance, harvest records,
                and garden management.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          PRODUCT PRINCIPLES
          ============================================================ */}

      <section className="aquvana-section">

        <div className="aquvana-container">

          <div className="aquvana-section-header">

            <span className="aquvana-section-label">
              OUR DESIGN PRINCIPLES
            </span>

            <h2 className="aquvana-section-title">
              Designed to Be Practical.
            </h2>

          </div>


          <div className="aquvana-grid aquvana-grid-4">

            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Modular
              </h3>

              <p className="aquvana-card-description">
                Build the system from individual components that
                can be adapted to different household needs.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Repairable
              </h3>

              <p className="aquvana-card-description">
                Replace or repair individual parts instead of
                discarding the entire system.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Accessible
              </h3>

              <p className="aquvana-card-description">
                Focus on practical materials, understandable
                guidance, and local access.
              </p>

            </div>


            <div className="aquvana-card">

              <h3 className="aquvana-card-title">
                Resilient
              </h3>

              <p className="aquvana-card-description">
                Designed around the reality that water conditions
                can change and systems need to adapt.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          CTA
          ============================================================ */}

      <section className="aquvana-section aquvana-section-cta">

        <div className="aquvana-container">

          <div className="aquvana-cta">

            <span className="aquvana-section-label">
              START WITH AQUVANA
            </span>

            <h2>
              Grow Through Rising Waters.
            </h2>

            <p>
              Explore the AQUVANA system and begin planning a
              more adaptable way to grow food.
            </p>

            <div className="aquvana-hero-actions">

              <Link
                to="/register"
                className="aquvana-button aquvana-button-primary"
              >
                Get Started
              </Link>

              <Link
                to="/crops"
                className="aquvana-button aquvana-button-secondary"
              >
                Explore Crops
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;