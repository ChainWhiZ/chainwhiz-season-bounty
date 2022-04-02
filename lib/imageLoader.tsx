import type { ImageLoaderProps } from "next/image"
import { BOUNTIES_URL } from "config"

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${BOUNTIES_URL}/${src}?w=${width}&q=${quality || 75}`
}
