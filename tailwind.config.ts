import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        entertainment: colors.cyan,
        sport: colors.indigo,
        technology: colors.purple,
        'data-vis': colors.red,
        crm: colors.green,
        category: colors.gray,
        'food-and-drink': colors.amber,
        ecommerce: colors.blue,
        hospitality: colors.rose,
        charity: colors.yellow,
        primary: colors.blue,
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.gray[300],
            a: {
              color: colors.blue[500],
              '&:hover': {
                color: colors.blue[400],
              },
            },
            h1: {
              color: colors.white,
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              color: colors.white,
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              color: colors.white,
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h4: {
              color: colors.white,
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            p: {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: '1.75',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
              position: 'relative',
              '&::before': {
                content: '""',
                width: '0.5em',
                height: '0.5em',
                borderRadius: '50%',
                backgroundColor: colors.blue[500],
                position: 'absolute',
                left: 0,
                top: '0.6em',
              },
            },
            'ol > li': {
              paddingLeft: '1.5em',
              position: 'relative',
            },
            blockquote: {
              fontStyle: 'italic',
              color: colors.gray[400],
              borderLeftColor: colors.blue[500],
            },
            code: {
              color: colors.gray[300],
              backgroundColor: colors.gray[800],
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: colors.gray[900],
              color: colors.gray[300],
              padding: '1em',
              borderRadius: '0.5em',
              overflow: 'auto',
            },
            hr: {
              borderColor: colors.gray[700],
              marginTop: '2em',
              marginBottom: '2em',
            },
            strong: {
              color: colors.white,
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5em',
            },
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              borderCollapse: 'collapse',
            },
            th: {
              color: colors.white,
              fontWeight: '600',
              padding: '0.75em',
              borderBottom: `1px solid ${colors.gray[700]}`,
            },
            td: {
              padding: '0.75em',
              borderBottom: `1px solid ${colors.gray[800]}`,
            },
          },
        },
      },
    },
  },
}