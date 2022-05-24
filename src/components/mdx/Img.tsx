import Image from 'next/image'

interface ImgProps {
  src: string
  alt: string
}

const Img = ({ src, alt }: ImgProps) => (
  <span className="mt-4 block aspect-[2/1] rounded overflow-hidden">
    <Image src={src} alt={alt} width="768" height="384" />
  </span>
)

export default Img
