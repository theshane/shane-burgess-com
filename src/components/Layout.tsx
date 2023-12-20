import React from "react";
import type {ReactNode} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Matcher from "./Matcher";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type Props = {
  children?: ReactNode
  postJobTextHandler?: (jobPostingText: string) => void;
  clearSkillsMatch?: () => void;
};

const queryClient = new QueryClient();

const Layout = ({ children, postJobTextHandler = () => undefined, clearSkillsMatch = () => undefined }: Props) => (
  <QueryClientProvider client={queryClient}>
    <div className="flex bg-gray-800 text-white">
      <div className="w-1/4 bg-gray-900 p-4">
        <div className="mb-8 flex flex-col items-center">
          <div className="text-xl font-semibold tracking-tight">
            Shane Burgess
          </div>
          <div>Senior Software Engineer</div>
        </div>
        <nav className="flex flex-col items-center">
          <Link href="/">
            <p className="text-3xl block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700 hover:text-white">
              Home
            </p>
          </Link>
          <a
            href="https://www.linkedin.com/in/shaneburgessdod"
            target="_blank"
            className="block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>
        </nav>

        <Matcher
          postJobTextHandler={postJobTextHandler}
          clearSkillsMatch={clearSkillsMatch}
        />
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-4">{children}</div>
    </div>
  </QueryClientProvider>
);

export default Layout;
