import { useQuery } from "react-query"

interface ISeasonBounty {
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
  }[]
}

export const useSeasonBounty = () => {
  return useQuery<ISeasonBounty[], Error>("seasonBounty", () => fetch("data/seasonBounty.json").then(res => res.json()))
}
