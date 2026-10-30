# Alex Garcia · Applied automation portfolio

I build practical workflows for Autonoma Digital, a small studio in Calgary. I define the problem, direct Claude Code and Codex, review the result and operate what ships. Before this work, I spent more than 15 years leading construction teams and renovation projects.

**Start with the [portfolio](index.html).** Everything in this package opens locally without installing dependencies, signing in or paying for an API. The examples show three different pieces of work:

## 1. Keep track of a customer request

**Problem:** a small business needs a simple way to see who asked for what and what happens next.

**Try it:** open the [Mini-CRM](demos/mini-crm/index.html), choose a fictional contact, change its stage, then reload. Search the board or export the sample CSV. The included application has notes, follow-up flags and browser persistence.

This is an adapted copy of an existing application, with three explicitly fictional contacts. Tracking and remote fonts were removed, and its storage key is separate. It is a local contact-management tool, **not an AI agent or a shared team CRM**. Its interface is Portuguese; use only fictional information.

## 2. Make approval apply to the exact content

**Problem:** approving a draft should not silently approve a different version later.

**Try it:** open the [approval example](demos/index.html#approval), approve the text, edit it and check again. The second check rejects the changed version using a SHA-256 comparison.

This small, independent example demonstrates a pattern from the publishing workflow. It does not publish anything, install production hooks or reproduce the full private system. My earlier guardrail showcase is a partial extraction with missing dependencies; this package does not claim those dependencies are solved.

## 3. Return the source behind a search result

**Problem:** a useful research answer needs an inspectable source, not only confident prose.

**Try it:** open the [source-retrieval example](demos/index.html#retrieval). Search the three invented Portuguese documents, inspect the returned identifier/text, then choose an unknown term and see an empty result.

The production projects behind this case include Mirante and a source-aware study assistant. **This sample is lexical retrieval, not an LLM or vector-search demo.** No personal reading history, licensed corpus or model credentials are included. The earlier RAG showcase omits its main ingest pipeline.

## Additional examples and project coverage

[The same page](demos/index.html) also contains a human-review intake example, filtering of three invented jobs and CSV deduplication/reconciliation. The samples are standalone teaching code, not copies of the job-search or finance products.

[The catalog](index.html#projetos) records 28 projects and components from the recovered inventory, including Portage, home-organization tools, study apps, SiteLink and other work. Several entries are descriptions rather than exports. **28 entries does not mean 28 finished applications.** The full inventory notes are in Portuguese.

Public interfaces are linked where available. A page opening is evidence of its interface, not a completed authenticated journey or a verified business result. Client websites/assets, family and health records, inboxes, financial statements, private repository history and secrets are excluded. Herdr's upstream engine is not my invention.

## Validation and status

- 11 offline checks passed for the included sample logic/catalog.
- 11 browser checks passed for navigation, search, rejecting changed approval, CSVreconciliation, Mini-CRM stage persistence after reload and mobile page overflow.
- No external HTTP requests occurred during those browser checks. No messages, applications, payments or posts are sent by these examples.

Portfolio snapshot prepared and reviewed on 30 October 2026. This package includes no résumé, client source code, paid-service integration or invented revenue metrics.
