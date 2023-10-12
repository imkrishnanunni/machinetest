import React from 'react'
import book from './assets/TS-Box.png.png'
import diamond from './assets/diamond 2.svg'
import './page1.css'
import system from './assets/t.png.png'
import adv from './assets/advance-600x375.png.png'
import qts from './assets/SVG.svg'
import laura from './assets/LauraT.png.png'
import antony from './assets/Anthony%20H.jpg.png'
import rayan from './assets/RyanE.png.png'




function Page1() {
  return (
    <>

      {/* first page */}

      <div className="container">
        <div className="row ">
          <div className="col-1"></div>
          <div className=" col-sm-12 col-lg-6 col-md-4" id='content-height'>
            <p class="a1" >
              <br /><br /><br />
              Welcome to
              <img src={diamond} alt="" id='dmspace' /> </p>

            <h3>  <img src={diamond} alt="" />  <b> TaxShield Software</b> </h3>

            <p>As a prominent provider of professional tax software, <br />
              our primary goal is to foster growth alongside our partners.
            </p>
            <button id='tr' >Try For Free</button>     <button id="ta" >Talk With Us</button>
          </div>
          <div className=" col-sm-12 col-lg-4 col-md-4 c" id='imgs'>
            <img src={book} alt="" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>


      {/* second page */}

      <div className="container-fluid" id='bg'>

        <div className="row">
          <div className="col-1"></div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={system} width="400px" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p class='a1 mt-3'>POWERFULL FEATURES</p>
            <h1> TaxShield Pro 1040</h1>
            <p>TaxShield Pro 1040 is the all-include solution for your proffesional tax preparation. With seamless
              bank product integration, expert technical support, Training and an integrated and an integration CRM, TaxShield
              empowers your tax prepration business. Whatever its's form 1040 or 1120, our software equips you for
              success this session. Effortlessy collect fees from client refunds and even offer taxpayer cash
              advances with TaxShields preffered bank product.

            </p>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Online 24/7 access</b>
              </div>
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Custom mobile APP</b>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Corporate returns</b>
              </div>
              <div className="col-6">

                <i class="fa-solid fa-check a1"></i> <b>E-Signature</b>
              </div>
            </div>





          </div>
          <center>   <h3 class=" a1 mb-4 mt-5" >What Makes us Different?</h3></center>
          <center> <h4 class="mb-5 a2">Answer is TSS! It's included <br /> With every Tax Software Licence! </h4></center>
          <div className="col-1"></div>



        </div>

      </div>

      {/* Third Page */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 class="mb-4 mt-4 a2">Advance's</h2>
            <p>TaxShield provides a truly distinctive range of advanced loan products within the industry. Collaborating closely with all the prominent banks. we extends pre-acknowledgment and post-acknowledgment loans to cater to your needs. Going beyond the convential, we produly present Holiday Advances for your valued customers. avaiable from mid-December and offering up to $1,000. Moreover, we empower our partners with seasonal capital infusion, strategically aiding them in scaling their operations during peak periods.  </p>

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4 " >
            <img src={adv} alt="" height="300px" id='pd' />
          </div>
        </div>
      </div>

      {/* Forth Page */}
      <div className="container-fluid" id="forth">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h3 class="a1 mt-5 mb-5">Call Tracking </h3>
            <p>
              TaxShield offers you the first fully integrated referral system with funding. Our advanced CRM not
              only empowers you with a referral program but also grants you control over its management and
              funding aspects. This season, TaxShield commit to contributing every single dollar towards your referral initatives. You'll be able set your own referral amount and custom criteria.
            </p>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Troll Free/Local Numbers</b>
              </div>
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Instance Phone Routing</b>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Track Each Call</b>
              </div>
              <div className="col-6">

                <i class="fa-solid fa-check a1"></i> <b>Listen-in to all calls</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fifth Page */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 class="mb-5 mt-5 a2">Referral</h2>
            <p class='mt-5 mb-5'>     TaxShield offers you the first fully integrated referral system with funding. Our advanced CRM not
              only empowers you with a referral program but also grants you control over its management and
              funding aspects. This season, TaxShield commit to contributing every single dollar towards your referral initatives. You'll be able set your own referral amount and custom criteria.
            </p>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>ACH Referral payouts</b>
              </div>
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Referrer Text Notification</b>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Referral Reporting</b>
              </div>
              <div className="col-6">

                <i class="fa-solid fa-check a1"></i> <b>Set Referral amount</b>
              </div>
            </div>

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4 " >

          </div>
        </div>
      </div>
      {/* sixth page */}

      <div className="container-fluid" id="sixth">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h3 class="a1 mt-5 mb-5">Text Message </h3>
            <p>
              Elevate your client communication with TaxShield's innovative text messaging platfrom Seamlessly interact with clients en masse or individually. whether for updates or professionalized greetings like birthday and holidays, all effortlessly included in your packages. Strengthen engagement, save time, and show genuine care. ushering in a new era of efficient and personalized interaction to deepen client relationships.
            </p>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Mass Text</b>
              </div>
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>One on One text</b>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Text Templates</b>
              </div>
              <div className="col-6">

                <i class="fa-solid fa-check a1"></i> <b> Text Automation</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Page */}



      <div className="container" >
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h3 class="a1 mt-5 mb-5"> Credit Card Payment</h3>
            <p>
              You now have the option to receive payments from your cleints via credit cards. We can Seamlessly
              integrate your portal with Stripe, ensuring that your well-earned funds are delivered to you without
              dealy. The process is remarkably straightforward and user-friendly.
            </p>
            <div className="row">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>User Friendly Pltform</b>
              </div>
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Invoicing system</b>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6">
                <i class="fa-solid fa-check a1"></i><b>Accpet all major credit cards</b>
              </div>
              <div className="col-6">

                <i class="fa-solid fa-check a1"></i> <b> No Extra Equipemnt</b>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>

      {/* Eighth page */}

      <div className="container-fluid mb-5" id="eighth">
        <div className="row mb-4 mt-4">
          <p class=" new mt-3 mb-3"><b >SOLUTION FOR YOUR OFFICE TYPE</b></p>
          <h2 class="new">Works with single office, multi-offices,<br /> and enterprise sized businesses.</h2>

          <p class="new">Need fast responds? you can call us now! <br />
            Let us show you how we can integrate with any size established organization <br />
            to help you see more costumers; while processing their more efficiently. <br />
            We have the techonology and knowledge to help you grow <br />
            your tax office no matter what stage you are at.
          </p>
        </div>
        <hr />
        <div className="row mb-5 mt-5" id="content">
          <p class="new">TESTMONIALS</p>
          <b>   <h3 class="new mb-3">What our customers say</h3></b>

          <div className="col-lg-3 col-sm-4 col-md-8 mt-4 mb-4" id="cd1">
            <img src={qts} alt="" class="mb-4 mt-4" />
            <br />
            <p>*
              Client retention was one of my office's biggest threats. Since using
              TaxShield Software we've seen a dramatic improvement in the
              quality of our customer service and communication . Our retirn
              visits are 14% year to date. It's not a coincidence; TaxShield
              made that happen.
              *</p>
            <img src={laura} alt="" /> <p class="a1">Oriando, FL</p>

          </div>
          <div className="col-lg-3 col-sm-4 col-md-8  mt-4 mb-4" id='cd2'>
            <img src={qts} class="mb-4 mt-4" alt="" />
            <p>*
              The time we have been able to save with TaxShield Software is priceless, and their support is second to none! Never have I been able to get this level of direction and support.
              *</p>
            <img src={antony} alt="" />
            <p class="a1">Hooker, CA</p>

          </div>
          <div className="col-lg-3 col-sm-4 col-md-8  mt-4 mb-4" id="cd3">
            <img src={qts} alt="" class="mb-4 mt-4" />
            <p>*
              I was able to get the tools I needed too help take my tax office to the next level. From marketing to new tax clients while
              also learning how to sell my husband software; TaxShield showed me how to expand every step of the way.
              *</p>
            <img src={rayan} alt="" /><p class="a1">Austin.TX</p>

          </div>
        </div>

      </div>


      {/* Nineth Slide */}

      <div className="container " id="a8">
        <div className="row">

          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th rowspan="1"></th>
                <th scope="col">Entry Level</th>
                <th scope="col">PREMIUM</th>
                <th scope="col">ENTERPRISE</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td></td>
                <td> <p class="a7">$ 499</p>
                  30+ Bank Products
                </td>
                <td  ><p class="a7">$ 1499</p> No restrictions</td>
                <td  ><p class="a7">$ 1,999</p> No restrictions</td>

              </tr>
              <tr>

                <td>1040 Software</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>

                <td >All States included</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>

              <tr>

                <td >Online Access To Software 24/7</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Conversion Form Other Tax Programs</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Integrated CRM</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Full Support</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Comprehensive Reporting</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Number Of Users</td>
                <td> Includes 10Users</td>
                <td>Unlimitted</td>
                <td>Unlimitted</td>
              </tr>
              <tr>
                <td >Unlimitted E-Filing</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Mobile App</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >E-Signature</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Mac Compatible</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Funded Holiday Advance</td>
                <td> Minimum 30 Bank Products</td>
                <td>Minimum 30 Bank Products</td>
                <td>Minimum 30 Bank Products</td>
              </tr>
              <tr>
                <td >Funded Referral Platfrom</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Onboarding</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Training</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Mass Text Message</td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Call Tracking </td>
                <td> <i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Co-Branding</td>
                <td> </td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Corporate Tax Software</td>
                <td> </td>
                <td><i class="fa-solid fa-check a9"></i></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Multi-Tier Software Access</td>
                <td> </td>
                <td></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Social Media Ad Setup</td>
                <td> </td>
                <td></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Google Ad Setup</td>
                <td> </td>
                <td></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Service Bureau Training</td>
                <td> </td>
                <td></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>
              <tr>
                <td >Service Bureau CRM</td>
                <td> </td>
                <td></td>
                <td><i class="fa-solid fa-check a9"></i></td>
              </tr>

              <tr>
                <td ></td>
                <td> <button class="btn2">Buy Now</button> </td>
                <td> <button class="btn2">Buy Now</button> </td>
                <td> <button class="btn2">Buy Now</button> </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>

      {/* Tenth Page */}

      <div className="container">
        <div className="row">
          <h2 class='a2 mb-5 mt-5'> <center>Schedule a meeting with our experts</center></h2>
          <p id="ls">Need fast respond, you can call us now! <br />
            Or if you are existing customer, you can <span id='aa'> open a ticket</span>
          </p>
        </div>
        <div className="row " id="ab">
          <div className="col-1"></div>
          <div className="col-lg-3 col-sm-12 col-md-8 mb-3 mt-3" id="br">
            <h3 class='mb-4'>Sales Inqueries</h3>
            <p>Associate Name</p>
            <p class="au">Link to Zoom Calender</p>
            <p><b>844571040</b></p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-8 mb-3 mt-3" id='br'>
            <h3 class="mb-4">Technical Support</h3>
            <p>Associate Name</p>
            <p class="au">Link to Zoom Calender</p>
            <p><b>844571040</b></p>

          </div>
          <div className="col-lg-3 col-sm-12 col-md-8 mb-3 mt-3" id='br'>
            <h3 class="mb-4">General Question</h3>
            <p>Associate Name</p>
            <p class="au">Link to Zoom Calender</p>
            <p><b>844571040</b></p>
          </div>
          <div className="col-1"></div>
        </div>

<div className="row">
  <div className="col-2"></div>
  <div className="col-lg-4 col-sm-12 col-md-8 mt-3 mb-3">
 <center> <i class="fa-solid fa-phone"> <b class="mx-4">Phone</b></i></center>
    <p><strong><center>844.576.1040</center></strong></p>
  </div>
  <div className="col-lg-4 col-sm-12 col-md-8 mt-3 mb-3">
 <center> <i class="fa-solid fa-envelope ">  <b class="mx-4">Email</b></i></center>
    <p><strong><center>support@gettaxshield.com</center></strong></p>
  </div>
  <div className="col-2"></div>
</div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-8"></div>
          <div className="col-lg-4">
            <p class='mt-4 mb-4 gr'>Sales and Support</p>
            <h3 class="mt-3"><strong> Do you need help?</strong></h3>
            <p>Our Customer representative helps you to understand what we offer for your business goals.</p>
            <button class="bu">Book Us</button>
          </div>
        </div>
      </div>


      {/* Contact Page */}

      <div className="container-fluid" id='bgc' >
        <div className="row">
         
          <div className="col-lg-4 col-sm-4 col-md-4 mx-5" id="co">
<form>

<h1 class="mt-4" >Get in Touch</h1>
<br /> <hr />
<p><strong  class="mb-3 mt-3">First Name</strong></p>
<input type="text"  class="w1"/>
<p><strong>Last Name</strong></p>
<input type="text" class="w1"/>
<p><strong>Phone number</strong></p>
<input type="text"  class="w1"/>
<p><strong>Email</strong></p>
<input type="text" class="w1"/>
<center><button class="bu mt-4 mb-3">Submit</button></center>

</form>


          </div>
          <div className="col-8">
      
          </div>

        </div>
      </div>


    </>


  )
}

export default Page1;
