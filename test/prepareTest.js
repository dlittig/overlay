import { Application } from "spectron";
import path from "path";

export const app = new Application({
  path: path.join(
    process.cwd(), // This works assuming you run npm test from project root
    // The path to the binary depends on your platform and architecture
    "out/overlay-linux-x64/overlay"
  ),
});
