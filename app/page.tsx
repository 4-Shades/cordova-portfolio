import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { redirect } from 'next/navigation'
import Home from './Main'

export default function Page() {
  return <Home />
}
