import fs from "node:fs";
import path from "node:path";
import { imageSlots, type ImageKey } from "@/content/images";

/**
 * Résolution des emplacements photo (côté serveur uniquement).
 * Cherche public/images/<fichier>.<ext> et renvoie null si la photo n'est pas encore déposée.
 */

const EXTENSIONS = ["avif", "webp", "jpg", "jpeg", "png"];
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export type ResolvedImage = {
  key: ImageKey;
  src: string | null;
  alt: string;
  file: string;
  illustration: boolean;
};

function availableFiles(): Set<string> {
  try {
    return new Set(fs.readdirSync(IMAGES_DIR).map((name) => name.toLowerCase()));
  } catch {
    return new Set();
  }
}

export function getImage(key: ImageKey): ResolvedImage {
  const slot = imageSlots[key];
  const files = availableFiles();
  const ext = EXTENSIONS.find((candidate) => files.has(`${slot.file}.${candidate}`));
  return {
    key,
    src: ext ? `/images/${slot.file}.${ext}` : null,
    alt: slot.alt,
    file: slot.file,
    illustration: slot.illustration,
  };
}
