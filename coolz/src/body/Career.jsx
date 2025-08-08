

const supports = [
  { title: "Placement Cell", desc: "Dedicated team working with top recruiters to ensure successful placements." },
  { title: "Internship Opportunities", desc: "Collaborations with companies for internships starting from 2nd year." },
  { title: "Resume & Interview Training", desc: "Workshops on resume building, mock interviews, and aptitude." },
  { title: "Startup Incubation", desc: "Support for student entrepreneurs with mentorship and funding guidance." },
  { title: "Skill Development", desc: "Soft skills, communication, and leadership training included in curriculum." },
  { title: "Career Counseling", desc: "1-on-1 guidance to help students choose the right path." }
];

const alumni = [
  { name: "Anjali Sharma", role: "Software Engineer", company: "Google", image: "/src/assets/alumni1.jpg" },
  { name: "Rahul Verma", role: "Data Scientist", company: "TCS", image: "/src/assets/alumni2.jpg" },
  { name: "Megha Jain", role: "Product Manager", company: "Amazon", image: "/src/assets/alumni3.jpg" }
];

function Career() {
  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-800">Career Support at BKBIT</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          We ensure students step into the professional world with confidence, skills, and opportunities.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {supports.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Our Proud Alumni</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {alumni.map((alum, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md">
              <img
                src={alum.image}
                alt={alum.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-purple-700">{alum.name}</h3>
              <p className="text-gray-600">{alum.role}</p>
              <p className="text-sm text-gray-500">{alum.company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-100 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-purple-800">Your Future Starts Here</h3>
        <p className="text-gray-700 mt-2">
          Join BKBIT and unlock your career potential with our expert guidance and resources.
        </p>
        
      </section>
    </div>
  );
}

export default Career;
