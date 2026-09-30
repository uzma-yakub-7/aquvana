import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const categories = [
  "All",
  "Leafy Vegetable",
  "Vegetable",
  "Herb",
  "Root Vegetable",
];

function Crops() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [databaseCrops, setDatabaseCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/crops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch crops.");
        }

        return response.json();
      })
      .then((data) => {
        setDatabaseCrops(
          data.crops.map((crop) => ({
            id: crop.id,
            name: crop.name,
            category: crop.category,
            description: crop.description,
            season: crop.growing_time,
            waterTolerance: crop.water_level,
            sunlight: crop.sunlight,
            difficulty: crop.difficulty,
          }))
        );

        console.log("Crops from database:", data.crops);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Crop fetch error:", error);
        setError("Unable to load crops.");
        setLoading(false);
      });
  }, []);

  const filteredCrops = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return databaseCrops.filter((crop) => {
      const matchesCategory =
        category === "All" || crop.category === category;

      const matchesSearch =
        searchTerm === "" ||
        crop.name.toLowerCase().includes(searchTerm) ||
        crop.category.toLowerCase().includes(searchTerm) ||
        crop.description.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [search, category, databaseCrops]);

  if (loading) {
    return (
      <div className="aquvana-page">
        <div className="aquvana-empty-state">
          <h2>Loading Crops...</h2>
          <p>
            Please wait while AQUVANA loads the crop library.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="aquvana-page">
        <div className="aquvana-empty-state">
          <h2>Unable to Load Crops</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aquvana-page">

      {/* PAGE HERO */}

      <section className="aquvana-page-hero">
        <div className="aquvana-container">
          <span className="aquvana-section-label">
            CROP LIBRARY
          </span>

          <h1 className="aquvana-page-title">
            Explore Crops for Your AQUVANA Garden.
          </h1>

          <p className="aquvana-page-description">
            Explore a starting library of crops and consider their
            growing characteristics when planning your household
            system.
          </p>
        </div>
      </section>


      {/* CROP LIBRARY */}

      <section className="aquvana-section">
        <div className="aquvana-container">

          {/* SEARCH AND FILTERS */}

          <div className="aquvana-crop-controls">

            <div className="aquvana-search-wrapper">
              <label
                htmlFor="crop-search"
                className="aquvana-form-label"
              >
                Search crops
              </label>

              <input
                id="crop-search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by crop name..."
                className="aquvana-form-input"
              />
            </div>


            <div className="aquvana-category-wrapper">
              <label
                htmlFor="crop-category"
                className="aquvana-form-label"
              >
                Category
              </label>

              <select
                id="crop-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="aquvana-form-input"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

          </div>


          {/* BACK / CLEAR FILTERS */}

          <button
            type="button"
            className="aquvana-button aquvana-button-secondary"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
            style={{ marginBottom: "24px" }}
          >
            ← Back to All Crops
          </button>


          {/* RESULTS SUMMARY */}

          <div className="aquvana-crop-results-header">

            <div>
              <span className="aquvana-section-label">
                AVAILABLE CROPS
              </span>

              <h2 className="aquvana-section-title">
                Find a Crop to Explore.
              </h2>
            </div>

            <p className="aquvana-crop-count">
              {filteredCrops.length}{" "}
              {filteredCrops.length === 1 ? "crop" : "crops"}
            </p>

          </div>


          {/* CROP CARDS */}

          {filteredCrops.length > 0 ? (

            <div className="aquvana-grid aquvana-grid-4">

              {filteredCrops.map((crop) => (

                <article
                  key={crop.id}
                  className="aquvana-card aquvana-crop-card"
                >

                  <span className="aquvana-badge">
                    {crop.category}
                  </span>

                  <h3 className="aquvana-card-title">
                    {crop.name}
                  </h3>

                  <p className="aquvana-card-description">
                    {crop.description}
                  </p>


                  <div className="aquvana-crop-meta">

                    <div>
                      <span className="aquvana-crop-meta-label">
                        Growing time
                      </span>

                      <strong>
                        {crop.season}
                      </strong>
                    </div>


                    <div>
                      <span className="aquvana-crop-meta-label">
                        Water tolerance
                      </span>

                      <strong>
                        {crop.waterTolerance}
                      </strong>
                    </div>


                    <div>
                      <span className="aquvana-crop-meta-label">
                        Difficulty
                      </span>

                      <strong>
                        {crop.difficulty}
                      </strong>
                    </div>

                  </div>


                  <Link
                  to={`/crops/${crop.id}`}
                  className="aquvana-button aquvana-button-secondary"
                  >
                    View Details
                  </Link>

                </article>

              ))}

            </div>

          ) : (

            <div className="aquvana-empty-state">

              <h2>
                No crops found
              </h2>

              <p>
                Try a different search term or category.
              </p>

              <button
                type="button"
                className="aquvana-button aquvana-button-primary"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                style={{ marginTop: "20px" }}
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>
      </section>


      {/* CROP PLANNING NOTE */}

      <section className="aquvana-section aquvana-section-soft">

        <div className="aquvana-container">

          <div className="aquvana-two-column">

            <div>

              <span className="aquvana-section-label">
                BEFORE YOU GROW
              </span>

              <h2 className="aquvana-section-title">
                Match the Crop to the Growing Conditions.
              </h2>

            </div>

            <div>

              <p>
                Crop selection should consider the season,
                available space, container or module size,
                drainage, water conditions, sunlight, and
                local agricultural guidance.
              </p>

              <p style={{ marginTop: "18px" }}>
                The AQUVANA crop library is intended as a
                planning support tool rather than a replacement
                for local agricultural advice.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CROP DETAILS MODAL */}

      {selectedCrop && (

        <div
          className="aquvana-modal-overlay"
          role="presentation"
          onClick={() => setSelectedCrop(null)}
        >

          <div
            className="aquvana-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="crop-detail-title"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="aquvana-modal-close"
              onClick={() => setSelectedCrop(null)}
              aria-label="Close crop details"
            >
              ×
            </button>


            <span className="aquvana-badge">
              {selectedCrop.category}
            </span>


            <h2
              id="crop-detail-title"
              className="aquvana-section-title"
            >
              {selectedCrop.name}
            </h2>


            <p>
              {selectedCrop.description}
            </p>


            <div className="aquvana-crop-detail-grid">

              <div>
                <span className="aquvana-crop-meta-label">
                  Growing time
                </span>

                <strong>
                  {selectedCrop.season}
                </strong>
              </div>


              <div>
                <span className="aquvana-crop-meta-label">
                  Water tolerance
                </span>

                <strong>
                  {selectedCrop.waterTolerance}
                </strong>
              </div>


              <div>
                <span className="aquvana-crop-meta-label">
                  Sunlight
                </span>

                <strong>
                  {selectedCrop.sunlight}
                </strong>
              </div>


              <div>
                <span className="aquvana-crop-meta-label">
                  Difficulty
                </span>

                <strong>
                  {selectedCrop.difficulty}
                </strong>
              </div>

            </div>


            <button
              type="button"
              className="aquvana-button aquvana-button-primary"
              onClick={() => setSelectedCrop(null)}
              style={{ marginTop: "26px" }}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Crops;