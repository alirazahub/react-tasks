import React from 'react'
import Aside from './Aside'
import './screen2.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { HiFilter } from 'react-icons/hi'
function Screen2() {
  return (
    <div>
      <nav className="customNavBar"></nav>
      <div className="row">
        <div className="col-md-3 sidebar"><Aside /></div>
        <div className="col-md-8">
          <h1>Welcome to Dashboard</h1>
          <div className="row d-flex justify-content-end">
            <div className="col-md-3">
              <input class="nosubmit" type="search" placeholder="Search..." />
            </div>
            <div className="col-md-3">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='filterBtn px-4'>
                  <HiFilter size={25} className='mx-3' />
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1"> alphabetical names</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Created at</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Category</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="my-4 content">
            <div className="row p-4">
            <div className="col-md-6">
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Name</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Email</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Phone</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Number</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Front</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Back</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              
            </div>
            <div className="col-md-6">
              <button className='butnn' style={{background:"#025EE5"}}>Approve</button>
              <button className='butnn' style={{background:"#FE7676"}}>Dennied</button>
              <button className='butnn' style={{background:"black"}}>Block</button>
              <button className='butnn' style={{background:"#FE0000"}}>Delete</button>
            </div>
            </div>
          </div>

          <div className="my-4 content">
            <div className="row p-4">
            <div className="col-md-6">
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Name</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Email</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">Phone</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Number</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Front</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              <div className="my-3 row">
                <div className="col-md-4 fw-bold">CINIC Back</div>
                <div className="col-md-6"><input className='inppppp' type="text" /></div>
              </div>
              
            </div>
            <div className="col-md-6">
              <button className='butnn' style={{background:"#025EE5"}}>Approve</button>
              <button className='butnn' style={{background:"#FE7676"}}>Dennied</button>
              <button className='butnn' style={{background:"black"}}>Block</button>
              <button className='butnn' style={{background:"#FE0000"}}>Delete</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screen2