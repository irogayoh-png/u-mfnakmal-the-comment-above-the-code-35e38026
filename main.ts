// The Comment Above the Code — arena-winning line, written to /output/entry.txt.
//
// The line is a comment a real developer would leave above fragile production
// code: the discount is applied twice, everyone knows, and nobody dares fix
// it because twelve years of invoices depend on the bug.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "// The discount is applied twice. I know. Fixing it would break twelve years of invoices.";

// The gate only accepts one line of 1-200 characters, so fail loudly here
// instead of shipping an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
