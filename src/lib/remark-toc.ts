import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'

const slugger = new GithubSlugger()

const remarkToc = (options: any) => {
  return (tree: any) => {
    visit(tree, 'heading', (node) => {
      const text = toString(node)
      options.exportRef.push({
        value: text,
        id: '##' + slugger.slug(text),
        depth: node.depth,
      })
    })
  }
}

export default remarkToc
