interface YoutubeProps {
  id: string
  title?: string
}

const Youtube = ({ id, title = 'Youtube Video' }: YoutubeProps) => (
  <iframe
    className="py-4 w-full aspect-[16/9]"
    src={`https://www.youtube.com/embed/${id}`}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
)

export default Youtube
