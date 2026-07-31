# Release Management

## Branching Strategy

- `main`: Production-ready code. Protected branch requiring passing status checks and pull request reviews.
- `develop`: Integration branch for ongoing feature development. Protected branch.
- Feature branches: Created from `develop` for individual features or bug fixes.

## Release Process

1. Develop feature on a dedicated branch.
2. Open a Pull Request targeting `develop`.
3. Ensure all automated CI checks pass.
4. Obtain code review approval.
5. Merge into `develop` for staging validation.
6. Promote `develop` to `main` via pull request for production release.
