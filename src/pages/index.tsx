import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Head from 'next/head'
import { useState } from 'react'
import {
  Button,
  BuyMeCoffee,
  Cover,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
} from '~/components'
import PostItem from '~/components/Post'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

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

export default function IndexPage(
  // props: InferGetStaticPropsType<typeof getServerSideProps>,
  props: {
    posts: Post[]
    total: number
  },
) {
  // const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  // const total = posts.length

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
      console.log(data)

      setLoadedAmount(loadedAmount + LOAD_STEP)
      setPosts([...posts, ...data.posts])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      <Head>
        <title>S.LOBANOVA PPC</title>
      </Head>
      <Section>
        <Cover title="Kak tvoi dela" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title type="medium">New Posts</Title>
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
      </Section>
    </div>
  )
}
