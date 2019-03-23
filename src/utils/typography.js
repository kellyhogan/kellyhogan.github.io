import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"
noriegaTheme.baseFontSize = '16px'
noriegaTheme.baseLineHeight = '1.5'

const typography = new Typography(noriegaTheme)

export const { scale, rhythm, options } = typography
export default typography
