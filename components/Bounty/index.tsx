import { CategoryCard } from "components/CategoryCard"
import { CustomImage } from "components/CustomImage"
import { CustomLink } from "components/CustomLink"
import { FC } from "react"
import { v4 as uuidv4 } from "uuid"
import { BsTelegram, BsDiscord, BsTwitter, BsFillArrowUpRightCircleFill } from "react-icons/bs"
import { MdArrowRight, MdArrowLeft } from "react-icons/md"

interface IBountyProps {
  seasonTitle: string,
  noOfBounties: number,
  noOfContributers: number,
  grossBountyReward: number,
  categories: string[],
  logo: string,
  primaryColor: string,
  secondaryColor: string,
  socialNetworks: {
    name: string,
    url: string
  }[],
  selectedBounty: number,
  totalBounty: number,
  carouselRef: any
}

enum SocialNetworkIndex {
  Telegram,
  Discord,
  Twitter
}

export const Bounty: FC<IBountyProps> = ({
  seasonTitle,
  noOfBounties,
  noOfContributers,
  grossBountyReward,
  categories,
  logo,
  primaryColor,
  secondaryColor,
  socialNetworks,
  selectedBounty,
  totalBounty,
  carouselRef
}) => {
  const stats = [
    {
      title: "Bounties",
      value: noOfBounties
    },
    {
      title: "Contributers",
      value: noOfContributers
    },
    {
      title: "Gross Bounty Reward",
      value: `$${grossBountyReward}`
    }
  ]

  const decrement = () => {
    if (selectedBounty > 1) {
      carouselRef.current.decrement()
    }
  }

  const increment = () => {
    if (selectedBounty < totalBounty) {
      carouselRef.current.increment()
    }
  }

  return (
    <div className='grid grid-cols-3'>
      <div
        className={"col-span-2 xs:col-span-3 sm:col-span-3 flex flex-col items-start gap-12 p-12"}
        style={{ backgroundColor: primaryColor }}
      >
        <div className='flex flex-col items-start'>
          <span className='font-semibold text-primary-black'>Ongoing Bounty Season</span>
          <span className='text-5xl font-bold xs:text-3xl sm:text-4xl md:text-4xl text-primary-black'>{ seasonTitle }</span>
        </div>
        <div className='grid grid-cols-3 gap-4 xs:grid-cols-1'>
          { stats.map(({ title, value }) => (
            <div key={uuidv4()} className='flex flex-col items-start'>
              <span className='font-semibold text-primary-black'>{ title }</span>
              <span className='text-5xl font-bold xs:text-3xl sm:text-4xl md:text-4xl text-primary-black'>{ value }</span>
            </div>
          )) }
        </div>
        <div className='flex flex-col items-start gap-4'>
          <span className='font-semibold text-primary-black'>Categories Included</span>
          <div className='grid grid-cols-5 gap-20 xs:grid-cols-1 xs:gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4'>
            { categories.map(category => (
              <CategoryCard
                key={uuidv4()}
                title={category} />
            )) }
          </div>
        </div>
        <div className='flex flex-col min-w-full gap-4'>
          <CustomLink href="" className="max-w-max">
            <div className='flex items-center gap-2 p-2 transition duration-300 hover:bg-black/10'>
              <span className='text-2xl font-bold xs:text-xl'>Discover All Bounties</span>
              <BsFillArrowUpRightCircleFill className='text-primary-black' size="1.4rem" />
            </div>
          </CustomLink>
          <div className='flex justify-end'>
            <div className='flex items-center gap-1'>
              <button onClick={decrement} className="duration-300 rounded-full hover:bg-black/10">
                <MdArrowLeft className='text-primary-black' size="1.4rem" />
              </button>
              <span className='text-xs'>{selectedBounty}/{totalBounty}</span>
              <button onClick={increment} className="duration-300 rounded-full hover:bg-black/10">
                <MdArrowRight className='text-primary-black' size="1.4rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex flex-col items-center gap-16 p-12 xs:col-span-3 sm:col-span-3 bg-primary-black'
      >
        <CustomImage imageURI={logo} width={150} height={150} />
        <p className='font-semibold text-center text-white'>
          Chainwhiz is an open-source bounty marketplace
          on the Polygon network connecting Web3 projects
          with independent developers and communities.
        </p>
        <div className='grid grid-cols-3 gap-20'>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Telegram].url}
            className='duration-300 ease-in-out hover:scale-125'>
            <BsTelegram className='text-white' size="1.4rem" />
          </CustomLink>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Discord].url}
            className='duration-300 ease-in-out hover:scale-125'>
            <BsDiscord className='text-white' size="1.4rem" />
          </CustomLink>
          <CustomLink
            href={socialNetworks[SocialNetworkIndex.Twitter].url}
            className='duration-300 ease-in-out hover:scale-125'>
            <BsTwitter className='text-white' size="1.4rem" />
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
