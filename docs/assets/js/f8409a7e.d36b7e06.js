'use strict';
(self.webpackChunkreact_image_displayer_doc =
  self.webpackChunkreact_image_displayer_doc || []).push([
  [903],
  {
    4505: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => c,
        });
      var i = t(4848),
        s = t(8453);
      const a = { sidebar_position: 1 },
        r = 'React Image Displayer',
        o = {
          id: 'intro',
          title: 'React Image Displayer',
          description:
            'An image loader React component that displays/mounts the image only after it is successfully loaded. It has three key features:',
          source: '@site/docs/intro.mdx',
          sourceDirName: '.',
          slug: '/intro',
          permalink: '/react-image-displayer/docs/intro',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/sDenizOzturk/react-image-displayer/tree/main/doc/docs/intro.mdx',
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'DocumentationSidebar',
          next: {
            title: 'Props & Types',
            permalink: '/react-image-displayer/docs/category/props--types',
          },
        },
        l = {},
        c = [
          { value: 'Getting Started', id: 'getting-started', level: 2 },
          { value: 'Installation', id: 'installation', level: 3 },
          { value: 'Usage', id: 'usage', level: 3 },
          { value: 'Example', id: 'example', level: 3 },
        ];
      function d(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'react-image-displayer',
              children: 'React Image Displayer',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'An image loader React component that displays/mounts the image only after it is successfully loaded. It has three key features:',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Built-in spinners: The built-in spinner is displayed while the image is loading. 20+ spinners could be used via ',
                        (0, i.jsx)(n.a, {
                          href: 'https://www.davidhu.io/react-spinners/',
                          children: 'React Spinners',
                        }),
                        ' library.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Enter Animations: After the image is loaded, it appears with an enter animation. 10+ animations could be used via ',
                        (0, i.jsx)(n.a, {
                          href: 'https://www.framer.com/motion/',
                          children: 'Framer Motion',
                        }),
                        ' library.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'JWT Support: ',
                        (0, i.jsx)(n.code, { children: '<img>' }),
                        ' tag does not support JWT authentication. However, using this component, they are fetched effortlessly by only passing the JWT token through the ',
                        (0, i.jsx)(n.code, { children: 'token' }),
                        ' prop.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                "Let's discover ",
                (0, i.jsx)(n.strong, {
                  children: 'React Image Displayer in less than 2 minutes',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'installation', children: 'Installation' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Install react-image-displayer with via your package manager:',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-bash',
                children: 'npm i react-image-displayer\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'usage', children: 'Usage' }),
            '\n',
            (0, i.jsx)(n.p, { children: 'Import the component:' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-jsx',
                children:
                  "import ImageDisplayer from 'binak-react-components';\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, { children: 'Simply, use it:' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-jsx',
                children: '<ImageDisplayer url={enterImageURLHere} />\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'example', children: 'Example' }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-jsx',
                children:
                  "<ImageDisplayer\n  url={imageUrl}\n  token={token}\n  delay={1000}\n  enterAnimation={['blur', 1]}\n  imageStyle={{\n    borderBottomLeftRadius: '11px',\n    borderBottomRightRadius: '11px',\n  }}\n  spinner={{\n    color: 'var(--color2)',\n    size: '1rem',\n    spinnerType: 'BeatLoader',\n  }}\n/>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, {
                alt: 'Result',
                src: t(5341).A + '',
                width: '852',
                height: '480',
              }),
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n
          ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) })
          : d(e);
      }
    },
    5341: (e, n, t) => {
      t.d(n, { A: () => i });
      const i =
        t.p + 'assets/images/result-66031c41fbab7121da896db25630b6c2.gif';
    },
    8453: (e, n, t) => {
      t.d(n, { R: () => r, x: () => o });
      var i = t(6540);
      const s = {},
        a = i.createContext(s);
      function r(e) {
        const n = i.useContext(a);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
