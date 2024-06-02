import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from '@/data'

const Hero = () => {
  return (
    <section id='about'>
        <div className='flex justify-center items-center'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <BentoGrid className="w-full py-20 z-10">
            {gridItems.map
            (({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Hero