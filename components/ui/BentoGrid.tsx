"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { IconContainer } from "./IconContainer";
import { SiAngular, SiDocker, SiFlutter, SiGithub, SiGooglecloud, SiLaravel, SiNextdotjs, SiOctobercms, SiReact } from "react-icons/si";
import { Radar } from "./Redar";
import { FiDownloadCloud } from "react-icons/fi";
import { TextGenerateEffect } from "./TextGenarateEffect";
;

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?:string;
}) => {
    const [copied, setCopied] = useState(false)

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "vinnath112@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6  && 'flex justify-center' } 'h-full'`}>
                <div className={`w-full h-full absolute`}>
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName,'object-cover object-center')}/>
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'}/>
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(titleClassName,`${id !== 3 ? 'px-5 p-5 lg:p-10' : ''}`, "transition duration-200 relative md:h-full min-h-40 flex flex-col")}>
                    {id !== 1 && id !== 3 && (
                        <div className="font-extralight md:max-w-full md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                            {description}
                        </div>
                    )}
                    {id !== 3 && id !== 5 && (
                        <div className={`${id === 1 && 'rounded-lg bg-black-100 border border-white/[0.1] p-4 text-4xl sm:text-right lg:text-center'} 'text-lg lg:text-3xl w-full font-bold z-10' `} >
                            {title}
                        </div>
                    )}
                    {id === 2 && <GridGlobe />}
                    {id === 3 && (
                        <div className="relative flex w-full flex-col items-center justify-center space-y-4 overflow-hidden">
                            <div className="mx-auto w-full max-w-3xl m-3">
                                <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 p-2">
                                    <IconContainer 
                                    text="Flutter" 
                                    delay={0.2} 
                                    icon={<SiFlutter className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    delay={0.4}
                                    text="Google Cloud"
                                    icon={<SiGooglecloud className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    text="October CMS"
                                    delay={0.3}
                                    icon={<SiOctobercms className=" h-8 w-8 text-slate-600" />}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto w-full max-w-md">
                                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                                    <IconContainer
                                    text="Angular"
                                    delay={0.5}
                                    icon={<SiAngular className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    text="React JS"
                                    delay={0.5}
                                    icon={<SiReact className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    text="Next JS"
                                    icon={
                                        <SiNextdotjs className=" h-8 w-8 text-slate-600" />
                                    }
                                    delay={0.8}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto w-full max-w-3xl">
                                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 p-2">
                                    <IconContainer
                                    delay={0.6}
                                    text="GitHub"
                                    icon={<SiGithub className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    delay={0.7}
                                    text="Laravel"
                                    icon={<SiLaravel className=" h-8 w-8 text-slate-600" />}
                                    />
                                    <IconContainer
                                    text="Docker"
                                    icon={
                                        <SiDocker className=" h-8 w-8 text-slate-600" />
                                    }
                                    delay={0.8}
                                    />
                                </div>
                            </div>
                            <Radar className="absolute -bottom-12" />
                            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">

                        <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                            <Lottie options={defaultOptions} height={200} width={400} />
                        </div>

                        <MagicButton
                            title={copied ? "Email is Copied!" : "Copy email address"}
                            icon={<IoCopyOutline />}
                            position="left"
                            handleClick={handleCopy}
                        />
                        </div>
                    )}

                    {id === 5 && (
                        <TextGenerateEffect
                            words="Full-stack developer 👨‍💻 passionate about coding challenges 💡, contributing to open-source projects 🌟, and fostering tech innovation through community initiatives 🌐. Let's build something amazing 💻✨"
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        />
                        // <div className={`'text-lg lg:text-3xl w-full font-bold z-10'`} >
                        //     {title}
                        // </div>
                    )}

                    {id === 4 && (
                        <a href="#about">
                            <MagicButton
                            title="Download CV"
                            icon={<FiDownloadCloud />}
                            position="left"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
