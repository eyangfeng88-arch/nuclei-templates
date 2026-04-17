# Immunefi Bug Bounty Research Report (April 2026)

## 1. Overview of Immunefi Platform
Immunefi is the leading bug bounty platform for Web3, focusing on smart contracts and DeFi projects. It connects security researchers (whitehats) with crypto projects to prevent catastrophic hacks.

### Key Submission Details (2026 Standards)
- **Submission Process:**
  1. **Identify Scope:** Always check the specific "Scope" section of a project on Immunefi.
  2. **Draft Report:** Include a clear description, impact analysis, and a Reproducible Proof of Concept (PoC).
  3. **Submit via Immunefi Dashboard:** All communication and tracking happen through the platform.
- **Reward Tiers:** Usually categorized as Low, Medium, High, and Critical.
  - **Minimum:** Often $1,000 - $5,000 for Low/Medium.
  - **Maximum:** Can reach up to $15,000,000+ for Critical vulnerabilities in major protocols.
- **Vulnerability Types in Scope:**
  - **Smart Contracts:** Direct theft of funds, permanent freezing, logic errors, reentrancy, etc.
  - **Web/Apps:** SQL injection, XSS (if it impacts funds), DNS hijacking.
  - **Infrastructure:** Node vulnerabilities, validator exploits.
- **PoC Requirements:** Almost all High/Critical rewards **require** a functional PoC. For smart contracts, this usually means a script (Foundry/Hardhat) running on a local fork or testnet.
- **Typical Review Time:** Varies by project; initial triage by Immunefi usually takes 24-72 hours, while project team review can take 1-4 weeks.
- **Restrictions:**
  - **Known Issues:** Publicly known bugs or those in previous audit reports are ineligible.
  - **Primacy of Impact:** Rewards are based on the potential financial impact rather than just the technical bug.

---

## 2. Active High-Bounty Programs (Top 5)

| Protocol | Chain(s) | Max Bounty | Scope | Whitebox/Code Review |
| :--- | :--- | :--- | :--- | :--- |
| **LayerZero** | Multi-chain | **$15,000,000** | Smart Contracts & Infrastructure | Yes (Public Repos) |
| **Wormhole** | Multi-chain | **$10,000,000** | Smart Contracts & Guardian Node | Yes (Public Repos) |
| **MakerDAO** | Ethereum | **$10,000,000** | Smart Contracts (Core Vaults) | Yes (Public Repos) |
| **Chainlink** | Multi-chain | **$3,000,000** | Smart Contracts & Node Software | Yes (Public Repos) |
| **Ethena** | Ethereum | **$3,000,000** | Smart Contracts | Yes (Public Repos) |

*Note: Payouts for Critical bugs are often calculated as a % of "Value at Risk" (e.g., 10%), capped at the maximum bounty amount.*

---

## 3. High-Priority Vulnerability Types for Bug Hunting
1. **Bridge/Cross-chain Logic:** Vulnerabilities in message passing or validator consensus (highest payouts).
2. **Oracle Manipulation:** Manipulating price feeds to drain lending protocols or DEXs.
3. **Liquidity/Flash Loan Attacks:** Logic errors involving temporary high-liquidity states.
4. **Governance Attacks:** Exploiting voting mechanisms to take control of a protocol treasury.
5. **Upgradeability Flaws:** Issues in proxy implementations or initialization functions.

## 4. Resource Links
- [Immunefi Bug Bounty Explorer](https://immunefi.com/explore/)
- [Immunefi Documentation](https://docs.immunefi.com/)
- [Web3 Security Library](https://github.com/immunefi-team/web3-security-library)
