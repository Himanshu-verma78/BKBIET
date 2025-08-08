import React from "react";

const syllabus = [
  {
    title: "🔷 Common for All Branches (1st Year)",
    semesters: [
      {
        name: "🧩 Semester 1",
        subjects: [
          "Engineering Mathematics-I",
          "Engineering Physics / Chemistry",
          "Basic Electrical Engineering",
          "Engineering Mechanics / Programming for Problem Solving",
          "Communication Skills",
          "Workshop Practice",
          "Physics/Chemistry Lab",
          "Electrical/Programming Lab",
        ],
      },
      {
        name: "🧩 Semester 2",
        subjects: [
          "Engineering Mathematics-II",
          "Engineering Chemistry / Physics",
          "Programming for Problem Solving / Engineering Mechanics",
          "Electronic Engineering",
          "Engineering Graphics",
          "Environmental Science",
          "Chemistry/Physics Lab",
          "Electronics Lab",
        ],
      },
    ],
  },
  {
    title: "🔶 Branch-Wise Syllabus from 2nd Year Onward",
    branches: [
      {
        name: "💻 Computer Science & Engineering (CSE)",
        semesters: [
          {
            name: "📘 Semester 3",
            subjects: [
              "Data Structures & Algorithms",
              "Digital Electronics",
              "Computer Organization",
              "Object Oriented Programming",
              "Discrete Mathematics",
              "Data Structures Lab",
              "OOP Lab",
            ],
          },
          {
            name: "📘 Semester 4",
            subjects: [
              "Operating Systems",
              "Theory of Computation",
              "Software Engineering",
              "DBMS",
              "Microprocessors & Microcontrollers",
              "OS Lab",
              "DBMS Lab",
            ],
          },
          {
            name: "📘 Semester 5",
            subjects: [
              "Computer Networks",
              "Design & Analysis of Algorithms",
              "Web Technology",
              "Compiler Design",
              "Artificial Intelligence",
              "CN Lab",
              "Web Tech Lab",
            ],
          },
          {
            name: "📘 Semester 6",
            subjects: [
              "Machine Learning",
              "IoT & Embedded Systems",
              "Mobile App Development",
              "Data Science",
              "Elective-I (Cloud Computing / Cyber Security)",
              "ML Lab",
              "IoT Lab",
            ],
          },
          {
            name: "📘 Semester 7",
            subjects: [
              "Major Project-I",
              "Industrial Training/Internship",
              "Elective-II",
              "Seminar",
            ],
          },
          {
            name: "📘 Semester 8",
            subjects: [
              "Major Project-II",
              "Elective-III",
              "Technical Presentation",
            ],
          },
        ],
      },
      {
        name: "🤖 Artificial Intelligence (AI)",
        semesters: [
          {
            name: "📘 Semester 3",
            subjects: [
              "Data Structures",
              "Introduction to AI",
              "Probability & Statistics",
              "Object Oriented Programming",
              "Data Structures Lab",
              "AI Lab",
            ],
          },
          {
            name: "📘 Semester 4",
            subjects: [
              "Machine Learning",
              "Data Mining",
              "Operating Systems",
              "Computer Vision",
              "DBMS",
              "ML Lab",
              "DBMS Lab",
            ],
          },
          {
            name: "📘 Semester 5",
            subjects: [
              "Deep Learning",
              "NLP",
              "Reinforcement Learning",
              "Software Engineering",
              "Ethics in AI",
              "DL Lab",
              "NLP Lab",
            ],
          },
          {
            name: "📘 Semester 6",
            subjects: [
              "Robotics",
              "Cloud Computing",
              "AI Applications",
              "Elective-I",
              "Robotics Lab",
              "Project Work",
            ],
          },
          {
            name: "📘 Semester 7–8",
            subjects: [
              "Major Project",
              "AI Start-up Internship",
              "Elective-II (Edge AI, Explainable AI, etc.)",
            ],
          },
        ],
      },
      {
        name: "📊 Data Science (DS)",
        semesters: [
          {
            name: "📘 Semester 3",
            subjects: [
              "Data Structures",
              "Python for Data Science",
              "Linear Algebra",
              "Database Management System",
              "DS Lab",
              "Python Lab",
            ],
          },
          {
            name: "📘 Semester 4",
            subjects: [
              "Machine Learning",
              "Statistics",
              "Data Mining",
              "Big Data Analytics",
              "Data Visualization",
              "ML Lab",
              "BDA Lab",
            ],
          },
          {
            name: "📘 Semester 5",
            subjects: [
              "Deep Learning",
              "Natural Language Processing",
              "Time Series Analysis",
              "Software Engineering",
              "DL Lab",
              "NLP Lab",
            ],
          },
          {
            name: "📘 Semester 6",
            subjects: [
              "Cloud Computing",
              "Business Intelligence",
              "Project Work",
              "Elective",
            ],
          },
          {
            name: "📘 Semester 7–8",
            subjects: [
              "Major Project",
              "Internship",
              "Advanced Analytics Elective",
            ],
          },
        ],
      },
      {
        name: "📡 Electronics & Communication (ECE)",
        semesters: [
          {
            name: "📘 Semester 3",
            subjects: [
              "Digital System Design",
              "Signals and Systems",
              "Network Theory",
              "Electronic Devices",
              "DSD Lab",
              "ED Lab",
            ],
          },
          {
            name: "📘 Semester 4",
            subjects: [
              "Analog Circuits",
              "Communication Systems",
              "Microprocessors",
              "Control Systems",
              "Lab Work",
            ],
          },
          {
            name: "📘 Semester 5",
            subjects: [
              "VLSI Design",
              "Digital Communication",
              "Embedded Systems",
              "Antennas",
              "VLSI Lab",
            ],
          },
          {
            name: "📘 Semester 6–8",
            subjects: [
              "IoT",
              "Wireless Communication",
              "Robotics",
              "Internship",
              "Final Year Project",
            ],
          },
        ],
      },
      {
        name: "⚡ Electrical Engineering (EE)",
        semesters: [
          {
            name: "📘 Semester 3",
            subjects: [
              "Network Theory",
              "Electrical Machines-I",
              "Electromagnetic Fields",
              "Analog Electronics",
              "Machine Lab",
            ],
          },
          {
            name: "📘 Semester 4",
            subjects: [
              "Electrical Machines-II",
              "Power Systems-I",
              "Control Systems",
              "Power Electronics",
              "Labs",
            ],
          },
          {
            name: "📘 Semester 5",
            subjects: [
              "Power System-II",
              "Digital Signal Processing",
              "Microcontroller",
              "Utilization of Electrical Energy",
            ],
          },
          {
            name: "📘 Semester 6–8",
            subjects: [
              "Smart Grid",
              "Renewable Energy",
              "HV Engineering",
              "Industrial Training",
              "Final Year Project",
            ],
          },
        ],
      },
    ],
  },
];

export default function BkbietSyllabus() {
  return (
    <div className="p-6 bg-gray-100">
      {syllabus.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {section.title}
          </h2>

          {section.semesters &&
            section.semesters.map((sem, i) => (
              <div key={i} className="mb-4 ml-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  {sem.name}
                </h3>
                <ul className="list-disc ml-6">
                  {sem.subjects.map((subject, j) => (
                    <li key={j}>{subject}</li>
                  ))}
                </ul>
              </div>
            ))}

          {section.branches &&
            section.branches.map((branch, bIndex) => (
              <div key={bIndex} className="mb-6 ml-4">
                <h3 className="text-xl font-semibold text-green-700 mt-6">
                  {branch.name}
                </h3>
                {branch.semesters.map((sem, sIndex) => (
                  <div key={sIndex} className="ml-4 mb-4">
                    <h4 className="text-lg font-medium text-blue-500">
                      {sem.name}
                    </h4>
                    <ul className="list-disc ml-6">
                      {sem.subjects.map((sub, subIndex) => (
                        <li key={subIndex}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
