import Image from 'next/image'

const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <>
    {props.src && props.alt ? (
      <span className="relative mt-6 block aspect-auto w-full">
        <Image
          src={props.src}
          alt={props.alt}
          width={720}
          height={400}
          sizes="100vw"
          className="rounded"
        />
      </span>
    ) : null}
    <span className="mt-1 block text-center text-base text-ink-400">{props.alt}</span>
  </>
)

export default Img
