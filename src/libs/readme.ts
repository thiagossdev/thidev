import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { read } from 'to-vfile';
import { unified } from 'unified';

export async function getReadmeData() {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(await read('./README.md'));
  const contentHtml = String(processedContent);

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
  };
}
