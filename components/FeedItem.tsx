import Link from 'next/link'

interface FeedItemProps {
  title: string
  link: string
  image?: string
  excerpt?: string
  type?: string
  feature?: boolean
}

export default function FeedItem({
  title,
  link,
  image,
  excerpt,
  type,
  feature,
}: FeedItemProps) {
  return (
    <>
      {image && (
        <Link className="image-link" href={link}>
            <img src={image} alt={title} />
        </Link>
      )}
      <div>
        <header>
          <p className="item-type">{type}</p>
          <h2>
            <Link href={link}>{title}</Link>
          </h2>
        </header>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </>
  )
}
