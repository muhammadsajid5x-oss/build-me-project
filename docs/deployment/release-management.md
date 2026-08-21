Build Me Release Management
Semantic Versioning
Build Me follows Semantic Versioning:
MAJOR.MINOR.PATCH
Major
Breaking changes.
Example:
2.0.0
Minor
Backward-compatible new functionality.
Example:
1.3.0
Patch
Backward-compatible bug fixes.
Example:
1.3.1
Git Release Tags
Production releases use Git tags in the format:
vMAJOR.MINOR.PATCH
Example:
git tag v1.0.0
git push origin v1.0.0
The current production release history includes:
v1.0.0
Release Process
Complete feature development.
Open a pull request.
Pass the CI quality gate.
Merge through the approved branch strategy.
Validate staging/preview deployment.
Merge the production-ready change to main.
Create the appropriate Semantic Versioning tag.
Push the tag to the remote repository.
Verify the production deployment.
Release History
Tags provide an auditable release history.
v1.0.0
 |
 Production Launch
Future releases should increment the appropriate MAJOR, MINOR, or PATCH component.
