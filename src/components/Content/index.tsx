import BlockContent from '@sanity/block-content-to-react'
import cl from 'classnames'

import { dataset, projectId } from '~/lib/sanity.api'

import s from './index.module.scss'

const Content = ({ className, body }: Props) => {
  return (
    <div className={cl(className, s.content)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={projectId}
        dataset={dataset}
      />
    </div>
  )
}

export default Content

type Props = {
  className?: string
  body: any
}
