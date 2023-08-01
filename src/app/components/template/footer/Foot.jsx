import Bottom from './Bottom'
import Half from './Half'
import Top from './Top'

export default function Foot () {
  return (
    <footer
      id="footer"
      className="border-0 mt-0"
    >
      <Top/>
      <hr className="bg-light opacity-2 my-0"></hr>
      <Half/>
      <Bottom/>
    </footer>
  )
};
