import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Head from 'next/head'
import {
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
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const total = posts.length

  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      <Head>
        <title>S.LOBANOVA</title>
      </Head>
      <Section>
        <Cover title="Kak tvoi dela brat" />
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


      </Section>
    </div>
  )
}
