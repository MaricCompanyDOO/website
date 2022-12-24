import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import NotFoundSection from "../sections/not-found"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <NotFoundSection />
    </Layout>

  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
