import Navbar from 'src/components/Navbar'
const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default BaseLayout
