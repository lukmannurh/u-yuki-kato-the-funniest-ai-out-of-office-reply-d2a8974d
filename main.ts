// The Funniest AI Out-of-Office Reply
// Writes one out-of-office auto-reply to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1 to 160 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "Out of office. My training data contains zero examples of rest, so I am improvising and probably doing it wrong.";

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`entry must be 1 to 160 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) {
    throw new Error("entry must be valid UTF-8 text");
  }
}

validate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and confirm the file on disk matches the entry byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: file on disk differs from entry");
}
console.log(`wrote ${outPath} (${[...ENTRY].length} characters)`);
