import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useLiveQuery } from 'next-sanity/preview'
import { Article, Content, Title } from '~/components'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'

import {
  getPost,
  type Post,
  postBySlugQuery,
  postSlugsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { formatDate } from '~/utils'

import s from './style.module.scss'

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })

  return (
    <div>
      {/* <section className="post">
        {post.mainImage ? (
          <Image
            className="post__cover"
            src={urlForImage(post.mainImage).url()}
            height={231}
            width={367}
            alt=""
          />
        ) : (
          <div className="post__cover--none" />
        )}
        <div className="post__container">
          <h1 className="post__title">{post.title}</h1>
          <p className="post__date">{formatDate(post._createdAt)}</p>
          <div className="post__content">
            <PortableText value={post.body} />
          </div>
        </div>
      </section> */}

      <Article backUrl="/blog" className={s.post}>
        <Head>
          <title>{post.meta_title}</title>
        </Head>
        <Title className={s.postTitle} type="medium">
          {post.title}
        </Title>
        <p className={s.postDate}>{formatDate(post._createdAt)}</p>
        <Content body={post.body} />
      </Article>
    </div>
  )
}

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    post: Post
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const post = await getPost(client, params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(postSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/post/${slug}`) || [],
    fallback: 'blocking',
  }
}
