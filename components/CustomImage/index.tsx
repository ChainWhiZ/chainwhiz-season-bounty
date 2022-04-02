import { BOUNTIES_URL } from "config"
import { imageLoader } from "lib/imageLoader"
import Image from "next/image"
import { FC } from "react"

interface ICustomImageProps {
  imageURI: string,
  width: number,
  height: number
}

export const CustomImage: FC<ICustomImageProps> = ({ imageURI, width, height }) => {
  const image = imageURI ? imageURI.replace(BOUNTIES_URL, "") : ""
  return (
    <div>
      { image &&
        <Image
          loader={imageLoader}
          src={image}
          width={width}
          height={height}
          quality={100} />
      }
    </div>
  )
}
