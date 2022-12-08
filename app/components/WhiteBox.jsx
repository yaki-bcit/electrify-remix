/* 
Since this white box is a div, it doesn't have its own size.
To use white box, import it on a page and give other components
or just html elements as the 'children' prop.
*/

export default function WhiteBox({children}) {
  return (
    <div className="bg-white rounded-lg p-5 mb-4 text-lg">
      {children}
    </div>
  )
}