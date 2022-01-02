import { defineConfig } from 'dumi';

const repo = 'valli-blog';

export default defineConfig({
  title: repo,
  favicon: 'favicon.ico',
  logo: 'dqy.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: '关于我',
      // path: '链接是可选的',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        {
          title: 'GitHub',
          path: 'https://github.com/DUANQY0818/valli-blog.git',
        },
        { title: 'CSDN博客', path: 'https://blog.csdn.net/chaochao123go' },
        // { title: '第二项', path: '/guide' },
      ],
    },
  ],
  // more config: https://d.umijs.org/config
  devServer: {
    port: 13320,
  },
});
