import { Post } from '~/lib/sanity.queries'
import s from './index.module.scss'
import cl from 'classnames'

import { urlForImage } from '~/lib/sanity.image'
import noArticlePhoto from '../../../public/noArticlePhoto.webp'
import BlogCard from '../BlogCard/BlogCard'

const PostItem = ({ className, postData }: Props) => {
  const { title, body, description, mainImage, slug, _createdAt } = postData

  return (
      <BlogCard
        description={description}
        title={title}
        img={mainImage ? urlForImage(mainImage).url() : noArticlePhoto}
        date={_createdAt}
        link={`post/${slug.current}`}
      />
  )
}

export default PostItem

type Props = {
  className?: string
  postData: Post
}
