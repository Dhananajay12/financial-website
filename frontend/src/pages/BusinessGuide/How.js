import React, { useEffect } from "react";
import img from "../../Images/b1.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import SmallStrip from "../../components/SmallStrip";
import ModalContact2 from "../../components/ModalContact2";

// import { AccordionIcon } from "@chakra-ui/icons";
const How = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmallStrip data="How" data2="Business-Guide" />
      <br></br>
      <div className="container-fluid padding3">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <img src={img} alt="error" className="img-fluid rounded mt-3" />
          </div>
          <div className="col-md-6 col-lg-8 col-xl-8">
            <br></br>
            <br></br>
            <p className="h1 bold-text color">
              Where to Start Business in Dubai?
            </p>
            <br></br>
            <br></br>

            <p>
              You have a plethora of business investment opportunities in Dubai.
              One of the major prerequisites that every investor or entrepreneur
              should perform before investing is RESEARCH. The investor may opt
              for a Mainland company option or select from a list of Free zone
              regions. And this selection must be done based on the type of
              business. When it comes to a mainland company, the Department of
              Economic Development (DED) is the license issuing authority.
              Mainland companies are free to operate anywhere in the UAE both in
              the local market and outside the UAE. There are no operational
              restrictions of any kind. Free zone regions are specially allotted
              or designated geographical regions identified by particular
              business activity. The business is limited to the type or
              activities specified by the concerned free zone authority. And the
              free zone authority of each Free zone serves as the license
              issuing authority. Free zone companies are allowed to conduct
              business operations inside the Free zone and outside UAE.
              Diversifying the business to other UAE markets is not possible in
              the case of Free zone companies. Offshore jurisdictions are
              specifically meant for Offshore companies that do not require a
              physical presence in the Emirates. Offshore companies are allowed
              to do business outside the UAE but not inside. Therefore, the
              investor should have a clear idea about what, where to start. Here
              Set up Services shall guide you through the task of what Dubai has
              to offer and where to form a company in Dubai.
            </p>
            <br></br>
            <br></br>
            <ModalContact2 />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid padding3 ">
        <p className="h1 bold-text color">
          Here are the necessary formalities to set up a business in Dubai.{" "}
        </p>
        <br></br>
        <div className="shadow">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2 className="h2">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default How;
