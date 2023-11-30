import { Post } from '~/lib/sanity.queries'
import s from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Title from '../Title'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

const PostItem = ({ className, postData }: Props) => {
  const { title, body, description, mainImage, publishedDate, slug } = postData

  return (
    <Link href={`post/${slug.current}`} className={cl(className, s.post)}>
      <div className={s.postLink}>
        <Title type="small" className={s.postTitle}>
          {title}
        </Title>
      </div>
      <div className={s.postContent}>
        <div>
        <Image
            className="post__cover"
            src={urlForImage(mainImage).url()}
            height={100}
            width={100}
            alt="image"
          />
        </div>
      </div>
    </Link>
  )
}

export default PostItem

type Props = {
  className?: string
  postData: Post
}
