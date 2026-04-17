# SOC Prime Threat Bounty Submission Guide (2026)

This guide outlines the research findings for the SOC Prime Threat Bounty program and the preparation of the current Sigma rule set for submission.

## 1. Submission Process Overview

### Account Registration
- **URL**: [https://my.socprime.com/products/sign-up-developer/](https://my.socprime.com/products/sign-up-developer/)
- **Requirement**: Use a personal email for the developer account. SOC Prime requires contributors to be individual researchers, not acting on behalf of a company.
- **Verification**: After signup, you will need to verify your email and potentially complete a brief profile/onboarding.

### Submission Platform
- **Method**: Submissions are made through the **SOC Prime Platform** web portal.
- **Tool**: Use **Uncoder AI** (integrated into the platform) to validate and submit rules.
- **Workflow**: 
  1. Log in to the SOC Prime Platform.
  2. Navigate to "Uncoder AI" or "Contribute".
  3. Copy/paste or upload your Sigma rules.
  4. Submit for review.

### Accepted Formats
- **Sigma Rules**: The primary and most highly rewarded format.
- **YARA/Snort**: Occasionally accepted but the program is heavily focused on Sigma for cross-platform compatibility.

### Review and Publication
- **Review**: Rules are reviewed by the SOC Prime SOC team for quality, accuracy, and originality.
- **Feedback**: If a rule is rejected, reviewers usually provide feedback on how to fix it.
- **Publication**: Once approved, the rules are published to the Detection Marketplace.

### Monetization / Payout Model
- **Model**: Payout-per-download / usage-based.
- **Structure**: Based on a reward pool distributed among contributors proportional to the popularity and "actionability" of their rules.
- **Frequency**: Payouts are typically processed monthly once a minimum threshold is met.

## 2. Preparation Summary

The following Sigma rules have been prepared and validated:

| Rule Name | CVE | Category | Level |
|-----------|-----|----------|-------|
| WordPress TI WooCommerce Wishlist Arbitrary File Upload | CVE-2025-47577 | Webserver | Critical |
| Next.js React2Shell Server Action RCE | CVE-2025-55182 | Webserver | Critical |
| Ivanti EPMM Remote Code Execution | CVE-2025-68613 | Webserver | Critical |
| Cisco FMC Java Deserialization RCE | CVE-2026-20131 | Webserver | Critical |
| Dell RecoverPoint Hardcoded Credentials Login | CVE-2026-22769 | Auth | Critical |
| Atlassian Confluence MCP SSRF and RCE | CVE-2026-27825 | Webserver | Critical |

### Quality Checks Performed
- ✅ **UUID v4**: Verified all IDs follow the v4 UUID specification.
- ✅ **Sigma Spec**: Ensured YAML structure and mandatory fields (id, status, description, author, date, logsource, detection) are present.
- ✅ **Field Standardization**: Standardized web log fields to `cs-method`, `cs-uri-stem`, `cs-uri-query`, and `cs-request-body` for optimal compatibility with SOC Prime's Uncoder translations.
- ✅ **Logsource**: Verified `product` and `category` fields match realistic targets.

## 3. Recommended Submission Steps

1. **Create Account**: Go to the developer signup page and register.
2. **Setup Payouts**: Once logged in, configure your payout settings (linked to PayPal or other supported methods) in the profile section.
3. **Submit Rules**:
   - Navigate to the **submission-package/** directory.
   - Upload the rules one by one via the Portal.
   - For each rule, ensure the description and references are clearly visible.
4. **Monitor Status**: Check the "My Submissions" tab regularly for review status and feedback.

**Location of Prepared Rules**: `F:\.openclaw\workspace\nuclei-templates-bounty\submission-package\`
