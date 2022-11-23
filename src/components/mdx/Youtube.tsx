interface YoutubeProps {
  id: string
  title?: string
}

const Youtube = ({ id, title = 'Youtube Video' }: YoutubeProps) => (
  <div className="mt-6 overflow-hidden rounded">
    <iframe
      className="aspect-[16/9] w-full"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)

export default Youtube
