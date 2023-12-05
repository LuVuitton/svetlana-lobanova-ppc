import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts,Post } from '~/lib/sanity.queries'
import { SharedPageProps } from '~/pages/_app'

import Button from '../../components/Button'
import PostItem from '../../components/Post'
import Title from '../../components/Title'

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
      <div style={{flexDirection:"column"}}>
      <Title type="medium">Blog</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          // flexDirection: "column", 
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'stretch' /* Растянуть элементы по высоте */,
          paddingBottom: '20px',
        }}
      >
        {posts.map((e) => (
          <PostItem key={e._id} postData={e} />
        ))}
      </div>
      {showLoadButton && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '50px',
          }}
        >
          <Button disabled={loading} onClick={getMorePosts}>
            Load more
          </Button>
        </div>
      )}
      </div>
    </>
  )
}

export default Blog

type Props = {
  className?: string
  children: React.ReactNode
}
