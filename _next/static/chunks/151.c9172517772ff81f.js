"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{6151:function(e,t,n){n.r(t);var s=n(7437),a=n(8779);function i(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Nextjs로 github page 만들기"}),"\n",(0,s.jsx)(t.p,{children:"Nextjs로 github page를 배포할 때 static exports를 사용해야 한다."}),"\n",(0,s.jsx)(t.h2,{children:"Static Exports"}),"\n",(0,s.jsx)(t.p,{children:"static exports는 build시에 route마다 html 파일을 만든다. static exports를 이용하면 불필요한 js 코드를 로딩하지않고 번들사이즈를 줄이며 페이지 로드를 빠르게 할 수 있다."}),"\n",(0,s.jsx)(t.h3,{children:"Static Exports 설정"}),"\n",(0,s.jsx)(t.p,{children:"next.config.js에서 output:'export';를 추가하면 된다."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"/**\n * @type {import('next').NextConfig}\n */\nconst nextConfig = {\n  output: \"export\",\n};\n\nmodule.exports = nextConfig;\n"})}),"\n",(0,s.jsx)(t.p,{children:"https://nextjs.org/docs/app/building-your-application/deploying/static-exports"}),"\n",(0,s.jsx)(t.h3,{children:"Static Exports 사용시 불가능한 기능"}),"\n",(0,s.jsx)(t.p,{children:"static exports를 사용시 지원하지 않는 기능들이 있다. 여기에는 dynamic routes와 cookies, rewrites, redirects, headers, middleware 등이 있다."}),"\n",(0,s.jsx)(t.p,{children:"https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features"}),"\n",(0,s.jsx)(t.h1,{children:"Static Exports에서 dynamic routes 사용하기"}),"\n",(0,s.jsx)(t.p,{children:"github page를 만들때 posts 폴더에 저장된 파일들을 읽어와 보여주는 기능을 만들고 싶었다."}),"\n",(0,s.jsx)(t.p,{children:"뒤로가기가 가능하도록 url이 변해야 하고 페이지내에 북마크 기능을 위해 id를 사용하여 hash를 사용할 수 없었다. 파일 경로가 들어가기에 query 파라미터로 넘겨주는 것은 보안상 좋지 않다. path 파라미터로 파일경로를 넘겨주기위해 dynamic routes를 사용해야 하는데 github page는 static export를 무조건 해야하기에 문제가 있었다."}),"\n",(0,s.jsx)(t.h2,{children:"generateStaticParams"}),"\n",(0,s.jsx)(t.p,{children:"generateStaticParams는 dynamic routes를 빌드시에 정적으로 생성할 수 있다. 이를 이용하면 github page에서 dynamic routes를 사용할 수 있다.\nhttps://nextjs.org/docs/app/api-reference/functions/generate-static-params#catch-all-dynamic-segment"}),"\n",(0,s.jsx)(t.h3,{children:"Catch-all dynamic segment"}),"\n",(0,s.jsx)(t.p,{children:"catch-all dynamic segment 사용시 array로 routes를 미리 만들면 된다."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'export function generateStaticParams() {\n  return [{ slug: ["a", "1"] }, { slug: ["b", "2"] }, { slug: ["c", "3"] }];\n}\n\n// Three versions of this page will be statically generated\n// using the `params` returned by `generateStaticParams`\n// - /product/a/1\n// - /product/b/2\n// - /product/c/3\nexport default function Page({ params }) {\n  const { slug } = params;\n  // ...\n}\n'})}),"\n",(0,s.jsx)(t.h3,{children:"My Code"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// makeFileBAsedDynamicPath.js\nimport fs from "fs";\n\nexport const makeFileBasedDynamicPath = (path, pathList = []) => {\n  const files = fs.readdirSync(path, { withFileTypes: true });\n  for (let file of files) {\n    let filePath = `${path}/${file.name}`;\n    if (file.isDirectory()) {\n      pathList.push(`${filePath}/index.mdx`);\n      makeFileBasedDynamicPath(filePath, pathList);\n    } else {\n      pathList.push(filePath);\n    }\n  }\n  return pathList;\n};\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// page.js\nexport async function generateStaticParams() {\n  const postTree = makeFileBasedDynamicPath(BLOG_POSTS_DIR);\n  const dynamicPath = [\n    ...postTree.map((post) => ({\n      postPath: `${post.slice(BLOG_POSTS_DIR.length)}`.split("/").splice(1),\n    })),\n    { postPath: [] },\n  ];\n  return dynamicPath;\n}\n'})})]})}t.default=function(e={}){let{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);