import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CropDetails() {
  const { cropId } = useParams();

  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/crops/${cropId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Crop not found.");
        }

        return response.json();
      })
      .then((data) => {
        setCrop(data.crop);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Crop details error:", error);
        setError("Unable to load crop details.");
        setLoading(false);
      });
  }, [cropId]);

  if (loading) {
    return (
      <div className="aquvana-page">
        <div className="aquvana-empty-state">
          <h2>Loading Crop...</h2>
          <p>Please wait while AQUVANA loads the crop details.</p>
        </div>
      </div>
    );
  }

  if (error || !crop) {
    return (
      <div className="aquvana-page">
        <div className="aquvana-empty-state">
          <h2>Crop Not Found</h2>
          <p>{error}</p>

          <Link
            to="/crops"
            className="aquvana-button aquvana-button-primary"
          >
            Back to Crops
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="aquvana-page">
      <section className="aquvana-page-hero">
        <div className="aquvana-container">
          <span className="aquvana-section-label">
            CROP DETAILS
          </span>

          <h1 className="aquvana-page-title">
            {crop.name}
          </h1>

          <p className="aquvana-page-description">
            {crop.description}
          </p>
        </div>
      </section>

      <section className="aquvana-section">
        <div className="aquvana-container">
          <div className="aquvana-two-column">
            <div>
              <span className="aquvana-badge">
                {crop.category}
              </span>

              <h2 className="aquvana-section-title">
                Growing Information
              </h2>

              <p>
                Use these characteristics as a starting point when
                planning this crop for your AQUVANA garden.
              </p>
            </div>

            <div className="aquvana-card">
              <div className="aquvana-crop-detail-grid">
                <div>
                  <span className="aquvana-crop-meta-label">
                    Growing Time
                  </span>
                  <strong>{crop.growing_time}</strong>
                </div>

                <div>
                  <span className="aquvana-crop-meta-label">
                    Water Tolerance
                  </span>
                  <strong>{crop.water_level}</strong>
                </div>

                <div>
                  <span className="aquvana-crop-meta-label">
                    Sunlight
                  </span>
                  <strong>{crop.sunlight}</strong>
                </div>

                <div>
                  <span className="aquvana-crop-meta-label">
                    Difficulty
                  </span>
                  <strong>{crop.difficulty}</strong>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/crops"
            className="aquvana-button aquvana-button-secondary"
            style={{ marginTop: "32px" }}
          >
            ← Back to Crop Library
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CropDetails;