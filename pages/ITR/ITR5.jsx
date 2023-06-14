import Image from "next/image";
import { Inter } from "next/font/google";
import { Avatar, Box, Button, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/navbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
const inter = Inter({ subsets: ["latin"] });

export default function ITR1() {
  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center ${inter.className} bg-gradient-to-r from-[#BBD0F9] via-[#E1E5E5] to-pink-[#BBD0F9]`}
    >
      <Navbar />

      <Grid container spacing={4} className="mt-[50px] px-8 lg:px-28 xl:px-[250px] mb-20 ">
        <Grid item lg={7} md={6} sm={12}>
          <Box>
            <p className="text-[30px] text-gray-600 font-semibold">Income Tax eFiling (Partnership Firm)</p>
            <p className="text-[45px] mt-4 text-black font-semibold">File ITR 2 in <spam className="text-blue-700">3 minutes</spam></p>
            <Box className="mt-4">
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px] "> A firm</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">A Limited Liability Partnership</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Association of Persons</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Body of Individuals</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Artificial Judicial Persons that are referred to in Section 2 (31) (vii)</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">The local authority that is referred to in Section 160(1) (ii) or 160 (1) (iv)</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Cooperative Society</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Societies that are registered under Societies Registration Act, 1860 or under any state law trust ( except the trusts that are eligible for ITR 7 Form Filing)</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Estate of the deceased person</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Business trust referred to in Section 139 (4E)</p>
              </Box>
              <Box className="flex mt-2">
                <CheckCircleOutlineIcon className="text-green-600 text-[36px]" />
                <p className="ml-4 text-gray-700 text-[20px]">Investment fund referred to in Section 139 (4F)</p>
              </Box>
            </Box>
            <p className="text-[30px] mt-4 text-black font-semibold">Documents Required</p>
            <ul className="list-disc ml-8 text-gray-800 text-[20px] font-semibold">
              <li>AAdhar Card</li>
              <li>PAN Card</li>
              <li>Salary Slip</li>
            </ul>
          </Box>
        </Grid>
        <Grid item lg={5} md={6} sm={12}>
          <Box className="bg-gray-100 rounded-xl px-6 py-4">
            <p className="text-[16px] font-semibold">Price</p>
            <hr className="my-2 border-[1px] border-gray-400 rounded-2xl scale-110"/>
            <Box className="flex justify-between ">
              <p className="text-gray-700 ">Market Price - </p>
              <p className="text-red-600 font-semibold text-right">Rs 2000 </p>
            </Box>
            <Box className="flex justify-between">
              <p className="text-gray-700 ">Our Price - </p>
              <p className="text-green-600 font-semibold text-right">Rs 999 </p>
            </Box>              
          </Box>

              <Box className="bg-gray-100 mt-8 rounded-xl px-6 py-4">
                <p className="text-[28px] text-center">Contact Us</p>
                <p className="text-[14px] font-semibold text-gray-600 text-center">We will get back within 2 working hours</p>
                <hr className="my-2 border-[1px] border-gray-400 rounded-2xl scale-110"/>
                <TextField fullWidth label="Name" id="fullWidth" className="my-2" />
                <TextField fullWidth label="Phone Number/Email" id="fullWidth"  className="my-2"/>
                <p className="text-[14px] font-semibold text-gray-600 text-center mt-4">No need to worry, your data is safe with us.</p>
                <Button variant="contained" className="bg-blue-500 mt-2">Send</Button>
              </Box>
        </Grid>
      </Grid>

    {/* <hr className="border-[1px] border-blue-400 rounded-xl w-[90%]"/> */}

       <Box className=" text-center px-[10%] w-[100%] mt-12 bg-gray-200 -mt-6 pt-4 pb-10">
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
              <Typography>What is an Income Tax Return (ITR)?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              An Income Tax Return (ITR) is a form used by individuals and businesses to report their income, deductions, and tax liabilities to the tax authorities. It is a 
              legal requirement in many countries, including India, for individuals and businesses to file their ITR
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
              <Typography>Who needs to file an Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              In general, individuals and businesses that meet certain income thresholds are required to file an Income Tax Return.
 The specific thresholds and rules may vary by country. It is advisable to consult the tax laws of your country or seek professional advice to determine 
whether you need to file an ITR
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
              <Typography>What are the benefits of filing an Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              Compliance with the law: Filing an ITR ensures that you fulfill your legal obligations.
Claiming tax refunds: If you are eligible for a tax refund, filing an ITR allows you to claim it.
Financial documentation: An ITR serves as proof of income and helps in securing loans or visas.
Carry forward of losses: Filing an ITR is necessary to carry forward losses from one year to offset
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
              <Typography>What documents are required to file an Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              Form 16 or salary certificates from employers.
Bank statements and interest certificates.
Investment statements, such as mutual funds or property documents.
Proof of deductions, such as medical bills or education expenses.
PAN (Permanent Account Number) card
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
              <Typography>How do I file an Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              The process of filing an Income Tax Return can vary depending on the country and the tax authorities. In many countries, including India, 
you can file your ITR online through the tax department's website or using authorized software. It is recommended to follow the guidelines provided by your tax authorities or 
seek professional assistance to ensure accurate filing
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
              <Typography> What is the due date for filing an Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              The due date for filing an Income Tax Return is determined by the tax authorities and can vary from country to country. In India, for example, 
the due date for individuals is usually July 31st of the assessment year (e.g., for the financial year 2022-23, the due date would be July 31, 2023). It is essential to be aware of the 
specific deadlines and avoid late filing to avoid penalties.

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
              <Typography>What happens if I don't file my Income Tax Return?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              Failure to file an Income Tax Return within the specified deadline may result in penalties and interest charges imposed by the tax authorities. 
Additionally, it may lead to difficulties in obtaining loans or visas, and the tax authorities may initiate legal proceedings to enforce compliance. It is crucial to file your ITR on time 
to avoid such consequences
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
              <Typography>Can I revise my Income Tax Return after filing?</Typography>
            </AccordionSummary>
            <AccordionDetails className='bg-blue-200'>
              <Typography>
              Yes, in many countries, including India, you have the option to revise your Income Tax Return if you discover any errors or omissions after filing. 
However, there is a specific time limit within which you can make revisions. It is advisable to doub
              </Typography>
            </AccordionDetails>
           </Accordion>
          </Grid>

        </Grid>
      </Box>
    </main>
  );
}
