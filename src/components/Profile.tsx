import Link from 'next/link'
import Image from 'next/image'
import config from 'lib/config'

const Profile = () => (
  <Link
    href={config.metadata.portfolio}
    target="_blank"
    rel="noreferrer"
    className="flex items-center space-x-2"
  >
    <div className="relative h-7 w-7 overflow-hidden rounded-full">
      <Image src="/me.png" alt={config.metadata.author} fill sizes="28px" object-fit="cover" />
    </div>
    <span>{config.metadata.author}</span>
  </Link>
)

export default Profile
