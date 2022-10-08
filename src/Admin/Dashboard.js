import React from 'react'
import './css/dashboard.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Dashboard = () => {
  return (
    <React.Fragment>
    <div className='container my-5'>
      <div className='row my-3' >

      <div className='col-12'>
       <h3 className='fw-light text-secondary'>DASHBOARD</h3>
      </div>

        <div className='col-md-3 col-6'>
          <div className='d-flex justify-content-between quickbox'>
          <section className='align-self-center'>
          <span className='p-2 border rounded-circle bg-light'><CurrencyRupeeIcon/></span>
          </section>
          <section>
          <h4>Orders</h4>
          <p>933.00</p>
          </section>
          </div>
        </div>

        <div className='col-md-3 col-6'>
          <section className='quickbox'>
          <h4>Total Deliveries</h4>
          <p>553.00</p>
          </section>
        </div>

        <div className='col-md-3 col-6'>
          <section className='quickbox'>
          <h4>Total Users</h4>
          <p>120</p>
          </section>
        </div>

        <div className='col-md-3 col-6'>
          <section className='quickbox'>
          <h4>Total Profit</h4>
          <p>933.00</p>
          </section>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-8">
          <section className="dash_box">
          sss
          </section>
        </div>

        <div className="col-md-4">
          <section className="dash_box">
            ss
          </section>
        </div>
      </div>

      <div className='row my-3'>
        <div className='col-12'>
          <div className='row mb-2 d-flex justify-content-between'>
            <div className='col-md-10'>
              <h5>ORDER OF THE MONTH</h5>
            </div>
            <div className='col-md-2'>
              <select className='form-control'>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <table className='table bg-white'>
              <thead className='bg-dark text-white'>
                <tr>
                  <th>OrderId</th>
                  <th>CustId</th>
                  <th>OrderPrice</th>
                  <th>Mobile</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#123456</td>
                  <td>#502155</td>
                  <td>₹ 500.00</td>
                  <td>9504612385</td>
                  <td>Placed</td>
                </tr>
                <tr>
                  <td>#123456</td>
                  <td>#502155</td>
                  <td>₹ 500.00</td>
                  <td>9504612385</td>
                  <td>Placed</td>
                </tr>
                <tr>
                  <td>#123456</td>
                  <td>#502155</td>
                  <td>₹ 500.00</td>
                  <td>9504612385</td>
                  <td>Placed</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
    </React.Fragment>
  )
}
export default Dashboard