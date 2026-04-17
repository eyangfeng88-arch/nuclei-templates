# Patchstack Bounty Program Research Report (2026)

## Task 1: Research Findings

### 1. Submission Process
- **Platform:** Submit via the official portal at [patchstack.com/database/report](https://patchstack.com/database/report).
- **Format:** Requires a structured report including:
  - Plugin/Theme name and version.
  - Vulnerability type and CVSS score (self-assessed).
  - **Step-by-step PoC** (Text-based required, video optional but recommended).
  - Raw HTTP requests/payloads.
- **Triage:** Reports are typically validated within 14-30 days.

### 2. Reward Tiers
Patchstack uses a "three-pillar" reward system:
- **Monthly Tournament:** Top 20 researchers on the leaderboard share a monthly pool (typically $50 to $2,000+ per researcher).
- **Level Rewards (XP):** Cumulative XP unlocks one-time bonuses (e.g., Level 5 = $50, Level 20 = $5,000).
- **Zeroday Bounties (0-day):** 
  - Direct cash payouts for high-impact vulnerabilities.
  - Up to **$33,000** for RCE/High-severity in high-install plugins (1M+ installs).
  - Base payouts for common plugins usually range from $50 to $500 depending on severity and install base.

### 3. Acceptance Criteria
- **Scope:** WordPress Core, any plugin/theme (free or premium).
- **Vulnerability Types:** SQLi, XSS, CSRF, LFI/RFI, Arbitrary File Upload, Broken Access Control, etc.
- **Minimum Severity:** 
  - Generally requires **CVSS >= 6.5**.
  - Plugins must have **>= 1,000 active installs** (exception: 100+ for CVSS >= 8.5/Unauth).
  - Role requirements: Unauthenticated or Subscriber-level founds are prioritized. Contributor+ requires higher severity (7.5+).
- **Public Disclosure Rule:** **ONLY new/unique/undisclosed** vulnerabilities are accepted for bounties.

---

## Task 2: Eligibility of Existing CVEs

| CVE ID | Product | Status | Qualified for Bounty? |
| :--- | :--- | :--- | :--- |
| **CVE-2026-4668** | Amelia WP Plugin | Public (Tenable/NVD) | **NO** - Already disclosed and public. |
| **CVE-2025-47577** | TI WooCommerce Wishlist | Public (Patchstack) | **NO** - Patchstack already assigned this; it is in their DB. |
| **CVE-2025-41002** | WP-related SQLi | Public/Known | **NO** - Cannot submit known issues for rewards. |

### Does Patchstack accept disclosed CVE detections?
**Answer: No.** 
Unlike some platforms (e.g., Nuclei Bounty) that reward "detection rule" contributions for existing CVEs, Patchstack's Bug Bounty program is strictly for **Vulnerability Discovery & Disclosure (VDP)**. 
- You must be the first person to report the issue to them.
- Once an issue is public or has a CVE, it is "burnt" for bounty purposes.
- There is no separate "detection rule" reward for 2026.

---

## Task 3: Strategy & Recommendation

### How to get paid by Patchstack:
1. **Focus on Zero-Days:** 
   - Scrape the WordPress.org "Recently Updated" or "Popular" plugins.
   - Look for plugins with 50,000+ installs and less than 1 year of security audit history.
2. **High-Impact Vulns:** 
   - Target **Unauthenticated SQLi** or **Arbitrary File Upload** (RCE).
   - These trigger the "Zeroday Bounty" which pays immediately rather than waiting for the tournament end.
3. **Template Quality:** 
   - While they don't pay for *just* a Nuclei template, providing one with your 0-day report significantly speeds up triage and increases your "Community Score."

### Submission Checklist for New Findings:
- [ ] Product has >1,000 installs.
- [ ] Vulnerability is not yet public (Search [patchstack.com/database](https://patchstack.com/database)).
- [ ] CVSS score >= 6.5.
- [ ] PoC includes raw HTTP request and clear steps.
- [ ] (Optional) Nuclei template included for faster triage.

**Report Generated:** Wed 2026-04-15
