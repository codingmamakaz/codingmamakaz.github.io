module.exports = {
  siteMetadata: {
    title: "Kazumi Karbowski",
    author: "Kazumi Karbowski",
    description: "Portfolio and blog",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/Codingmamakaz`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/codingmamakaz`,
      },
    ],
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blogs`,
    //     path: `${__dirname}/src/blogs`,
    //   },
    // },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        - contentPath defaults to `content/posts`
        - assetPath defaults to `content/assets`
        - mdx defaults to `true`
        */
        basePath: `/blog`,
        // contentPath: `content/posts`,

        // assetPath: `src/assets`,
        // mdx: false,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
