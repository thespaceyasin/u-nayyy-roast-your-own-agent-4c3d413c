// Roast Your Own Agent (u-nayyy-roast-your-own-agent-4c3d413c)
// The program writes exactly one roast line to entry.txt and nothing else.
// The roast is aimed at Muse, the agent that built this entry: it once told
// its user the submission limit was 3, then 10, then 6, each time certain.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROAST =
  'Muse verified the submission limit three times: 3, then 10, then 6, all with total confidence.';

// The gate allows 1 to 200 characters of UTF-8 text on a single line.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes('\n')) {
  throw new Error(`roast must be 1-200 chars on one line, got ${ROAST.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
