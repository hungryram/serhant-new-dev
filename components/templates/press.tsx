import Wrapper from "../util/wrapper";
import BodyText from "../util/body-text";
import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

export default function Press({
    heading,
    content,
    bodyColor,
    backgroundStyles,
    textStyle,
    headerStyle,
    buttonText,
    buttonLink,
    textLeft,
    buttonStyle,
    secondButtonText,
    secondButtonLink,
    secondaryButtonStyle,
    image,
    altText,
    link,
    press,
    blurData
}: any) {

    return (
        <Wrapper
            backgroundStyles={backgroundStyles}
        >
            <div className="mb-10" style={bodyColor}>
                <BodyText
                    heading={heading}
                    body={content}
                    bodyStyle={textStyle}
                    headerStyle={headerStyle}
                    fullWidth={textLeft}
                    textAlign={textLeft}
                    buttonText={buttonText}
                    buttonLink={buttonLink}
                    buttonStyle={buttonStyle}
                    secondButtonText={secondButtonText}
                    secondButtonLink={secondButtonLink}
                    secondaryButtonStyle={secondaryButtonStyle}
                />
            </div>
            {press?.map((node) => {
                return (
                    <div className="md:px-10" key={node._key}>
                        <div className="md:w-3/4 mx-auto bg-[#F1F1F3] shadow-md drop-shadow-sm hover:drop-shadow-xl duration-150 transition-all">
                            <div className="border my-5">
                                <div className="md:flex items-center overflow-hidden">
                                    <div className="md:h-80 h-60 w-auto md:w-2/5 relative">
                                        <Image
                                            src={urlForImage(node?.image).url()}
                                            alt={node?.imageData?.asset?.altText}
                                            placeholder={node?.imageData?.asset?.lqip ? 'blur' : 'empty'}
                                            blurDataURL={node?.imageData?.asset?.lqip}
                                            width={600}
                                            height={0}
                                            className="object-cover h-full w-full"
                                        />
                                    </div>
                                    <div className="md:w-3/5">
                                        <div className="p-8">
                                            {node?.pressTitle &&
                                                <h2 className="md:text-2xl text-2xl text-left mb-8">{node?.pressTitle}</h2>
                                            }
                                            <p>
                                                {node?.description}
                                            </p>
                                            <div className="mt-4">
                                                <a href={node?.pressLink} target="_blank" className="uppercase">Read full article</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    )
}