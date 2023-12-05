import cl from 'classnames'

import { urlForImage } from '~/lib/sanity.image'
import { Post } from '~/lib/sanity.queries'

import noArticlePhoto from '../../../public/noArticlePhoto.jpeg'
import BlogCard from '../BlogCard/BlogCard'
import s from './index.module.scss'

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
