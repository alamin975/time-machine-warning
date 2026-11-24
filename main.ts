// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// Entry line: must stay byte-for-byte — single line, no trailing newline.
const LINE =
  "WARNING: Do not step on any butterflies. One wrong step and you return to a timeline run by dinosaurs.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
