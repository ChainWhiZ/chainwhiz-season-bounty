import { useRef } from "react"
import { useSeasonBounty } from "hooks/useSeasonBounty"
import { Bounty } from "components/Bounty"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { v4 as uuidv4 } from "uuid"

export const SeasonBounty = () => {
  const { data } = useSeasonBounty()
  const ref = useRef(null)

  return (
    <>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows={true}
        ref={ref}
      >
        { data && ref && data.map((bounty, index) => (
          <div key={uuidv4()}>
            <Bounty selectedBounty={index + 1} totalBounty={data.length} carouselRef={ref} {...bounty} />)
          </div>
        )) }
      </Carousel>
    </>
  )
}
