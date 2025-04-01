import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
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
      }
    }
  }
}