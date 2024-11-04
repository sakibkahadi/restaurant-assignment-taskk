import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import callIcon from "../../../assets/about/call-alt.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tabs Header */}
      <div
        role="tablist"
        className="flex space-x-8 border-b-2 border-gray-300 mb-5"
      >
        <label
          className={`cursor-pointer py-2 text-lg font-semibold ${
            activeTab === "tab1"
              ? "bg-red-500 px-3  text-white"
              : "text-gray-600 hover:text-red-500 transition-colors duration-300"
          }`}
        >
          <input
            type="radio"
            name="tabs"
            value="tab1"
            checked={activeTab === "tab1"}
            onChange={() => setActiveTab("tab1")}
            className="sr-only"
          />
          About
        </label>
        <label
          className={`cursor-pointer py-2 text-lg font-semibold ${
            activeTab === "tab2"
              ? "bg-red-500 px-3  text-white"
              : "text-gray-600 hover:text-red-500 transition-colors duration-300"
          }`}
        >
          <input
            type="radio"
            name="tabs"
            value="tab2"
            checked={activeTab === "tab2"}
            onChange={() => setActiveTab("tab2")}
            className="sr-only"
          />
          Experience
        </label>
        <label
          className={`cursor-pointer py-2 text-lg font-semibold ${
            activeTab === "tab3"
              ? "bg-red-500 px-3  text-white"
              : "text-gray-600 hover:text-red-500 transition-colors duration-300"
          }`}
        >
          <input
            type="radio"
            name="tabs"
            value="tab3"
            checked={activeTab === "tab3"}
            onChange={() => setActiveTab("tab3")}
            className="sr-only"
          />
          Contact
        </label>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "tab1" && (
          <div role="tabpanel" className=" space-y-3">
            <h1 className="font-bebas font-semibold text-5xl">
              EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
            </h1>
            <p className="text-xs font-roboto font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
            <div className="flex items-center gap-10 !mt-8 ">
              <CustomButton buttonText="ABOUT MORE" />
              <p className="flex gap-2 items-center">
                <span>
                  <img src={callIcon} alt="icon" />
                </span>{" "}
                <span>+834267394885</span>
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div role="tabpanel" className=" space-y-3">
            <h1 className="font-bebas font-semibold text-5xl">EXPERIENCE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div role="tabpanel" className=" space-y-3">
            <h1 className="font-bebas font-semibold text-5xl">CONTACT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
