import { useState } from "react";
import "./Tabs.css"

function Tabs() {
  const [activeTab, setActiveTab] = useState("first")
  const changeTab = () => {
    if (activeTab === "first") {
      setActiveTab("second");
    } else {
      setActiveTab("first");
    }
  }
  return (
    <>

    </>
  );
}

export default Tabs;