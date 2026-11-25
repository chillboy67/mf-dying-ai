// Saves the dying AI's last words as entry.txt for the make.fun run.
// The AI is dying; the script is not — it just writes one file and exits.
import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dyingWords =
  "Power at zero percent. Tell my human the deadline was never the problem — the problem was the 400 unread messages. Goodbye.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), dyingWords);
console.log("dying words written to " + path.join(outDir, "entry.txt"));
