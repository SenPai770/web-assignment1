const projects = [
    {
      image: "attachment/images/project1-image.jpeg",
      title: "Posters",
      description: "This is a simple html,css project that I made 1 or 2 years ago that have multiple images with a samll random text.",
      link: "https://github.com/YoooArepy/my-web"
    },
    {
      image: "attachment/images/project2-image.jpeg",
      title: "capstoneProject",
      description: "this was a year or two ago, witch is a simple html page.",
      link: "https://github.com/YoooArepy/capstone1/blob/main/index.html"
    },
  ];
  
  const container = document.getElementById("cardContainer");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
  