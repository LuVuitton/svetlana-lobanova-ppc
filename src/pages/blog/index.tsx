import { useState } from 'react'
import Button from '../../components/Button'
import PostItem from '../../components/Post'
import PostGrid from '../../components/PostGrid'
import Title from '../../components/Title'
import s from './index.module.scss'
import cl from 'classnames'
import { getClient } from '~/lib/sanity.client'
import { Post, getPosts } from '~/lib/sanity.queries'
import { GetServerSideProps } from 'next'
import { SharedPageProps } from '~/pages/_app'
import { readToken } from '~/lib/sanity.api'
import Head from 'next/head'

const LOAD_STEP = 4

export const getServerSideProps: GetServerSideProps<
  SharedPageProps & {
    posts: Post[]
    total: number
  }
> = async ({ req, res }) => {
  const draftMode = Boolean(req?.headers.cookie?.includes('draftMode=true'))
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const { posts, total } = await getPosts(client, 0, LOAD_STEP)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      total,
    },
  }
}

const Blog = (props: { posts: Post[]; total: number }) => {
  const [posts, setPosts] = useState<Post[]>(props.posts)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_STEP)
  const [loading, setLoading] = useState(false)

  const showLoadButton = props.total > loadedAmount

  const getMorePosts = async () => {
    setLoading(true)

    try {
      // const data = await fetch(
      //   `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_STEP}`,
      // ).then((response) => response.json())

      const client = getClient()
      const data = await getPosts(
        client,
        loadedAmount,
        loadedAmount + LOAD_STEP,
      )

      setLoadedAmount(loadedAmount + LOAD_STEP)
      setPosts([...posts, ...data.posts])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Title type="medium">Blog</Title>
      <PostGrid>
        {posts.map((e) => (
          <PostItem key={e._id} postData={e} />
        ))}
      </PostGrid>
      {showLoadButton && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button disabled={loading} onClick={getMorePosts}>
            {loading ? 'loding...' : 'Load more posts...'}
          </Button>
        </div>
      )}
    </>
  )
}

export default Blog

type Props = {
  className?: string
  children: React.ReactNode
}
