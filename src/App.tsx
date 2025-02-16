import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <h1>Hollo World</h1>
      <Button variant="primary" />
      <Button variant="secondery" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
    </ThemeProvider>
  )
}
