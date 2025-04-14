"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TThem } from "../context/Context";

interface ProjectsCardProps {
  title: string;
  desc: string;
  link: string;
  them: TThem;
}

const ProjectsCard = ({ title, desc, link, them }: ProjectsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDark = them === "dark";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group block transition-all duration-300"
      >
        <div
          className={`group relative h-[320px] w-[350px] overflow-hidden rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
            isDark
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-50 hover:bg-white"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              isDark
                ? "from-blue-400/10 to-purple-500/10"
                : "from-blue-500/5 to-purple-600/5"
            } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          ></div>

          <div className="relative flex h-full flex-col">
            <h3
              className={`mb-4 text-2xl font-bold transition-colors duration-300 ${
                isDark
                  ? "text-white group-hover:text-blue-400"
                  : "text-gray-800 group-hover:text-blue-600"
              }`}
            >
              {title}
            </h3>

            <p
              className={`flex-grow ${
                isDark ? "text-gray-300" : "text-gray-600"
              } line-clamp-4`}
            >
              {desc}
            </p>

            <div className="mt-6 flex items-center justify-end">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className={`relative w-full max-w-2xl rounded-xl p-8 shadow-2xl ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className={`absolute right-4 top-4 rounded-full p-2 ${
                isDark
                  ? "text-gray-400 hover:bg-gray-700"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="space-y-6">
              <h2
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {title}
              </h2>

              <div className="prose dark:prose-invert">
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {desc}
                </p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                    isDark
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Close
                </button>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full px-6 py-2 text-sm font-medium text-white transition-colors duration-300 ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
