import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'

const slugger = new GithubSlugger()
slugger.reset()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remarkToc = (options: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, 'heading', (node) => {
      const text = toString(node)
      options.exportRef.push({
        value: text,
        id: slugger.slug(text),
        depth: node.depth,
      })
    })
  }
}

export default remarkToc
