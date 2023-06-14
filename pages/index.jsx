import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Navbar from '../components/navbar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-black flex-col bg-white items-center ${inter.className} bg-gradient-to-r from-[#BBD0F9] via-[#E1E5E5] to-pink-[#BBD0F9]`}
    >
      <Navbar />

      <Box>
      <h1 className='font-semibold text-Black text-center text-[50px]'>
        <img
        src='logo1.png'
        alt="protax"
        className='ml-4'
        />
      </h1>
      <h2 className='font-semibold text-gray-700 text-center text-[30px] md:text-[50px] px-8'>We are the solution you are looking for.</h2>
      <p className='font-semibold text-blue-600 text-center md:text-2xl text-xl px-10 mt-4'>India’s best tax and financial services platform</p>

      </Box>

      <Box className="flex justify-center mt-8">
        
        <Button variant="contained" size="large" className='md:mr-8 mr-2 bg-blue-700 scale-[90%] md:scale-[130%]'>Let's Connect</Button>
        <Button variant="outlined" size="large" className='md:ml-8 ml-2 scale-[90%] md:scale-[130%]'>Send Query</Button>

      </Box>

      <Grid container spacing={4} className='mt-6 px-12 sm:px-40 mb-20'>
        
      <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>ITR</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Get your computation instantly</p>
            <p className='text-center text-sm mt-4'>
              ITR1 (Salried Individua), ITR2,<br/> ITR3, ITR4, ITR5
            </p>
            <Box>
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>Company Incorporation</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Get your registration within 10 days</p>
            <p className='text-center text-sm mt-4'>
              Company Incorporation
            </p>
            <Box className="mt-4">
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>GST</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Get your registration within 3 days</p>
            <p className='text-center text-sm mt-4'>
              GST Registration (Individual, Company, Firm)
            </p>
            <Box className="mt-4">
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>TDS/TCS</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Filing with accuracy</p>
            <p className='text-center text-sm mt-4'>
              TDC (form-24Q,26Q), TCS (form-27EQ)
            </p>
            <Box className="mt-4">
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>Business Registration</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Get your registration within 10 days</p>
            <p className='text-center text-sm mt-4'>
             Trademark Registration, MSME Registration, IEC code(import/export)
            </p>
            <Box>
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Paper className='w-[100%] h-[100%] p-8 p-8 hover:scale-[105%] rounded-3xl' elevation={3} >
            <p className='text-2xl text-gray-600 text-center'>Compliance</p>
            <p className='text-lg text-blue-900 text-center mt-2'>Get your registration within 7 days</p>
            <p className='text-center text-sm mt-4'>
              Compamy Annual Compliance, GST Compliance
            </p>    
            <Box>
            <Button variant="outlined" className='mt-4 m-auto ml-[30%]'>Explore Now</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box className="bg-gray-100 text-center px-[10%] w-[100%] py-10">
        <p className='text-[36px] md:text-[50px] text-black'>Why should I use Protax India ?</p>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={6}  className='p-8'>
            <Box className="bg-gray-700 rounded-xl h-[100%] text-white mt-4 p-4">
            
              <AccessTimeFilledIcon  className='text-[#18a324] text-[60px] mb-4'/>
          
              <p className='text-xl '>Timely Delivery</p>
              <p className='text-[#18a324] mt-4'>After Approval Complete the process instantly</p>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} md={6}  className='p-8'>
            <Box className="bg-gray-700 rounded-xl text-white h-[100%] mt-4 p-4">
            
              <TipsAndUpdatesIcon  className='text-[#eb8023] text-[60px] mb-4'/>
          
              <p className='text-xl '>Plan taxes</p>
              <p className='text-[#eb8023] mt-4'>Help in Taxation with better plans</p>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} md={6}  className='p-8'>
            <Box className="bg-gray-700 rounded-xl h-[100%] text-white mt-4 p-4">
            
              <AccessTimeFilledIcon  className='text-[#18a324] text-[60px] mb-4'/>
          
              <p className='text-xl '>Personalised Experience</p>
              <p className='text-[#18a324] mt-4'>Hustel Free</p>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="bg-gray-100 text-center px-[2%] md:px-[10%] w-[100%] py-10 bg-gradient-to-r from-[#BBD0F9] via-[#E1E5E5] to-pink-[#BBD0F9]">
        <p className='text-[36px] md:text-[50px]text-black'>Looking for expert services?</p>
        <p className='text-xl md:text-2xl text-gray-700 md:px-20 my-6 '>In addition to providing software services, we also offer expert services to help you manage your business and legal compliances.</p>

        <Grid container spacing={2} className='lg:px-28 px-8'>

          <Grid item xs={12} md={6}  className=' mt-4'>
            <p className='text-3xl text-left text-gray-600 font-semibold'>For Individual</p>
            <Stack spacing={2}>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>Salaried Individual</p>
                    <ul className='list-disc ml-2'>
                      <li>
                        Salary (Form-16) Below Rs 50 Lakhs
                      </li>
                      <li>
                        Income From Multuple House-Property
                      </li>
                      <li>
                        Withdrawls From Deposites & Donations
                      </li>
                    </ul>
                </Box>
              </Box>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>Capital Gain Income</p>
                    <ul className='list-disc ml-2'>
                      <li>
                        Everything in Salary/House Rent Income
                      </li>
                      <li>
                        Capital Gains from sale of stocks, mutual funds & property
                      </li>
                      <li>
                        Gains from Lottery, Gaming or Awards
                      </li>
                    </ul>
                </Box>
              </Box>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>Foreign Income</p>
                    <ul className='list-disc ml-2'>
                      <li>
                        Everything in Capital Gains Income Plan
                      </li>
                      <li>
                        Income earned outside India
                      </li>
                      <li>
                        Income earned in India for NRE, NRO A/c
                      </li>
                    </ul>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} className=' mt-4'>
            <p className='text-3xl text-left text-gray-600 font-semibold'>For Business</p>
            <Stack spacing={2}>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>For Professionals and Freelancers Doctors, Influencers, Professionals</p>
                  <ul className='list-disc ml-2'>
                      <li>
                      Preparation of Account Summary, P&L and balance sheet
                      </li>
                      <li>
                      Also covers salary, other incomes and capital gains
                      </li>
                      <li>
                      Also covers salary, other incomes and capital gain
                      </li>
                    </ul>                </Box>
              </Box>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>For Business</p>
                  <ul className='list-disc ml-2'>
                      <li>
                      Income for professionals (like Freelancers, Doctors) & small businesses
                      </li>
                      <li>
                      Applicable Annual Turnover &lt; Rs. 2 cr for businesses or Gross Receipt &lt; Rs. 50 Lacs for Professionals
                      </li>
                      <li>
                      Also covers salary, other incomes and capital gains
                      </li>
                    </ul>                </Box>
              </Box>
              <Box className="flex mt-4 py-4">
                <img src='./itr.png' alt="protaxIndia" className='w-12 h-12' />
                <Box className="ml-4 text-left">
                  <p className='text-gray-700 text-2xl'>Government registrations</p>
                  <ul className='list-disc ml-2'>
                      <li>
                        Business income from business having upto 200 transactions
                      </li>
                      <li>
                        Preparation of Account Summary. P&L and balance sheet
                      </li>
                      <li>
                      Also covers salary, other incomes and capital gains
                      </li>
                      <li>
                      Audit Fee and DSC not included
                      </li>
                    </ul>                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      
      <Box className="bg-gray-100 text-center px-0 md:px-[10%] w-[100%] py-10">
      <p className='text-[36px] md:text-[50px] text-black'>Our Plans</p>
        <p className='text-2xl text-gray-700 px-0 md:px-20 my-6 '>We at ProTaxIndia provide best customer service</p>

        <Grid container spacing={2} className='px-10 md:px-20 '>
          
          <Grid item xs={12} lg={4} md={6}  className='p-8 mt-4'>
          <div class="flip-card" className=''>
              <div class="flip-card-inner">
                  <div class="flip-card-front text-center">
                      <p class="text-[22px] text-blue-600 font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 text-gray-700'>Here Comes the data For ITR 1</p>
                      <ul className='type-disc text-left mx-auto mt-2 list-disc text-gray-700'>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className="text-gray-700 mt-8">
                        Price- 199
                      </Box>
                  </div>
                  <div class="flip-card-back">
                  <p class="text-[22px] text-gray-300  font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 '>Here Comes the data For ITR 1</p>
                      <ul className='type-disc mx-auto mt-2 list-disc '>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className=" mt-8">
                        Price- 199

                      </Box>
                  </div>
              </div>
          </div>
          </Grid>

          <Grid item xs={12} lg={4} md={6}  className='p-8 mt-4'>
          <div class="flip-card" className=''>
              <div class="flip-card-inner">
                  <div class="flip-card-front ">
                      <p class="text-[22px] text-blue-600 font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 text-gray-700'>Here Comes the data For ITR 1</p>
                      <ul className='type-disc text-left ml-8 mt-2 list-disc text-gray-700'>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className="text-gray-700 mt-8">
                        Price- 199

                      </Box>
                  </div>
                  <div class="flip-card-back">
                  <p class="text-[22px] text-gray-300  font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 '>Here Comes the data For ITR 1</p>
                      <ul className='type-disc text-left ml-8 mt-2 list-disc '>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className=" mt-8">
                        Price- 199

                      </Box>
                  </div>
              </div>
          </div>
          </Grid>

          <Grid item xs={12} lg={4} md={6}  className='p-8 mt-4'>
          <div class="flip-card" className=''>
              <div class="flip-card-inner">
                  <div class="flip-card-front ">
                      <p class="text-[22px] text-blue-600 font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 text-gray-700'>Here Comes the data For ITR 1</p>
                      <ul className='type-disc text-left ml-8 mt-2 list-disc text-gray-700'>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className="text-gray-700 mt-8">
                        Price- 199

                      </Box>
                  </div>
                  <div class="flip-card-back">
                  <p class="text-[22px] text-gray-300  font-bold mt-8">ITR 1 (Salaried Person)</p>
                      <p className='mt-8 '>Here Comes the data For ITR 1</p>
                      <ul className='type-disc text-left ml-8 mt-2 list-disc '>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                        <li>Aadhar Card</li>
                      </ul>
                      <Box className=" mt-8">
                        Price- 199

                      </Box>
                  </div>
              </div>
          </div>
          </Grid>

        </Grid>
      </Box>


      <Box className="bg-gray-100 text-center px-0 md:px-[10%] w-[100%] py-10 bg-gradient-to-r from-[#BBD0F9] via-[#E1E5E5] to-pink-[#BBD0F9]">
        <p className='text-[50px] text-black'>FAQ's</p>
        <Grid container spacing={2} className='px-4 md:px-10'>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>What ProTaxIndia Do?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>Why you should choose us?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>What ProTaxIndia Do?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>Why you should choose us?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>What ProTaxIndia Do?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>Why you should choose us?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>What ProTaxIndia Do?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>Why you should choose us?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>What ProTaxIndia Do?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

          <Grid item xs={12} md={6}  className='mt-4'>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='bg-blue-300'
            >
              <Typography>Why you should choose us?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

        </Grid>
      </Box>

    </main>
  )
}
