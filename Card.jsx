import React from 'react'

export default function Card() {
  return (
    <div>
         <div>
        <div className="card mt-3 " style={{ "width": "18rem", "maxHeight":"360px"}}>
          <img src="https://www.google.com/imgres?q=food&imgurl=https%3A%2F%2Fblog.swiggy.com%2Fwp-content%2Fuploads%2F2024%2F02%2FMasala-Dosa-1024x538.jpg&imgrefurl=https%3A%2F%2Fblog.swiggy.com%2Ffood%2Fexploring-ten-traditional-food-gems%2F&docid=TNOu1gUrCbPvnM&tbnid=p5FnQ_Eja-JbEM&vet=12ahUKEwjLrbCL1caNAxV5jK8BHYDoJXUQM3oECBgQAA..i&w=1024&h=538&hcb=2&ved=2ahUKEwjLrbCL1caNAxV5jK8BHYDoJXUQM3oECBgQAA" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">important text</p>
            <div className="container w-100">

              <select className='m-2 h-100  bg-success rounded'>
                {
                  Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>
                        {i+1}
                      </option>
                    )
                  })
                }
              </select>

            <select className='m-2 h-100  bg-success rounded'>
              <option value="half">Half</option>
               <option value="full">Full</option>
            </select>

            <div className='d-inline h-100 fs-5'>Total Price</div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
