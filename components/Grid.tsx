import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="w-full py-20">
            {gridItems.map
            ((item) => (
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid