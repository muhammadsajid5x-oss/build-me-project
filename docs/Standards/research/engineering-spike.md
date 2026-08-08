# Engineering Spike

**Project:** Build Me

**Author:** Muhammad Sajid

---

# Purpose

The objective of this engineering spike was to compare implementation approaches for the Week 2 Landing Page and select the most suitable solution before development begins.

---

# Step 1 – Solution Options

## Option 1 – Static React Components

Description:

Build each page section directly inside React components.

### Advantages

- Simple implementation
- Easy to understand

### Disadvantages

- Limited flexibility
- Requires code changes for content updates

---

## Option 2 – Config-Driven Components (Recommended)

Description:

Use reusable React components that receive data from JSON configuration files.

### Advantages

- Highly reusable
- Easy to update
- Supports scalability
- Clean separation of UI and content

### Disadvantages

- Slightly more initial setup

---

## Option 3 – CMS-Driven Content

Description:

Retrieve page content from an external content management system.

### Advantages

- Non-developers can update content
- Highly flexible

### Disadvantages

- Increased complexity
- Requires backend integration

---

# Step 2 – Proof of Concepts

The following proof-of-concept designs were evaluated:

- Responsive Navbar
- Hero component with reusable content
- Storybook component examples
- JSON-based configuration for page content

---

# Step 3 – Comparison

| Criteria          | Static Components | Config-Driven | CMS-Driven |
| ----------------- | ----------------- | ------------- | ---------- |
| Simplicity        | High              | Medium        | Low        |
| Reusability       | Medium            | High          | High       |
| Scalability       | Medium            | High          | High       |
| Maintenance       | Medium            | High          | Medium     |
| Development Speed | High              | High          | Low        |

---

# Step 4 – Recommendation

## Recommended Approach

**Config-Driven Components**

### Reason

This approach provides the best balance between flexibility, maintainability, and scalability. It supports reusable components, simplifies updates, and aligns with the Build Me architecture and Storybook-first development workflow.

### Risks

- Slightly higher initial setup effort.
- Requires careful configuration management.

### Trade-offs

Additional setup is offset by easier maintenance and greater reuse across the application.

### Expected Implementation

- Build reusable React components.
- Store page content in JSON configuration files.
- Document components in Storybook.
- Apply responsive design using Tailwind CSS and Material UI.
- Validate functionality with unit, integration, and end-to-end tests.

---

# Conclusion

The engineering spike reduced technical uncertainty and confirmed that a config-driven component architecture is the most appropriate solution for the Build Me project. This approach supports scalability, maintainability, and efficient future development.
