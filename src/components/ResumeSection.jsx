import { useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function ResumeSection() {
  return (
    <section variants={textVariant()}>
      <motion.div className="flex flex-col justify-start">
        <span className={styles.sectionSubText}>My Resume</span>
        <span className={styles.sectionHeadText}>Download My Resume</span>
      </motion.div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Resume</h2>

          <div className="flex gap-4">
            <a
              href="./resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-white/20"
            >
              View PDF
            </a>

            <a
              href="./resume/Resume.pdf"
              download
              className="px-5 py-2 rounded-lg bg-white text-black"
            >
              Download
            </a>
          </div>
        </div>

        <div className="h-[85vh] rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="./resume/Resume.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </section>
    </section>
  );
}

export default ResumeSection;
