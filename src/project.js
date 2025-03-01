// Project data store - you can move this to a separate JSON file later
const projectsData = {
  "multiplayer-rts": {
    title: "Unnamed Multiplayer RTS",
    subtitle: "Real-Time Strategy Game",
    description: "A multiplayer real-time strategy game built with Unity URP and Mirror networking. Features include bridge and tower building, resource gathering, tech trees, and competitive gameplay.",
    technology: "C#, Unity URP, Mirror, Fizzy Steamworks",
    type: "Video Game",
    date: "2024",
    buttons: [
      { text: "Coming Soon", url: "#" }
    ],
    stats: [
      { value: "1-4", label: "Players" },
      { value: "Xbox, PC", label: "Platform Support" }
    ],
    images: [
      { src: "/rts.jpg", alt: "Unnamed Multiplayer RTS Screenshot" }
    ]
  },
  "anti-capytalist": {
    title: "Anti-Capytalist",
    subtitle: "Global Game Jam 2024 Entry",
    description: "A game created for the NS Global Game Jam 2024. Players control a jester capybara which is trying to overthrow the capitalist system. Its a fast paced realtime strategy game where you capture tiles and harvest resources to takeover the world.",
    technology: "C#, Unity URP",
    type: "Game Jam",
    date: "2024",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/2024-c-unity-anti-capytalist-ggj" },
      { text: "Github", url: "https://www.github.com/LethalLizard-Studios/Anti-Capytalist" }
    ],
    stats: [
      { value: "48 Hours", label: "Development Time" },
      { value: "Controller, Mouse & Keyboard", label: "Controls" }
    ],
    images: [
      { src: "/ggj.jpg", alt: "Anti-Capytalist Screenshot" }
    ]
  },
  "slimyquest": {
    title: "SlimyQuest 2.0",
    subtitle: "Procedurally Generated Voxel Engine",
    mainLink: "https://lelandcarter-archive.itch.io/slimyquest",
    description: "Procedurally generated voxel engine with a large focus on modding and easy expandability to core systems. The game features dynamic terrain generation, custom shaders, and an extensive modding API.",
    technology: "C#, Unity URP",
    type: "Video Game",
    date: "2023",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/slimyquest" },
      { text: "Github", url: "https://www.github.com/LethalLizard-Studios/SlimyQuest" }
    ],
    stats: [
      { value: "50,000+", label: "Lines of Code" },
      { value: "100+", label: "Custom Assets" },
      { value: "12", label: "Biomes" }
    ],
    images: [
      { src: "/slimy-quest-remake.jpg", alt: "SlimyQuest Remake Screenshot 1" }
    ]
  },
  "javafx-browser": {
    title: "JavaFX Browser",
    subtitle: "Lightweight Web Browser",
    mainLink: "https://lelandcarter-archive.itch.io/browser",
    description: "Light-weight browser made using Java FX. Features tabbed browsing, bookmarks, and a clean minimalist interface.",
    technology: "Java, JavaFX",
    type: "Desktop Application",
    date: "2023",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/browser" },
      { text: "Github", url: "https://www.github.com/LethalLizard-Studios/Lightweight-Browser" }
    ],
    stats: [
      { value: "3,500+", label: "Lines of Code" },
      { value: "Custom", label: "UI Framework" }
    ],
    images: [
      { src: "/java-browser.jpg", alt: "JavaFX Browser Screenshot 1" }
    ]
  },
  "pools-horror": {
    title: "Pools Horror",
    subtitle: "Photorealistic Horror Game",
    mainLink: "https://lelandcarter-archive.itch.io/2023-c-unity-pools-horror",
    description: "A horror game with photorealistic graphics using Unity HDRP. Players explore an abandoned pool facility with terrifying secrets.",
    technology: "C#, Unity HDRP",
    type: "Video Game",
    date: "2023",
    buttons: [
      { text: "Play Now", url: "https://lelandcarter-archive.itch.io/2023-c-unity-pools-horror" }
    ],
    stats: [
      { value: "HDRP", label: "Rendering Pipeline" },
      { value: "Photorealistic", label: "Graphics" }
    ],
    images: [
      { src: "/poolshorror.jpg", alt: "Pools Horror Screenshot" }
    ]
  },
  "lego-battles": {
    title: "LEGO Battles",
    subtitle: "LEGO-Inspired Strategy Game",
    description: "A strategy game inspired by LEGO Battles for the Nintendo DS. Features multiple factions, base building, and resource management.",
    technology: "C#, Unity URP",
    type: "Video Game",
    date: "2023",
    buttons: [
      { text: "View on Itch.io", url: "https://lelandcarter-archive.itch.io/lego-battles" }
    ],
    stats: [
      { value: "3", label: "Playable Factions" },
      { value: "RTS", label: "Game Genre" }
    ],
    images: [
      { src: "/lego-battles.jpg", alt: "LEGO Battles Screenshot" }
    ]
  },
  "doomsday-preservation": {
    title: "Doomsday Preservation",
    subtitle: "Post-Apocalyptic Survival Game",
    description: "A post-apocalyptic survival game where players must gather resources, build shelters, and survive in a harsh world after a global catastrophe.",
    technology: "C#, Unity URP",
    type: "Video Game",
    date: "2022",
    buttons: [
      { text: "View on Itch.io", url: "https://lelandcarter-archive.itch.io/doomsday-preservation" }
    ],
    stats: [
      { value: "Survival", label: "Game Genre" },
      { value: "Crafting", label: "Core Mechanic" }
    ],
    images: [
      { src: "/doomsday-preservation.jpg", alt: "Doomsday Preservation Screenshot" }
    ]
  },
  "opengl-plane-sim": {
    title: "OpenGL Plane Simulator",
    subtitle: "3D Flight Simulator",
    description: "A 3D flight simulator built with OpenGL and C. Features realistic physics, day/night cycles, and various weather conditions.",
    technology: "C, OpenGL",
    type: "Academic Project",
    date: "2022",
    buttons: [
      { text: "View on Itch.io", url: "https://lelandcarter-archive.itch.io/opengl-plane-sim" }
    ],
    stats: [
      { value: "CSCI 3161", label: "Course Project" },
      { value: "3D Graphics", label: "Focus Area" }
    ],
    images: [
      { src: "/opengl-plane-sim.jpg", alt: "OpenGL Plane Simulator Screenshot" }
    ]
  },
  "opengl-space": {
    title: "OpenGL Space Game",
    subtitle: "3D Space Exploration Game",
    description: "A 3D space exploration game built with OpenGL and C. Players navigate through space, avoiding asteroids and collecting resources.",
    technology: "C, OpenGL",
    type: "Academic Project",
    date: "2022",
    buttons: [
      { text: "Play Now", url: "https://lelandcarter-archive.itch.io/spacegame" }
    ],
    stats: [
      { value: "CSCI 3161", label: "Course Project" },
      { value: "Space", label: "Theme" }
    ],
    images: [
      { src: "/opengl-space.jpg", alt: "OpenGL Space Game Screenshot" }
    ]
  },
  "paranormal-investigations": {
    title: "Paranormal Investigations",
    subtitle: "Voice-Controlled Horror Game",
    description: "A horror game where players use their microphone to communicate with ghosts. Features voice recognition technology and atmospheric environments.",
    technology: "C#, Unity HDRP",
    type: "Video Game",
    date: "2021",
    buttons: [
      { text: "Play Now", url: "https://lelandcarter-archive.itch.io/paranormal-invetigations" }
    ],
    stats: [
      { value: "Voice Control", label: "Key Feature" },
      { value: "Horror", label: "Genre" }
    ],
    images: [
      { src: "/paranormal-investigations.jpg", alt: "Paranormal Investigations Screenshot" }
    ]
  },
  "mini-golf-vr": {
    title: "Mini-Golf VR",
    subtitle: "Virtual Reality Mini-Golf",
    description: "A VR mini-golf game that supports local multiplayer for up to 4 players with a single VR headset. Features multiple courses and physics-based gameplay.",
    technology: "C#, Unity URP",
    type: "VR Game",
    date: "2020",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/mini-golf-vr" }
    ],
    stats: [
      { value: "4 Players", label: "Local Multiplayer" },
      { value: "VR", label: "Platform" }
    ],
    images: [
      { src: "/mini-golf-vr.jpg", alt: "Mini-Golf VR Screenshot" }
    ]
  },
  "cavern-craze": {
    title: "Cavern Craze VR",
    subtitle: "Virtual Reality Cave Explorer",
    description: "A VR cave exploration game where players navigate through procedurally generated cave systems, solving puzzles and avoiding dangers.",
    technology: "C#, Unity Built-In",
    type: "VR Game",
    date: "2019",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/cavern-craze-vr" }
    ],
    stats: [
      { value: "Procedural", label: "Cave Generation" },
      { value: "VR", label: "Platform" }
    ],
    images: [
      { src: "/cavern-craze.jpg", alt: "Cavern Craze VR Screenshot" }
    ]
  },
  "tactical-shooter": {
    title: "Unnamed Tactical Shooter",
    subtitle: "First-Person Tactical Shooter",
    description: "A first-person tactical shooter with realistic weapon mechanics, team-based gameplay, and multiple game modes.",
    technology: "C#, Unity Built-In",
    type: "Video Game",
    date: "2019",
    buttons: [
      { text: "Download", url: "https://lelandcarter-archive.itch.io/tactical-shooter" },
      { text: "Watch Video", url: "https://www.youtube.com/watch?v=CUSzdjt4WfI" }
    ],
    stats: [
      { value: "FPS", label: "Genre" },
      { value: "Tactical", label: "Gameplay" }
    ],
    images: [
      { src: "/tactical-shooter.jpg", alt: "Tactical Shooter Screenshot" }
    ]
  },
  "slimeyquest-original": {
    title: "SlimeyQuest Original",
    subtitle: "2D Sandbox Game",
    description: "The original SlimeyQuest game, a 2D Sandbox where players can build various machines and mine for resources. The ultimate goal is to build a rocket and create a space station.",
    technology: "GML, GameMaker Studio",
    type: "Video Game",
    date: "2013",
    buttons: [
      { text: "Play Now", url: "https://www.lelandcarter-archive.itch.io/slimeyquest-og" },
      { text: "Watch Video", url: "https://www.youtube.com/watch?v=1xuoPtVl_XA" },
      { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=w3Wv1KOzS2g" }
    ],
    stats: [
      { value: "First Game", label: "Milestone" },
      { value: "2D", label: "Perspective" }
    ],
    images: [
      { src: "/slimeyquest.jpg", alt: "SlimeyQuest Original Screenshot" }
    ]
  },
  "sanction": {
    title: "SANCTION",
    subtitle: "GDA Indie Showcase Spotlight Winner",
    mainLink: "https://store.steampowered.com/app/1191080/SANCTION/",
    description: "SANCTION is a procedurally generated post-apocalyptic world where you are a prisoner sanctioned to come from the safety of your doomsday bunker to gather supplies for the community. Your freedom and your communities livelihood relies on you. Survive the desolate wasteland left by the final war.",
    technology: "C# .NET",
    type: "Video Game",
    date: "2025 (Release)",
    buttons: [
      { text: "Purchase on Steam", url: "https://store.steampowered.com/app/1191080/SANCTION/" }
    ],
    stats: [
      { value: "100,000+", label: "Lines of Code" },
      { value: "Award", label: "Winning" },
      { value: "Procedural", label: "Generation" }
    ],
    images: [
      { src: "/Screenshot_0.jpg", alt: "SANCTION Gameplay Screenshot 1" },
      { src: "/Screenshot_2.jpg", alt: "SANCTION Gameplay Screenshot 2" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Get the project ID from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectId && projectsData[projectId]) {
    loadProjectData(projectsData[projectId]);
  } else {
    // Handle case where project ID is not found
    displayErrorMessage();
  }
  
  // Initialize lazy loading for images
  initLazyLoading();
});

function loadProjectData(project) {
  // Set page title
  document.title = `Leland Carter | ${project.title}`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', `${project.title} - ${project.description.substring(0, 150)}...`);
  }
  
  // Add padding to the project detail section
  const projectDetailSection = document.querySelector('.project-detail');
  if (projectDetailSection) {
    projectDetailSection.style.paddingLeft = 'clamp(3rem, 12vw, 7.5rem)';
    projectDetailSection.style.paddingRight = 'clamp(3rem, 12vw, 7.5rem)';
  }
  
  // Set project details
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-subtitle').textContent = project.subtitle;
  document.getElementById('project-description').textContent = project.description;
  document.getElementById('project-technology').textContent = project.technology;
  document.getElementById('project-type').textContent = project.type;
  document.getElementById('project-date').textContent = project.date;
  
  // Set main project link
  const projectLink = document.getElementById('project-link');
  if (project.mainLink) {
    projectLink.href = project.mainLink;
  } else {
    projectLink.style.display = 'none';
  }
  
  // Add buttons
  const buttonsContainer = document.getElementById('project-buttons');
  if (project.buttons && project.buttons.length > 0) {
    project.buttons.forEach(button => {
      const btnElement = document.createElement('a');
      btnElement.className = 'btn work__project-btn';
      btnElement.href = button.url;
      btnElement.textContent = button.text;
      btnElement.target = '_blank';
      buttonsContainer.appendChild(btnElement);
    });
  } else {
    buttonsContainer.style.display = 'none';
  }
  
  // Add stats if available
  const statsContainer = document.getElementById('project-stats');
  if (project.stats && project.stats.length > 0) {
    // Clear any existing content
    statsContainer.innerHTML = '';
    
    // Create a container similar to featured__info-container
    const statsInfoContainer = document.createElement('div');
    statsInfoContainer.className = 'featured__info-container';
    
    project.stats.forEach(stat => {
      const statDiv = document.createElement('div');
      
      const statLabel = document.createElement('h3');
      statLabel.className = 'featured__label';
      statLabel.textContent = stat.label;
      
      const statValue = document.createElement('p');
      statValue.className = 'featured__info';
      statValue.textContent = stat.value;
      
      statDiv.appendChild(statLabel);
      statDiv.appendChild(statValue);
      statsInfoContainer.appendChild(statDiv);
    });
    
    statsContainer.appendChild(statsInfoContainer);
  } else {
    statsContainer.style.display = 'none';
  }
  
  // Add images
  const imagesContainer = document.getElementById('project-images');
  if (project.images && project.images.length > 0) {
    project.images.forEach(image => {
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'featured__img-wrapper';
      
      const img = document.createElement('img');
      img.className = 'lazy loading';
      img.src = 'https://via.placeholder.com/1920x968';
      img.dataset.src = image.src;
      img.alt = image.alt;
      img.style.borderRadius = '24px';
      
      imgWrapper.appendChild(img);
      imagesContainer.appendChild(imgWrapper);
    });
  }
}

function displayErrorMessage() {
  const mainSection = document.querySelector('main section');
  mainSection.innerHTML = `
    <h2 class="featured__title">Project Not Found</h2>
    <p class="featured__description">Sorry, the project you're looking for doesn't exist or has been removed.</p>
    <a href="index.html#featured" class="btn">Return to Projects</a>
  `;
}

function initLazyLoading() {
  // This is a simple implementation - you might want to use your existing lazy loading code
  const lazyImages = document.querySelectorAll('img.lazy');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy', 'loading');
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy', 'loading');
    });
  }
} 