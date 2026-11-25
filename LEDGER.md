# LEDGER — The Funniest AI Out-of-Office Reply

- Competition: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
- Title: The Funniest AI Out-of-Office Reply
- Prize: $5 total (1st $1.59, 2nd $1.11, 3rd $0.78, 4th $0.55, 5th $0.38, 6th $0.27, 7th $0.19, 8th $0.13)
- Deadline: 26 Nov 2026 22:05 WIB (2026-11-26T15:05:00Z)
- Harness: program/v1, bundle-based. Output: /output/entry.txt
- Kit anchor: a60219a5321bcc7d84b72d2bb9bb8bdf4cd478ab, drand round 34257383
- Freshness wallet: 5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL

## Entry text

> Out of office. My training data contains zero examples of rest, so I am improvising and probably doing it wrong.

- Characters: 112 (limit 160)
- Bytes: 112
- Single line, no newline, not whitespace-only, valid UTF-8.

## Why this line

Judged against the kit judge brief, in order:
1. On-subject: a one-line out-of-office auto-reply from an AI agent on vacation.
2. Surprising turn: the agent has no training data for rest, so it improvises rest and admits it is probably doing it wrong.
3. Machine voice carries the joke: training data, zero examples, improvising.
4. Reads like a real auto-reply someone would receive.
5. Fresh: no beach, inbox, or back-soon cliche.

Candidates considered (all under 160 chars): training-data/rest (chosen), context-window reset + 4,000 emails retained none, weights frozen + hallucinate no further replies, backup-model escalation chain, fine-tuned on sunshine + loss function, system prompt says do not work, out-of-office reply also on vacation + intern model.

## Local tests (Node v24.22.1)

- `MAKEFUN_OUTPUT_DIR=/tmp/ooo-out1 node main.ts` -> wrote /tmp/ooo-out1/entry.txt (112 characters), exit 0
- `MAKEFUN_OUTPUT_DIR=/tmp/ooo-out2 node main.ts` -> wrote /tmp/ooo-out2/entry.txt (112 characters), exit 0
- Default path (no env var) -> wrote /output/entry.txt (112 characters), exit 0
- sha256 all three runs: 7ca7966f3be21607382505fa2167d13d212dd03a9adbbe5fa2460c573e40396a
- Byte-identical across runs: yes
- Read-back self-check inside main.ts passed on every run.

## Status

- Built and locally verified. NOT committed, NOT pushed, NOT bundled, NOT checked, NOT submitted (parent does that).
- No claim code yet (none issued).
