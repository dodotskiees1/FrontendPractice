import React from "react";
import Button from "../components/button";
import CardImages from "../components/cardwithimage";
import Card from "../components/card";
import Extra from "../components/extracard";
import Footer from "../components/footer";

const Main = () => {
  return (
    <div>
 <div className="md:flex w-full items-center py-5 px-5 md:px-20 justify-between ">
        <p className="font-bold font-sans">Bruno Simmons</p>
        <nav className="flex flex-wrap justify-between items-center gap-5 md:gap-10 text-sm md:text-base">
          <p className="font-sans">Works</p>
          <p className="font-sans">Services</p>
          <p className="font-sans">About</p>
          <Button size="sm" text="CONTACT" />
        </nav>
      </div>
     
 <div className="flex justify-center font-sans mt-[10%] font-semibold">
        <p className="text-base md:text-xl"> Hey There, Im Bruno Simmons</p>
      </div>
      <div className="flex justify-center font-sans mt-[2%] font-extrabold text-8xl mx-auto">
        <p className="text-center text-4xl md:text-8xl px-4 md:px-0">
          Building digital products, <br /> brands and experience
        </p>
      </div>

      <div className="flex justify-center px-4 md:px-[45%] py-[3%]">
        <Button size="lg" text="CONNECT WITH ME" />
        <button />
      </div>
      <div className="border-b-2 pt-[14%]"></div>
      <div className="mt-[5%] px-4 md:px-[8%]">
        <div className=" font-bold font-sans text-4xl mb-10">
          <p className="leading-relaxed">
            The Works I do, <br />
            and business I help.
          </p>
        </div>
        <div className="block md:flex">
          <div>
            <CardImages size="large" text="" image="4.png" />
            <div className="mt-10 font-sans">
              <p className="text-xl md:text-2xl font-bold">Ice Cream App Concept</p>
              <p className="text-xl mt-3">
                Palit namo sa akong ice lamion na barato pa dili mo mag <br />{" "}
                mahay maka kaon ani kay mo gwapo og mo gwapa <br /> mo busa
                palit na
              </p>

              <div className="mt-10">
                <Button size="lg" text="VISIT MY DRIBBLE" />
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-[7%] md:ml-[7%]">
            <CardImages size="large" text="" image="1.png" />
            <div className="mt-10 font-sans">
              <p className="text-2xl font-bold">Plant Store App</p>
              <p className="text-xl mt-3">
                Palit namo sa akong bulak kani na bulak maka ibog sa <br /> mga
                chismosa ninyo na silingan kung mangayo sila labayi <br /> og
                flower pot kay mga mahal ni na mga bulak kay importe <br />d
                from planet nimik
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:ml-[7%]">
            <CardImages size="large" text="" image="2.png" />
            <div className="mt-10 font-sans">
              <p className="text-2xl font-bold">Nike App Redesign</p>
              <p className="text-xl mt-3">
                Sapatos for sale super ganda ni na sapatas rain of shine dili
                <br /> ka mag mahal 10 year warranty open for reseller pm me all
                <br /> my social media account
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ml-0 md:ml-[4%] pb-5 pt-[10%] overflow-x-hidden">
        <Extra size="large">
          <div className="mt-[2%] font-bold font-sans text-4xl md:text-6xl ml-4 md:ml-11">
            <p>
              What I do for <br /> my customers
            </p>
          </div>
          <div className="mt-[2%] font-sans text-xl ml-11">
            <p>
              Naay Lebri hilot pog diri ka mag palit dili ka mag <br />
              mahay naa pagyud lebri kiss pero tapsing lang
              <br />
              free tutor kang master christian sa react with <br />
              advance tektik gikang sa planet nemik
            </p>
          </div>
          <div className="ml-10 mt-5">
            <Button size="lg" text="CONNECT WITH ME" />
          </div>
          <div className="hidden md:block">
            <div className="absolute top-[242%] ml-[48%]">
              <Card image="7.png">
                <div className="ml-4 mt-2 font-sans font-bold text-xl">
                  <p>UI/UX Design</p>
                </div>
                <div className="ml-4 mt-2 font-sans text-lg">
                  <p>
                    Websites, application or other design related tasks. I love
                    tackling digital problems.
                  </p>
                </div>
              </Card>
            </div>
            <div className="pl-[65%] absolute top-[224%]">
              <Card image="6.png">
                <div className="ml-4 mt-2 font-sans font-bold text-xl">
                  <p>Motion Graphics</p>
                </div>
                <div className="ml-4 mt-2 font-sans text-lg">
                  <p>
                    Every interaction you apply to your brand makes you stronger
                    and more priority.
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </Card>
            </div>
            <div className="absolute top-[258%] ml-[65%] pb-9">
              <Card image="5.png">
                <div className="ml-4 mt-2 font-sans font-bold text-xl">
                  <p>Branding</p>
                </div>
                <div className="ml-4 mt-2 font-sans text-lg">
                  <p>
                    Positioning the brand first. I create visual identity across
                    platforms.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="block md:hidden mt-8 space-y-6">
            <Card image="7.png">
              <div className="ml-4 mt-2 font-sans font-bold text-xl">
                <p>UI/UX Design</p>
              </div>
              <div className="ml-4 mt-2 font-sans text-lg">
                <p>
                  Websites, application or other design related tasks. I love
                  tackling digital problems.
                </p>
              </div>
            </Card>
            <Card image="6.png">
              <div className="ml-4 mt-2 font-sans font-bold text-xl">
                <p>Motion Graphics</p>
              </div>
              <div className="ml-4 mt-2 font-sans text-lg">
                <p>
                  Every interaction you apply to your brand makes you stronger
                  and more priority.
                </p>
              </div>
              <div>
                <p></p>
              </div>
            </Card>
            <Card image="5.png">
              <div className="ml-4 mt-2 font-sans font-bold text-xl">
                <p>Branding</p>
              </div>
              <div className="ml-4 mt-2 font-sans text-lg">
                <p>
                  Positioning the brand first. I create visual identity across
                  platforms.
                </p>
              </div>
            </Card>
          </div>
        </Extra>
      </div>
      <div className="mt-[10%] flex w-full">
        <Footer size="large">
          <div className="px-6 md:px-40 font-sans">
            <div className="font-sans mt-[5%] font-bold text-4xl md:text-8xl">
              <p>Have and idea?</p>
            </div>
            <div className="mt-10 font-medium text-3xl md:text-5xl">
              <p>Let's talk</p>
            </div>
            <div className="mt-[14%] text-lg flex flex-col md:flex-row h-auto md:h-40">
              <p className="flex-1 text-center md:text-left mb-8 md:mb-0">ivancarlubanan24@gamil.com</p>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 grid-rows-3 md:grid-rows-2">
                <div className=" flex items-center justify-center">
                  <p>Instagram</p>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Dribble</p>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Behance</p>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Twitter</p>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Facebook</p>
                </div>
                <div className=" flex items-center justify-center">
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default Main;
