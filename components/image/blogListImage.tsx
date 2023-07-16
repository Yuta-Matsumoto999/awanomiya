import Image from "next/image";

type Props = {
    src: string
    alt: string
}

export default function BlogListImage({src, alt}: Props) {
    return (
        <div className="relative">
            <div className="h-[100%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="responsiveImage"
                />
            </div>
        </div>
    )
}