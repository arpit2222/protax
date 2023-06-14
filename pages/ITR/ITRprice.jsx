import Image from "next/image";
import { Inter } from "next/font/google";
import { Avatar, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/navbar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center ${inter.className} bg-gradient-to-r from-[#BBD0F9] via-[#E1E5E5] to-pink-[#BBD0F9]`}
    >
      <Navbar />

      <Grid container spacing={4} className="mt-6 px-8 sm:px-16 md:px-40 mb-20">
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div class="price_container ">
            <div class="card_box bg-[#1976D2] text-white ">
              <span className="before:content-['40%off'] text-xl"> </span>
              <p className="text-center mt-6 text-[30px]">ITR1</p>
              <p className="text-center mt-8 text-gray-200">Here comes the Document details and Important info</p>
              <ul className="list-disc ml-10 text-gray-200 mt-4">
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>
                <li>Aadhar card</li>  
                <li>Pan card</li>  
              </ul>
              <Box className="flex justify-center mt-4 mb-8"><NavigateNextIcon className=" border-white border-2 rounded-full scale-[170%] mx-auto hover:scale-[180%]"/></Box>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box>
        
      </Box>
    </main>
  );
}
