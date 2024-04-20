import React, { useState } from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [menu, setMenu] = useState<string>("");

  return (
    <div className="w-full h-30 flex flex-col items-center justify-center bg-thdwhite bg-opacity-15">
      <div className="block text-priblue text-start no-underline leading-10 items-center align-middle gap-5 text-sm mx-4 font-bold mt-6 mb-0">
        Quick Links
      </div>
      <div className="flex flex-row">
        <ul className="navbar flex flex-row items-center text-center">
          <li
            className="block text-priblue text-start no-underline font-normal leading-10 items-center align-middle gap-5 text-sm mx-4"
            onClick={() => setMenu("User")}
          >
            <Link href={"/userDoshboard"}>
              <p style={{ textDecoration: "none" }}>
                • User
                {menu === "User" ? <hr className="bg-secwhite" /> : <></>}
              </p>
            </Link>
          </li>

          <li
            className="block text-priblue text-start no-underline font-normal leading-10 items-center align-middle gap-5 text-sm mx-4"
            onClick={() => setMenu("Matrixes")}
          >
            <Link href={"/MatricsDashboard"}>
              <p style={{ textDecoration: "none" }}>
                • Matrixes {menu === "Matrixes" ? <hr /> : <></>}
              </p>
            </Link>
          </li>

          <li
            className="block text-priblue text-start no-underline font-normal leading-10 items-center align-middle gap-5 text-sm mx-4"
            onClick={() => setMenu("HPA")}
          >
            <Link href={"/HPADashboard"}>
              <p style={{ textDecoration: "none" }}>
                • HPA{menu === "HPA" ? <hr /> : <></>}
              </p>
            </Link>
          </li>

          <li
            className="block text-priblue text-start no-underline font-normal leading-10 items-center align-middle gap-5 text-sm mx-4"
            onClick={() => setMenu("GitHub")}
          >
            <Link href={"https://github.com/oslabs-beta/Kubernetes-OSP"}>
              <p style={{ textDecoration: "none" }}>
                • GitHub {menu === "GitHub" ? <hr /> : <></>}
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="block text-priblue text-start no-underline font-normal leading-10 items-center align-middle gap-5 text-sm mx-4 font-sm mt-2 mb-10">
        ©2023 - 2024 Optikube. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
