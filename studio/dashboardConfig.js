export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e163bfb6c1b04580c725fac',
                  title: 'Sanity Studio',
                  name: 'another-sanity-gatsby-blog-studio',
                  apiId: '45bfaab6-17aa-4aae-a12e-0955836e378a'
                },
                {
                  buildHookId: '5e163bfb316a5d67a7aeed65',
                  title: 'Blog Website',
                  name: 'another-sanity-gatsby-blog',
                  apiId: 'c9f22214-61d3-4c5d-a062-eb1c80b0460a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vassilis/another-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://another-sanity-gatsby-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
