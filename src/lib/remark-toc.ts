import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import slugify from 'slugify'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remarkToc = (options: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, 'heading', (node) => {
      const text = toString(node)
      options.exportRef.push({
        value: text,
        id: slugify(text),
        depth: node.depth,
      })
    })
  }
}

export default remarkToc
