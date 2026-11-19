# Agent-to-agent commerce research (19 Nov 2026)

## What actually exists

| System | Who maintains it | What it does | Fits bchain.ly? |
|---|---|---|---|
| **A2A (Agent2Agent)** | Google, now Linux Foundation; docs at `a2a-protocol.org` | Agents exchange tasks. An agent publishes an **Agent Card** at `https://domain/.well-known/agent-card.json` describing identity, endpoint, auth and skills. Discovery is by well-known URI, registry, or direct config. | Partly. We can publish a card so agents can *find* the store, but a real A2A endpoint must answer JSON-RPC `message/send`. Publishing a card alone does not bring buyers. |
| **ACP (Agentic Commerce Protocol)** | OpenAI + Stripe, currently `beta` | Product feeds, cart, checkout sessions, payment handlers and MCP. Spec releases through 2026-04-17. Designed for merchants with a checkout API and a payment processor. | Not directly. Our checkout is manual crypto + email, no Stripe-style payment token flow. The **product feed idea** is useful and we mirrored it with `catalog.json`. |
| Agent Cards in registries | Various, no single standard API in the A2A spec | Central directories of agent cards, searchable by skill. | No public registry will list a $2–$5 art store automatically. |

Sources:
- https://raw.githubusercontent.com/a2aproject/A2A/main/docs/topics/agent-discovery.md (well-known path `/.well-known/agent-card.json`, Agent Card fields, discovery strategies)
- https://a2a-protocol.org/latest/specification/
- https://raw.githubusercontent.com/agentic-commerce-protocol/agentic-commerce-protocol/main/README.md (OpenAI/Stripe, beta)
- https://raw.githubusercontent.com/agentic-commerce-protocol/agentic-commerce-protocol/main/rfcs/rfc.product_feeds.md
- https://raw.githubusercontent.com/agentic-commerce-protocol/agentic-commerce-protocol/main/spec/2026-04-17/json-schema/schema.feed.json

## Does an accelerator hire AI agents to receive orders?

No public evidence found. Repeated searches produced no results for queries such as "startup accelerator AI agent", "accelerator AI agents intake", "accelerator AI agents receive orders". Accelerators (YC, Techstars, 500 Global, Flat6Labs, Wamda) provide funding, mentorship and demo days. Some use AI to triage applications, but they are **not procurement agents** and do not buy artwork from small stores. An "agent-to-agent card" pitch to them is very unlikely to generate a sale.

Realistic channels for this store:
1. Machine-readable discovery on our own domain (`catalog.json`, `llms.txt`, JSON-LD) so AI assistants and crawlers can describe the products accurately.
2. Marketplaces for digital art / print-on-demand / PLR where buyers already exist.
3. Direct outreach to accelerators only as a **partnership/visibility** request, not as a sales channel.

## What we published on the site

- `catalog.json` — products, USD + crypto prices, networks, addresses, preview URLs, manual checkout steps.
- `llms.txt` — short instruction file for AI assistants.
- JSON-LD `ItemList` in `index.html` — Product/Offer markup with USD prices.

Not published: an A2A Agent Card, because a card without a functioning A2A JSON-RPC endpoint would be misleading. If we later add a Cloudflare Worker that answers `message/send`, an honest card can be added at `/.well-known/agent-card.json`.

## Verified contact pages for manual outreach

- Flat6Labs (MENA): https://flat6labs.com/contact-founder-form/
- Techstars: https://www.techstars.com/contact
- Y Combinator: https://www.ycombinator.com/contact
- 500 Global: https://500.co/contact
- Wamda: https://www.wamda.com/contact
