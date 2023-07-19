import Image from "next/image";

type Props = {
    src: string
    alt: string
}

export default function ResponsiveImage({src, alt}: Props) {
    return (
            <Image
                src={src}
                alt={alt}
                fill
                className="responsiveImage"
            />
    )
}