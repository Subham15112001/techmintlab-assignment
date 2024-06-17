import React from 'react'
import "../global.css"
function page_wrapper({children}) {
  return (
   <>
    <div data-w-id="da84240e-ad1e-9313-cab4-ee9c85039271" className="page-wrappers">
        {children}
    </div>
   </>
  )
}

export default page_wrapper