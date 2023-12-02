import TheHeader from './Header/TheHeader'

export default function Layout({ children }) {
  return (
    <div>
      <TheHeader />
      <main>{children}</main>
      <div>footer</div>
    </div>
  )
}
