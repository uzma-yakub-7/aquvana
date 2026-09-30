import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("aquvana_user")
  );

  return (
    <div className="aquvana-page">
      <section className="aquvana-section">

        {/* Dashboard Header */}

        <div className="aquvana-section-header">

          <span className="aquvana-section-label">
            YOUR AQUVANA
          </span>

          <h1 className="aquvana-section-title">
            Welcome, {user?.name || "AQUVANA User"}.
          </h1>

          <p className="aquvana-section-description">
            Manage your AQUVANA growing system, explore suitable
            crops, organize garden activities, and keep track of
            your harvest.
          </p>

        </div>


        {/* Quick Overview */}

        <div className="aquvana-grid aquvana-grid-4">

          <div className="aquvana-card">
            <span className="aquvana-section-label">
              GARDEN
            </span>

            <h2 className="aquvana-card-title">
              AQUVANA System
            </h2>

            <p className="aquvana-card-description">
              Your modular growing space is ready to manage.
            </p>
          </div>


          <div className="aquvana-card">
            <span className="aquvana-section-label">
              CROP LIBRARY
            </span>

            <h2 className="aquvana-card-title">
              8 Crops
            </h2>

            <p className="aquvana-card-description">
              Explore crops and their growing requirements.
            </p>
          </div>


          <div className="aquvana-card">
            <span className="aquvana-section-label">
              TASK MANAGEMENT
            </span>

            <h2 className="aquvana-card-title">
              Garden Tasks
            </h2>

            <p className="aquvana-card-description">
              Organize watering, planting, maintenance, and care.
            </p>
          </div>


          <div className="aquvana-card">
            <span className="aquvana-section-label">
              HARVEST
            </span>

            <h2 className="aquvana-card-title">
              Harvest Records
            </h2>

            <p className="aquvana-card-description">
              Keep your harvest information organized in one place.
            </p>
          </div>

        </div>


        {/* Main Management Cards */}

        <div
          className="aquvana-grid aquvana-grid-3"
          style={{ marginTop: "32px" }}
        >

          {/* Garden */}

          <div className="aquvana-card">

            <span className="aquvana-section-label">
              GROWING SYSTEM
            </span>

            <h2 className="aquvana-card-title">
              My Garden
            </h2>

            <p className="aquvana-card-description">
              Manage your AQUVANA growing system and keep your
              garden information organized.
            </p>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(0, 0, 0, 0.03)"
              }}
            >
              <strong>
                Garden Management
              </strong>

              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0
                }}
              >
                Keep your growing setup and garden activities
                together.
              </p>
            </div>

            <Link
              to="/garden"
              className="aquvana-button aquvana-button-primary"
              style={{ marginTop: "20px" }}
            >
              Open Garden
            </Link>

          </div>


          {/* Tasks */}

          <div className="aquvana-card">

            <span className="aquvana-section-label">
              GARDEN CARE
            </span>

            <h2 className="aquvana-card-title">
              Tasks
            </h2>

            <p className="aquvana-card-description">
              Keep your garden activities organized and easy to
              follow.
            </p>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(0, 0, 0, 0.03)"
              }}
            >
              <strong>
                Task Planning
              </strong>

              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0
                }}
              >
                Organize watering, planting, maintenance, and
                other garden activities.
              </p>
            </div>

            <Link
              to="/tasks"
              className="aquvana-button aquvana-button-primary"
              style={{ marginTop: "20px" }}
            >
              View Tasks
            </Link>

          </div>


          {/* Harvest */}

          <div className="aquvana-card">

            <span className="aquvana-section-label">
              FOOD PRODUCTION
            </span>

            <h2 className="aquvana-card-title">
              Harvest
            </h2>

            <p className="aquvana-card-description">
              Record and review the food produced through your
              AQUVANA garden.
            </p>

            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(0, 0, 0, 0.03)"
              }}
            >
              <strong>
                Harvest Records
              </strong>

              <p
                style={{
                  marginTop: "6px",
                  marginBottom: 0
                }}
              >
                Keep your harvested crops and production records
                organized.
              </p>
            </div>

            <Link
              to="/harvest"
              className="aquvana-button aquvana-button-primary"
              style={{ marginTop: "20px" }}
            >
              View Harvest
            </Link>

          </div>

        </div>


        {/* Crop Library Shortcut */}

        <div
          className="aquvana-card"
          style={{ marginTop: "32px" }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap"
            }}
          >

            <div>

              <span className="aquvana-section-label">
                CROP LIBRARY
              </span>

              <h2
                className="aquvana-card-title"
                style={{ marginTop: "8px" }}
              >
                Explore Suitable Crops
              </h2>

              <p
                className="aquvana-card-description"
                style={{ marginBottom: 0 }}
              >
                Browse crop information including growing time,
                water tolerance, sunlight, and difficulty.
              </p>

            </div>

            <Link
              to="/crops"
              className="aquvana-button aquvana-button-secondary"
            >
              Explore Crops
            </Link>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Dashboard;