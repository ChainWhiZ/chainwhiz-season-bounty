import { FC } from "react"

interface ICategoryCardProps {
  title: string,
  primaryColor?: string,
  secondaryColor?: string
}

export const CategoryCard: FC<ICategoryCardProps> = ({ title, primaryColor = "#fff", secondaryColor = "#000" }) => {
  return (
    <div className='flex items-center justify-center p-2 px-4 font-semibold rounded-sm' style={{ backgroundColor: secondaryColor }}>
      <span style={{ color: primaryColor }}>{ title }</span>
    </div>
  )
}
