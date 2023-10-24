"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';


export default function Experience() {
  const {ref}= useSectionInView('Experience')
  

  return (
    <motion.section id="experience" ref={ref} className="scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience & Education</SectionHeading>
      <VerticalTimeline  lineColor="" >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement 
             contentStyle={{
              background: '#f3f4f6',
              visibility: 'visible',
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af',
              visibility: 'visible'
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:"white",
              fontSize: "1.5rem",
              visibility: 'visible'
            }}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}