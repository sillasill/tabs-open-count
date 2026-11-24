// make.fun — "How Many Tabs Do You Have Open?"
// Writes one short text to /output/entry.txt: a single digit, nothing else.
// Deterministic: the count is a constant. No randomness, no clock, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const COUNT = "2";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, COUNT, "utf8");

// Gate check: the entry must be UTF-8 text of 1 to 5 characters,
// a single number in digits and nothing else.
const written = readFileSync(out, "utf8");
if (written.length < 1 || written.length > 5 || !/^\d+$/.test(written)) {
  throw new Error(`entry must be 1-5 digits, got ${JSON.stringify(written)}`);
}
