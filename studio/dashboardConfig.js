export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6380e660319a393b952f3074',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-su8ujkw3',
                  apiId: 'f8c36efe-74e0-4ec1-9d4f-31737f83969a'
                },
                {
                  buildHookId: '6380e6606260b03a1336f483',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1ezf5wb9',
                  apiId: 'f43d6225-56a0-45ec-8df8-9143d9f4a96c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Uptip/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1ezf5wb9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
