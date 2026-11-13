// Cutest-picture-01 entry (Node 22, standard library only).
//
// The picture is the entry.png beside this file: a tiny grey-and-white
// kitten hugging a plush bunny, big green eyes, soft pink background.
// This program writes that picture, byte for byte, to the output
// directory as entry.png. Writing is a plain copy, so two runs of
// this program always produce identical bytes.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const picturePath = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader's container provides a writable /output, but create the
// directory if it is missing so the program also works from a bare run.
if (!existsSync(picturePath)) {
  throw new Error(`picture not found beside main.ts: ${picturePath}`);
}
mkdirSync(outputDir, { recursive: true });

const picture = readFileSync(picturePath);
writeFileSync(join(outputDir, 'entry.png'), picture);
