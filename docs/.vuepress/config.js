module.exports = {
  title: 'Vue Basic',
  desc: 'vue basic',
  base: '/vue-basic/',
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '生态',
        link: '/ecosystem/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基本内容',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'lifecycle',
            'dataFunction',
            'computedAndWatch',
            'computedImplement',
            'templateCompile',
            'showAndIf',
            'forAndIf',
            'forKey',
            'binding',
            'v-html',
          ]
        },
        {
          title: '组件深入',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'communication',
            'props',
            'slots',
          ]
        },
        {
          title: '响应式',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'reactivity',
            'detectArrayChange',
            'definePropertiesDisadvantage',
            'nextTick',
            'vue3Reactivity'
          ]
        },
        {
          title: '其他',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'mvvm',
            'performanceOptimize',
            'compareWithV3',
            'diff'
          ]
        }
      ],
      '/ecosystem/': [
        {
          title: 'Vue Router',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'router'
          ]
        },
        {
          title: 'Vuex',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'vuex'
          ]
        }
      ]
    }
  }
}