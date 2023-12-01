import { Post } from '~/lib/sanity.queries'
import s from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Title from '../Title'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import articleIcon from '../../../public/article.svg'

const PostItem = ({ className, postData }: Props) => {
  const { title, body, description, mainImage, slug } = postData

  return (
    <Link href={`post/${slug.current}`} className={cl(className, s.post)}>
      <div className={s.postLink}>
        <Title type="small" className={s.postTitle}>
          {title}
        </Title>

        <div className={s.postContent}>
          <div>
            <Image
              className="post__cover"
              src={mainImage ? urlForImage(mainImage).url() : articleIcon}
              height={100}
              width={100}
              alt="image"
            />
          </div>
          <p className={s.postDescription}>{description}</p>
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
