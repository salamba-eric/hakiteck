// Define the team members
const members = [
  {
    name: "Creflo Tigra Nyagrowa",
    title: "Operations Lead, Project Manager",
    image: "images/creflo_tigra_1.jpg",
    description: "Visionary Project Leader. An Electrical Engineer who thrives at the intersection of hardware and software. He is passionate about driving innovation, orchestrating teams, and delivering solutions that blend technical excellence with practical impact. With hands-on experience in robotics and a track record of managing projects from concept to deployment, Creflo excels at navigating complex challenges and inspiring collaboration.",
    link: "https://www.linkedin.com/in/creflo-tigra-a1659b275",
    email: "tigracreflo14@gmail.com",
    specialties: ["Architecture", "Innovation"]
  },

  {
    name: "Eric Salamba",
    title: "Senior Software Engineer",
    image: "images/eric_1.jpg",
    description: "Creative Full-Stack Developer. A computer scientist who brings ideas to life through code. He specializes in building user-centric web, mobile, and backend applications, and is known for his problem-solving skills and ability to manage projects end-to-end. Eric’s portfolio spans medical, e-commerce, and other domains, always with a focus on delivering robust, scalable solutions.",
    link: "https://salamba-eric.github.io/profile/portfolio_2.html",
    email: "ericsalamba@gmail.com",
    specialties: ["Problem Solving", "Web Development", "Mobile Development", "Backend Development", "Project Management"]
  },

  // Add other members here...
];

function createMemberCard(member) {
  const card = document.createElement("div");
  card.className = "flex flex-col gap-3 text-center p-3 rounded-lg";

card.innerHTML = `
    <div class="px-4">
      <a href="${member.link}" target="_blank" rel="noopener noreferrer">
        <div
          class="bg-center bg-no-repeat aspect-square bg-cover rounded-full"
          style="background-image: url('${member.image}'); width: 150px; height: 150px; max-width: 150px; max-height: 150px; margin: 0 auto;"
        ></div>
      </a>
    </div>
    <div class="flex flex-col items-center">
      <a href="${member.link}" target="_blank" rel="noopener noreferrer">
        <p class="text-white text-base font-medium leading-normal">${member.name}</p>
      </a>
        <p class="text-[#9cabba] text-sm font-normal leading-normal">${member.title}</p>
        <p class="text-[#9cabba] text-sm font-normal leading-normal mt-2">${member.description}</p>
        <p class="mt-5">Specialties:</p>
        <div class="flex justfy-center items-center gap-1 flex-wrap mt-1">
          ${member.specialties.map(specialty => `
            <p class ="border border-[#9cabba] rounded-xl p-2 text-white text-xs font-normal leading-normal">${specialty}</p>
          `).join("")}
        </div>
      <div class="flex flex-col mt-3 border border-[#9cabba] rounded-lg w-full">
        <a
          href="mailto:${member.email}"
          class="flex flex-col items-center justify-center mt-1 text-white text-xs font-normal leading-normal group"
        >
          <svg class="w-6 h-6 text-[#A2ABB3]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
          </svg>

            <p> ${member.email} </p>
          <a/>
      </div>
`;

  return card;
}

function populateMembers() {
  const container = document.getElementById("members-container");
  if (!container) return;

  members.forEach(member => {
    const card = createMemberCard(member);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", populateMembers);
