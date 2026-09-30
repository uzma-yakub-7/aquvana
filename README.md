

# AQUVANA

## Grow Through Rising Waters

# SOFTWARE REQUIREMENTS SPECIFICATION

**Project Name:** AQUVANA
**System Name:** AQUVANA Digital Platform
**Product:** AQUVANA Modular Growing System
**Document Version:** 1.0
**Document Status:** Final Project Specification

---

# 1. INTRODUCTION

## 1.1 Purpose of the Document

This Software Requirements Specification defines the requirements and specifications of the AQUVANA Digital Platform.

It describes the purpose, scope, users, product context, system architecture, functional requirements, interfaces, data requirements, security requirements, quality requirements, validation methods, and future extensibility of the system.

The document also describes the broader AQUVANA product, its target users, market opportunity, business model, product differentiation, impact, and implementation progress.

---

## 1.2 Product Overview

AQUVANA is a modular and repairable household food-growing system designed for flood-prone environments.

The product combines a physical growing system with a digital platform.

The physical component focuses on adaptable household food growing.

The digital component provides information and management support.

The product slogan is:

**Grow Through Rising Waters.**

---

## 1.3 Background

Flooding and changing environmental conditions can disrupt conventional household food-growing activities.

AQUVANA approaches this challenge through adaptation rather than attempting to eliminate the environmental problem itself.

The system focuses on creating a product that can support household food growing while providing a digital layer for information and organization.

---

## 1.4 Intended Audience

This document is intended for:

* Software developers
* Software engineering students
* Project supervisors
* Testers
* Product stakeholders
* Agricultural collaborators
* Future development partners

---

## 1.5 Definitions and Abbreviations

| Term             | Definition                                |
| ---------------- | ----------------------------------------- |
| AQUVANA          | The complete physical and digital product |
| Digital Platform | The AQUVANA web application               |
| API              | Application Programming Interface         |
| REST             | Representational State Transfer           |
| JWT              | JSON Web Token                            |
| SQL              | Structured Query Language                 |
| UI               | User Interface                            |
| DB               | Database                                  |
| SRS              | Software Requirements Specification       |

---

# 2. SCOPE

## 2.1 Product Scope

AQUVANA consists of:

1. A physical growing system
2. A digital platform
3. Crop information
4. Garden-management functions
5. Task-management functions
6. Harvest-management functions
7. User authentication

---

## 2.2 Software Scope

The digital platform provides:

* Product information
* Crop library
* Crop search
* Crop filtering
* Crop details
* Registration
* Login
* Dashboard
* Garden
* Tasks
* Harvest
* Password recovery
* Database-backed information

---

## 2.3 In-Scope Features

The current software includes:

* React frontend
* Express backend
* PostgreSQL database
* REST APIs
* Authentication
* JWT generation
* Password hashing
* Password recovery
* Crop API
* Crop database
* Dashboard
* Application routing

---

## 2.4 Out-of-Scope Features

The current system does not directly control:

* Sensors
* Pumps
* Irrigation hardware
* Water-level hardware
* Automated environmental systems

---

# 3. PROBLEM STATEMENT

## 3.1 Environmental Challenge

Changing environmental and water conditions can disrupt household food-growing activities.

Flooding can reduce usable growing space and affect conventional cultivation arrangements.

---

## 3.2 Food-System Challenge

Environmental disruption can create additional pressure on food systems.

Household-level food production can therefore contribute to resilience and adaptation.

---

## 3.3 Household-Level Challenge

Households need practical ways to maintain food-growing opportunities when environmental conditions change.

---

## 3.4 Digital Support Gap

A physical growing system can benefit from a digital platform that helps users:

* Understand crops
* Compare crop requirements
* Organize growing activities
* Manage tasks
* Record harvest information

---

# 4. WHY THIS MATTERS

## 4.1 Changing Climate and Environmental Conditions

Climate and environmental conditions are changing.

This creates new challenges for food-growing systems.

---

## 4.2 Increasing Pressure on Food Systems

Changing environmental conditions can place additional pressure on food production and household food access.

---

## 4.3 Increasing Need for Adaptation

Adaptation is necessary when existing systems become less suitable for changing conditions.

AQUVANA focuses on adaptation through a modular household growing approach.

---

## 4.4 Importance of Household-Level Resilience

Household-level resilience matters because households can experience direct effects when food-growing activities are disrupted.

AQUVANA focuses on supporting household-level food-growing opportunities.

---

# 5. VISION AND VALUE PROPOSITION

## 5.1 Product Vision

AQUVANA aims to make household food growing more adaptable to changing water conditions.

---

## 5.2 Core Value Proposition

AQUVANA combines:

**A modular physical growing system with a digital support platform.**

The physical system provides the growing environment.

The digital platform provides information and management support.

---

## 5.3 Product Principles

The product is based on:

* Modularity
* Repairability
* Adaptation
* Household usability
* Digital support

---

## 5.4 Intended Benefits

The product is designed to support:

* Household food resilience
* Practical food growing
* Adaptation
* Access to crop information
* Organized garden activities

---

# 6. PROPOSED SOLUTION

## 6.1 Solution Overview

The AQUVANA solution consists of two connected layers.

```text
Physical Growing System
          +
Digital Platform
          ↓
Household Food-Growing Support
```

---

## 6.2 Physical Product

The physical product focuses on:

* Modular construction
* Repairable components
* Household-scale use
* Adaptation to changing water conditions

---

## 6.3 Digital Platform

The software provides:

* Crop information
* Crop search
* Crop filtering
* Crop details
* User accounts
* Dashboard
* Garden management
* Task management
* Harvest records
* Password recovery

---

## 6.4 Product Ecosystem

```text
                AQUVANA
                   │
        ┌──────────┴──────────┐
        │                     │
 Physical Product       Digital Platform
        │                     │
        └──────────┬──────────┘
                   ↓
          Household Resilience
```

---

# 7. PRODUCT OBJECTIVES

## 7.1 Primary Objectives

AQUVANA aims to:

1. Support household food growing.
2. Improve adaptability to changing water conditions.
3. Promote modularity.
4. Promote repairability.
5. Provide digital support.

---

## 7.2 Software Objectives

The digital platform aims to:

* Provide reliable crop information.
* Provide secure user accounts.
* Provide an organized dashboard.
* Support garden activities.
* Support task organization.
* Support harvest records.

---

## 7.3 Product Objectives

The complete product aims to connect physical adaptation with digital support.

---

# 8. STAKEHOLDERS AND USERS

## 8.1 Primary Users

* Flood-prone households
* Household food growers
* Digitally capable household members

---

## 8.2 Supporting Users

* Agricultural professionals
* Local facilitators
* Community organizations
* NGOs
* Development organizations
* Local agro-dealers

---

## 8.3 Stakeholders

Stakeholders include:

* End users
* Product developers
* Software developers
* Agricultural collaborators
* Distribution partners
* Community organizations
* Institutional partners

---

# 9. TARGET MARKET AND OPPORTUNITY

## 9.1 Target Customers

The initial target customer is a household in a flood-prone environment that wants a practical food-growing approach adaptable to changing water conditions.

---

## 9.2 Initial Market

The initial market can focus on flood-prone communities where household-scale food production is relevant.

---

## 9.3 Market Need

The product responds to needs related to:

* Climate adaptation
* Household food resilience
* Small-scale food production
* Repairable products
* Accessible agricultural information

---

## 9.4 Market Opportunity

AQUVANA can address an opportunity for practical household adaptation products.

---

## 9.5 Market Expansion

Potential expansion can occur through:

* Agro-dealers
* Community organizations
* NGOs
* Development programs
* Agricultural networks

---

# 10. PRODUCT DESCRIPTION

## 10.1 Product Components

The complete product consists of:

### Physical Component

A modular household growing system.

### Digital Component

A full-stack web platform.

---

## 10.2 Physical Component

The physical product emphasizes:

* Modularity
* Repairability
* Household use
* Flood-oriented adaptation

---

## 10.3 Digital Component

The digital platform includes:

* Public information
* Crop library
* Crop details
* Authentication
* Dashboard
* Garden
* Tasks
* Harvest

---

## 10.4 Product Ecosystem

```text
Physical System
      +
Digital Platform
      ↓
AQUVANA Product Ecosystem
```

---

# 11. BUSINESS MODEL

## 11.1 Business Model Overview

AQUVANA follows a product-based model.

The physical product is the primary commercial product.

The digital platform supports the physical product.

```text
Customer
   ↓
AQUVANA Physical Product
   ↓
Digital Support Platform
   ↓
Continued Product Use
```

---

## 11.2 Revenue Sources

Potential revenue sources include:

* Physical product sales
* Replacement components
* Institutional deployments
* Partnership-supported distribution

---

## 11.3 Customer Model

The customer purchases the physical AQUVANA system.

The digital platform functions as its support layer.

---

## 11.4 Distribution Model

Potential distribution channels include:

* Direct sales
* Local agro-dealers
* Community organizations
* Institutional programs

---

## 11.5 Institutional Model

NGOs and development organizations may support acquisition and distribution for households that require assistance.

---

## 11.6 Pricing Considerations

Final pricing shall consider:

* Materials
* Manufacturing
* Assembly
* Packaging
* Distribution
* Replacement parts
* Affordability
* Operating margin

---

# 12. GO-TO-MARKET STRATEGY

## 12.1 Initial Strategy

AQUVANA can begin with a small prototype and household pilot.

---

## 12.2 Pilot Strategy

A proposed initial pilot consists of approximately 5–10 households.

The pilot can evaluate:

* Usability
* Durability
* Repairability
* Crop suitability
* User acceptance
* Cost

---

## 12.3 Distribution

Local agro-dealers can provide a practical distribution channel.

---

## 12.4 Partnerships

Potential partners include:

* Agricultural professionals
* NGOs
* Development organizations
* Community organizations

---

## 12.5 Expansion

```text
Prototype
   ↓
Household Pilot
   ↓
Evidence
   ↓
Local Distribution
   ↓
Partnerships
   ↓
Wider Adoption
```

---

# 13. INNOVATION AND DIFFERENTIATION

## 13.1 Existing Context

Floating agriculture is an established agricultural practice in Bangladesh.

AQUVANA does not claim to have invented floating agriculture.

---

## 13.2 AQUVANA Approach

AQUVANA focuses on adapting the broader agricultural context into a household-oriented product.

---

## 13.3 Product Differentiation

The proposed product combines:

* Household scale
* Modularity
* Repairability
* Flood-oriented adaptation
* Digital support

---

## 13.4 Digital Differentiation

The software adds:

* Structured crop information
* Search
* Filtering
* User accounts
* Garden organization
* Task organization
* Harvest organization

---

# 14. OVERALL SYSTEM DESCRIPTION

## 14.1 System Perspective

The AQUVANA digital platform is a full-stack web application.

```text
React Frontend
       ↓
Express / Node.js
       ↓
REST API
       ↓
PostgreSQL
```

---

## 14.2 Major Components

The system contains:

1. Frontend
2. Backend
3. API layer
4. Authentication
5. Crop system
6. Password recovery
7. Database
8. Routing

---

## 14.3 System Workflow

```text
User
 ↓
React Interface
 ↓
API Request
 ↓
Express Backend
 ↓
PostgreSQL
 ↓
API Response
 ↓
React Interface
```

---

## 14.4 Operating Environment

### Client

* Windows development environment
* Modern web browser
* React
* Vite

### Server

* Node.js
* Express

### Database

* PostgreSQL
* Neon

---

## 14.5 Assumptions

The system assumes:

* Users have browser access.
* Users can provide valid information.
* The backend is available.
* The database is available.
* Crop information is available.

---

## 14.6 Dependencies

The system depends on:

* Node.js
* React
* Express
* PostgreSQL
* Neon
* React Router
* Bcrypt
* JWT
* CORS
* dotenv

---

## 14.7 Constraints

The system is constrained by:

* Internet/database availability
* Development environment
* Available product resources
* Physical prototype requirements
* Product affordability

---

# 15. SYSTEM ARCHITECTURE

## 15.1 Architecture Overview

```text
┌─────────────────────────┐
│     React Frontend      │
│                         │
│ Pages / Components      │
│ React Router            │
└───────────┬─────────────┘
            │
            │ HTTP / REST
            ↓
┌─────────────────────────┐
│   Node.js / Express     │
│                         │
│ Authentication API      │
│ Crop API                │
│ Password Reset API      │
└───────────┬─────────────┘
            │
            │ SQL
            ↓
┌─────────────────────────┐
│     PostgreSQL / Neon   │
│                         │
│ users                   │
│ crops                   │
│ password_reset_tokens   │
└─────────────────────────┘
```

---

## 15.2 Frontend Layer

The frontend manages:

* User interface
* Navigation
* Forms
* API requests
* Data presentation

---

## 15.3 Backend Layer

The backend manages:

* Business logic
* Authentication
* API endpoints
* Database access
* Password recovery

---

## 15.4 API Layer

REST APIs connect the frontend to backend functionality.

---

## 15.5 Database Layer

PostgreSQL stores persistent system data.

---

## 15.6 Data Flow

```text
Frontend
   ↓
REST API
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
Frontend
```

---

# 16. TECHNOLOGY STACK

| Layer            | Technology   |
| ---------------- | ------------ |
| Frontend         | React        |
| Build Tool       | Vite         |
| Routing          | React Router |
| Styling          | CSS          |
| Backend          | Node.js      |
| Framework        | Express      |
| API              | REST         |
| Database         | PostgreSQL   |
| Database Hosting | Neon         |
| Password Hashing | Bcrypt       |
| Authentication   | JWT          |
| Configuration    | dotenv       |
| CORS             | CORS         |

---

# 17. FUNCTIONAL REQUIREMENTS

## 17.1 Home

**FR-001:** The system shall provide a homepage introducing AQUVANA.

**FR-002:** The homepage shall communicate the product purpose.

---

## 17.2 About

**FR-003:** The system shall provide an About page.

**FR-004:** The About page shall provide information about AQUVANA.

---

## 17.3 Crop Library

**FR-005:** The system shall retrieve crop information from the backend.

**FR-006:** The system shall display available crop records.

---

## 17.4 Crop Search

**FR-007:** The system shall allow users to search crop records.

---

## 17.5 Crop Filtering

**FR-008:** The system shall allow users to filter available crops.

---

## 17.6 Crop Details

**FR-009:** The system shall allow users to select an individual crop.

**FR-010:** The system shall retrieve the selected crop using its unique ID.

**FR-011:** The system shall display detailed crop information.

---

## 17.7 Registration

**FR-012:** The system shall allow users to register.

**FR-013:** The system shall require a name.

**FR-014:** The system shall require an email.

**FR-015:** The system shall require a password.

**FR-016:** The system shall reject passwords shorter than six characters.

**FR-017:** The system shall reject duplicate email addresses.

---

## 17.8 Login

**FR-018:** The system shall allow registered users to log in.

**FR-019:** The system shall validate submitted credentials.

**FR-020:** The system shall reject invalid credentials.

**FR-021:** The system shall generate a JWT after successful authentication.

---

## 17.9 Dashboard

**FR-022:** The system shall provide a user dashboard.

**FR-023:** The dashboard shall provide access to Garden.

**FR-024:** The dashboard shall provide access to Tasks.

**FR-025:** The dashboard shall provide access to Harvest.

**FR-026:** The dashboard shall provide access to the Crop Library.

---

## 17.10 Garden

**FR-027:** The system shall provide a Garden page.

**FR-028:** The Garden page shall provide an interface for organizing the AQUVANA growing system.

---

## 17.11 Tasks

**FR-029:** The system shall provide a Tasks page.

**FR-030:** The Tasks page shall provide an interface for organizing garden activities.

---

## 17.12 Harvest

**FR-031:** The system shall provide a Harvest page.

**FR-032:** The Harvest page shall provide an interface for organizing harvest information.

---

## 17.13 Password Recovery

**FR-033:** The system shall allow users to request password recovery.

**FR-034:** The system shall generate a temporary reset token.

**FR-035:** The system shall assign an expiration time to the token.

**FR-036:** The system shall validate the token.

**FR-037:** The system shall hash the new password.

**FR-038:** The system shall update the stored password hash.

**FR-039:** The system shall delete the used reset token.

---

# 18. EXTERNAL INTERFACE REQUIREMENTS

## 18.1 User Interface

The system shall provide:

* Navigation
* Forms
* Buttons
* Cards
* Search controls
* Filters
* Feedback messages

---

## 18.2 Browser Interface

The frontend shall operate through a modern web browser.

---

## 18.3 API Interface

The frontend shall communicate with the backend using HTTP requests.

Example:

```js
fetch("http://localhost:5000/api/crops")
```

---

## 18.4 Database Interface

The backend shall communicate with PostgreSQL using SQL queries.

Example:

```js
const result = await pool.query(
  "SELECT * FROM crops ORDER BY name ASC"
);
```

---

# 19. INTERNAL INTERFACE REQUIREMENTS

## 19.1 Frontend-to-Backend

```text
React
 ↓
HTTP Request
 ↓
Express
```

---

## 19.2 Backend-to-Database

```text
Express
 ↓
SQL Query
 ↓
PostgreSQL
```

---

## 19.3 Authentication Interface

```text
React
 ↓
Authentication API
 ↓
PostgreSQL
 ↓
Credential Verification
 ↓
JWT
 ↓
React
```

---

## 19.4 Crop Data Interface

```text
Crops.jsx
 ↓
GET /api/crops
 ↓
crops.routes.js
 ↓
PostgreSQL
 ↓
JSON Response
 ↓
Crops.jsx
```

---

# 20. API REQUIREMENTS

## 20.1 Authentication API

### POST `/api/auth/register`

Creates a user account.

### POST `/api/auth/login`

Authenticates a user.

---

## 20.2 Crop API

### GET `/api/crops`

Returns available crop records.

### GET `/api/crops/:id`

Returns an individual crop.

---

## 20.3 Password Recovery API

### POST `/api/password-reset/forgot-password`

Creates a password-reset token.

### POST `/api/password-reset/reset-password`

Validates the token and changes the password.

---

# 21. DATABASE REQUIREMENTS

## 21.1 Users Table

The `users` table stores:

* ID
* Name
* Email
* Password hash
* Created timestamp
* Updated timestamp

---

## 21.2 Crops Table

The `crops` table stores:

* ID
* Name
* Category
* Description
* Growing time
* Water level
* Sunlight
* Difficulty
* Created timestamp

---

## 21.3 Password Reset Tokens

The `password_reset_tokens` table stores:

* ID
* User ID
* Token
* Expiration time
* Creation time

---

## 21.4 Relationships

Each password-reset token is associated with a user.

```text
users
  │
  │ 1
  │
  └──────────< password_reset_tokens
                 many
```

---

# 22. DATA REQUIREMENTS

## 22.1 User Data

User data shall include:

| Field         | Purpose                        |
| ------------- | ------------------------------ |
| id            | Unique identifier              |
| name          | User name                      |
| email         | Account email                  |
| password_hash | Secure password representation |
| created_at    | Creation time                  |
| updated_at    | Update time                    |

## 22.2 Crop Data

Current crop records include:

* Amaranth
* Bottle Gourd
* Chili
* Coriander
* Eggplant
* Okra
* Radish
* Water Spinach

Each record contains crop requirements and growing information.

---

# 23. AUTHENTICATION AND SECURITY REQUIREMENTS

## 23.1 Password Security

Passwords shall be hashed before database storage.

Current implementation:

```js
const passwordHash = await bcrypt.hash(password, 12);
```

---

## 23.2 Password Verification

The system shall compare submitted passwords with stored hashes.

```js
const passwordMatches = await bcrypt.compare(
  password,
  user.password_hash
);
```

---

## 23.3 JWT Authentication

Successful login shall generate a JWT.

```js
const token = jwt.sign(
```

---

## 23.4 Password Reset Security

Reset tokens shall:

* Be randomly generated.
* Have limited validity.
* Be validated before use.
* Be removed after successful use.

The current reset-token validity is 15 minutes.

---

## 23.5 Environment Variables

Sensitive configuration shall be stored outside frontend source code.

Database credentials shall not be exposed through the client application.

---

# 24. USER WORKFLOWS

## 24.1 New User

```text
Register
 ↓
Account Created
 ↓
Login
 ↓
JWT
 ↓
Dashboard
```

## 24.2 Crop Exploration

```text
Crops
 ↓
Search / Filter
 ↓
Select Crop
 ↓
Crop Details
```

## 24.3 Garden

```text
Dashboard
 ↓
Garden
 ↓
Garden Management
```

## 24.4 Tasks

```text
Dashboard
 ↓
Tasks
 ↓
Garden Activities
```

## 24.5 Harvest

```text
Dashboard
 ↓
Harvest
 ↓
Harvest Records
```

## 24.6 Password Recovery

```text
Forgot Password
 ↓
Email
 ↓
Temporary Token
 ↓
Reset Password
 ↓
Bcrypt Hash
 ↓
Database Update
 ↓
Token Removal
 ↓
Login
```

---

# 25. NON-FUNCTIONAL REQUIREMENTS

## 25.1 Performance

The system should process normal API requests efficiently.

Database queries should avoid unnecessary processing.

---

## 25.2 Reliability

The system shall:

* Handle database errors.
* Handle missing records.
* Return appropriate HTTP status codes.
* Reject invalid credentials.

---

## 25.3 Availability

The software shall depend on availability of:

* Backend server
* Database
* Network connection where required

---

## 25.4 Usability

The interface shall provide:

* Clear navigation
* Understandable labels
* Readable information
* Meaningful error messages
* Meaningful success messages

---

## 25.5 Maintainability

The system shall use modular frontend and backend files.

Backend responsibilities shall be separated into appropriate route and configuration files.

---

## 25.6 Scalability

The architecture shall allow:

* Additional users
* Additional crop records
* Additional APIs
* Additional database tables
* Additional frontend pages

---

## 25.7 Security

The system shall protect:

* Passwords
* Database credentials
* Authentication information
* Password-reset functionality

---

# 26. ENVIRONMENTAL AND ADAPTATION REQUIREMENTS

## 26.1 Product Context

The system shall support a product designed for changing water and environmental conditions.

## 26.2 Physical Product

The physical product shall emphasize:

* Modularity
* Repairability
* Household-scale use
* Adaptation

## 26.3 Digital Platform

The software shall provide information and organization functions supporting the physical product.

---

# 27. PRIVACY AND SAFETY REQUIREMENTS

The system shall:

* Avoid exposing passwords.
* Store passwords using hashing.
* Protect database credentials.
* Limit reset-token validity.
* Remove used reset tokens.
* Avoid unnecessary exposure of user information.

---

# 28. VERIFICATION AND VALIDATION

## 28.1 Verification Methods

The system shall be evaluated through:

* Functional testing
* API testing
* Database testing
* UI testing
* Authentication testing
* Manual demonstration

---

## 28.2 Functional Testing

Each functional requirement shall be tested against its expected result.

---

## 28.3 API Testing

### Crop API

```text
GET /api/crops
```

Expected:

* Successful response
* Crop records returned

### Crop Details API

```text
GET /api/crops/:id
```

Expected:

* Correct crop returned for a valid ID
* 404 for an invalid ID

---

## 28.4 Database Testing

Database testing shall verify:

* User records
* Crop records
* Reset-token records
* Data persistence

---

## 28.5 Authentication Testing

Testing shall verify:

* Registration
* Duplicate email rejection
* Password hashing
* Login
* Invalid credential rejection
* JWT generation

---

## 28.6 Password Recovery Testing

Testing shall verify:

* Token creation
* Token expiration
* Token validation
* Password update
* Password hashing
* Token deletion

---

# 29. REQUIREMENTS TRACEABILITY

| Requirement | Implementation                | Verification      |
| ----------- | ----------------------------- | ----------------- |
| FR-001      | Home.jsx                      | UI inspection     |
| FR-003      | About.jsx                     | UI inspection     |
| FR-005      | Crops.jsx / crops.routes.js   | API test          |
| FR-007      | Crops.jsx                     | Search test       |
| FR-008      | Crops.jsx                     | Filter test       |
| FR-009      | CropDetails.jsx               | Navigation test   |
| FR-012      | Register.jsx / auth.routes.js | Registration test |
| FR-018      | Login.jsx / auth.routes.js    | Login test        |
| FR-022      | Dashboard.jsx                 | UI test           |
| FR-027      | Garden.jsx                    | UI test           |
| FR-029      | Tasks.jsx                     | UI test           |
| FR-031      | Harvest.jsx                   | UI test           |
| FR-033      | ForgotPassword.jsx            | Reset test        |
| FR-037      | passwordReset.routes.js       | Security test     |
| FR-039      | passwordReset.routes.js       | Database test     |

---

# 30. PRODUCT VALIDATION AND CURRENT PROGRESS

## 30.1 Digital Product Progress

The current digital platform includes:

* React frontend
* Express backend
* PostgreSQL database
* Real crop records
* REST APIs
* User registration
* User login
* JWT authentication
* Password recovery
* Dashboard
* Crop API integration

---

## 30.2 Technical Validation

The application demonstrates a working data flow:

```text
React
 ↓
Express API
 ↓
PostgreSQL
 ↓
Express
 ↓
React
```

---

## 30.3 Product Validation

The broader physical product requires validation through:

* Prototype testing
* Household testing
* Agricultural feedback
* Cost testing
* Repairability testing

---

## 30.4 Evidence

The software provides demonstrable evidence through:

* Database-backed crop records
* Working API endpoints
* Authentication
* Password recovery
* Frontend-to-backend communication
* Backend-to-database communication

---

# 31. FINANCIAL REQUIREMENTS

## 31.1 Cost Structure

The physical product cost should account for:

* Materials
* Manufacturing
* Assembly
* Packaging
* Distribution
* Replacement components

---

## 31.2 Unit Economics

Future product validation shall establish:

* Cost per unit
* Selling price
* Gross margin
* Replacement cost
* Distribution cost

---

## 31.3 Revenue

Potential revenue sources include:

* Physical product sales
* Replacement parts
* Institutional deployments
* Partnership-supported distribution

---

## 31.4 Financial Forecast

Future financial planning should estimate:

* Units sold
* Revenue
* Operating costs
* Gross profit
* Break-even point

---

## 31.5 Funding Requirements

Potential funding requirements include:

* Prototype development
* Materials
* Pilot testing
* Agricultural consultation
* Product refinement
* Distribution
* Software development

---

# 32. IMPACT AND SDG ALIGNMENT

## 32.1 Intended Impact

AQUVANA is designed to contribute to:

* Household food resilience
* Climate adaptation
* Practical food growing
* Repair-oriented product use
* Access to growing information

---

## 32.2 SDG 2 — Zero Hunger

AQUVANA relates to household-level food production and food resilience.

---

## 32.3 SDG 11 — Sustainable Cities and Communities

AQUVANA relates to resilience and adaptation within communities.

---

## 32.4 SDG 13 — Climate Action

AQUVANA focuses on adaptation to changing environmental and water conditions.

---

# 33. SCALABILITY

## 33.1 Product Scaling

The physical product can expand through:

* Additional households
* Additional communities
* Local distributors
* Institutional partnerships

---

## 33.2 Digital Scaling

The software can expand through:

* More crop records
* More users
* User-specific gardens
* Task records
* Harvest records
* Recommendations
* Agricultural information

---

## 33.3 Distribution Scaling

The product can scale through local agro-dealers and institutional channels.

---

## 33.4 Partnership Scaling

Potential partners include:

* Agricultural professionals
* NGOs
* Development organizations
* Community organizations

---

# 34. PRODUCT ROADMAP

## Stage 1 — Product Concept

Define the physical AQUVANA system.

## Stage 2 — Digital Foundation

Implement:

* Frontend
* Backend
* Database
* Authentication
* Crop library

## Stage 3 — Physical Prototype

Develop and test the physical system.

## Stage 4 — Household Pilot

Test the product with a small number of households.

## Stage 5 — Evidence

Collect product and user data.

## Stage 6 — Local Distribution

Work with local agro-dealers.

## Stage 7 — Partnership Expansion

Engage agricultural and development partners.

## Stage 8 — Wider Adoption

Expand the physical and digital product ecosystem.

---

# 35. SUCCESS METRICS

## 35.1 Product Metrics

* Number of pilot households
* Product durability
* Repair frequency
* User satisfaction
* Crop success

## 35.2 Software Metrics

* Registered users
* Active users
* Crop-library usage
* Crop-detail usage
* Garden usage
* Task usage
* Harvest usage

## 35.3 Business Metrics

* Units sold
* Unit cost
* Gross margin
* Replacement sales
* Distribution partnerships

## 35.4 Impact Metrics

* Households supported
* Growing activities maintained
* Crops successfully grown
* Harvest records
* Product repairs completed

---

# 36. SYSTEM LIMITATIONS

## 36.1 Hardware Integration

The current software does not directly communicate with physical hardware.

## 36.2 Environmental Monitoring

The current software does not automatically measure:

* Water level
* Temperature
* Humidity
* Soil conditions

## 36.3 Email Delivery

The current password recovery system generates the reset link through the development environment rather than a production email delivery service.

## 36.4 Authorization

The current implementation does not yet provide complete backend authorization middleware for every protected route.

---

# 37. FUTURE EXTENSIBILITY

Potential future functions include:

* Persistent user gardens
* User-specific crop selections
* Database-backed tasks
* Database-backed harvest records
* Crop recommendations
* Agricultural guidance
* Weather integration
* User roles
* Administrative tools
* Agricultural expert accounts
* Community features
* Hardware and sensor integration

---

# 38. ACCEPTANCE CRITERIA

The digital platform shall be considered functionally acceptable when:

## Navigation

* Main pages are accessible.
* Navigation links function.
* Crop detail routing functions.

## Crop System

* Crop records are retrieved from PostgreSQL.
* Search functions.
* Filtering functions.
* Crop details load correctly.

## Authentication

* Users can register.
* Users can log in.
* Invalid credentials are rejected.
* Passwords are hashed.
* JWT is generated.

## Dashboard

* Dashboard loads after login.
* Garden is accessible.
* Tasks are accessible.
* Harvest is accessible.
* Crop Library is accessible.

## Password Recovery

* Reset requests are processed.
* Reset tokens expire.
* Valid tokens allow password changes.
* New passwords are hashed.
* Used tokens are deleted.

## Backend

* API endpoints respond correctly.
* Database errors are handled.
* Invalid requests receive appropriate responses.

---

# 39. REFERENCES

1. ISO/IEC/IEEE 29148 — Systems and Software Engineering: Life Cycle Processes — Requirements Engineering.
2. NASA Software Engineering Handbook — Software Requirements Specification guidance.
3. AQUVANA project source code and database implementation.
4. AQUVANA product and system design documentation.

---

# 40. APPENDICES

# Appendix A — Project Structure

```text
E:\aquvana
│
├── client
│   ├── public
│   │   └── aquvana-logo.png
│   │
│   └── src
│       ├── components
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       │
│       ├── pages
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── Crops.jsx
│       │   ├── CropDetails.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Garden.jsx
│       │   ├── Tasks.jsx
│       │   ├── Harvest.jsx
│       │   ├── ForgotPassword.jsx
│       │   └── ResetPassword.jsx
│       │
│       └── App.jsx
│
├── server
│   ├── src
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── db.js
│   │   ├── auth.routes.js
│   │   ├── crops.routes.js
│   │   └── passwordReset.routes.js
│   │
│   └── .env
│
└── database
```

---

# Appendix B — Technical Evidence

## B.1 Crop Library

Frontend:

```js
fetch("http://localhost:5000/api/crops")
```

Backend:

```js
router.get("/", async (req, res) => {
```

Database:

```js
const result = await pool.query(
  "SELECT * FROM crops ORDER BY name ASC"
);
```

---

## B.2 Crop Details

Frontend:

```js
fetch(`http://localhost:5000/api/crops/${cropId}`)
```

Backend:

```js
router.get("/:id", async (req, res) => {
```

---

## B.3 Authentication

Password hashing:

```js
const passwordHash = await bcrypt.hash(password, 12);
```

Password verification:

```js
const passwordMatches = await bcrypt.compare(
  password,
  user.password_hash
);
```

JWT:

```js
const token = jwt.sign(
```

---

# Appendix C — Database Structure

```text
users
│
├── id
├── name
├── email
├── password_hash
├── created_at
└── updated_at
```

```text
crops
│
├── id
├── name
├── category
├── description
├── growing_time
├── water_level
├── sunlight
├── difficulty
└── created_at
```

```text
password_reset_tokens
│
├── id
├── user_id
├── token
├── expires_at
└── created_at
```

---

# Appendix D — Complete System Data Flow

```text
                         AQUVANA
                            │
             ┌──────────────┴──────────────┐
             │                             │
      Physical Product              Digital Platform
                                             │
                                             ↓
                                      React Frontend
                                             │
                                             ↓
                                      REST API Request
                                             │
                                             ↓
                                      Express Backend
                                             │
                         ┌───────────────────┼───────────────────┐
                         │                   │                   │
                    Auth API             Crop API         Password API
                         │                   │                   │
                         └───────────────────┼───────────────────┘
                                             ↓
                                      PostgreSQL / Neon
                                             │
                                             ↓
                                      Database Response
                                             │
                                             ↓
                                      Express Backend
                                             │
                                             ↓
                                      React Frontend
```

---

# Appendix E — Complete Product Logic

```text
Changing Environmental Conditions
              ↓
       Food-System Pressure
              ↓
       Need for Adaptation
              ↓
        AQUVANA Product
              ↓
 ┌──────────────────────────┐
 │ Modular Physical System  │
 └────────────┬─────────────┘
              +
 ┌──────────────────────────┐
 │    Digital Platform      │
 └────────────┬─────────────┘
              ↓
       Household Users
              ↓
      Crop Information
              ↓
          Garden
              ↓
           Tasks
              ↓
          Harvest
              ↓
   Household Food Resilience
```

---

# Appendix F — Product-to-Software Relationship

```text
PRODUCT NEED
     ↓
PRODUCT FUNCTION
     ↓
SOFTWARE FUNCTION
     ↓
FRONTEND
     ↓
API
     ↓
BACKEND
     ↓
DATABASE
     ↓
USER RESULT
```

This relationship connects the physical product concept with the software engineering implementation.

---

# Appendix G — Final Product Summary

AQUVANA is a modular and repairable household food-growing system supported by a full-stack digital platform.

The physical product focuses on adaptation and household food growing.

The digital platform provides:

* Crop information
* Crop search
* Crop filtering
* Crop details
* User registration
* Login
* Authentication
* Dashboard
* Garden
* Tasks
* Harvest
* Password recovery

The technical system uses:

**React → Express/Node.js → REST API → PostgreSQL**

The complete product connects:

**Environmental Challenge → Problem → Solution → Product → Software → Users → Market → Business Model → Validation → Impact → Scale**

## AQUVANA

### Grow Through Rising Waters.
