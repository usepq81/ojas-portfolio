export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  thumb?: string;
  previewVideo?: string;
  mainVideo?: string;
  youtubeVideo?: string;
  previewGif?: string;
  links?: { link?: string; code?: string };
  area?: "Robotics" | "Embedded" | "AI/ML" | "Other";
  status?: 'Active' | 'In Progress' | 'Paused' | 'Archived' | 'Complete';
  active?: boolean;
  body?: string;             
  gallery?: string[];        
};

export const PROJECTS: Project[] = [
  {
    slug: "blip-auv",
    title: "BLIP: Autonomous Underwater Vehicle for Dolphin Research",
    blurb: "AUV robot with real-time whistle/click vocalization classification and closed-loop control.",
    tags: ["Robotics", "C++", "ESP32", "Android", "Controls", "Audio DSP"],
    area: "Robotics",
    status: "Active",
    thumb: "media/blip-auv/blip_thumb.jpg",
    previewVideo: "media/blip-auv/blip_preview.mp4",
    mainVideo: "media/blip-auv/blip_main.mp4",
    links: { link: "https://www.linkedin.com/posts/ojas-mediratta_robotics-embedded-signalprocessing-activity-7358290478351478784-0Afr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdTxJgB6uIFgkQecw_eTHt3ywpT-XIfTt8" },
    body: `BLIP is an autonomous underwater vehicle built for dolphin communication research. It started as a collaboration between the Wild Dolphin Project and Georgia Tech’s Contextual Computing Group, and it has grown into a platform that lets us study how dolphins respond to interactive acoustic signals in the wild. The idea is simple: build a robot that can listen, interpret, and respond to dolphin whistles in real time.

    The project has been through more than 15 pool trials and several ocean deployments, and each one pushed the system closer to something that could survive and perform in the Atlantic. BLIP had to become modular, repairable in the field, pressure tolerant, and smart enough to process complex acoustic signals while swimming in unpredictable conditions.

    I owned the entire software, firmware, and most of the electrical integration that made the robot responsive and usable during real experiments. I built the pipeline for real-time parameter tuning access that researchers relied on during deployments, implemented the OTA update system that let us push fixes without opening the robot, and developed the live web telemetry site that streamed robot state and acoustic detections in real time. These tools became the backbone of field operations and shaped how the research team interacted with the vehicle.

    On the embedded side, I designed and implemented the full control layer that linked an ESP32-based thruster controller with an onboard Google Pixel 9. The ESP32 handled cascaded PID-mixed thruster control across four degrees of freedom, and the Pixel ran all digital signal processing on the hydrophone stream. I built the DSP pipeline from the ground up, starting with Goertzel filters and template matching, then expanding into FFT processing that fed into a CNN classifier. Once a whistle was detected, the system mapped it to interactive behaviors so the robot could respond in a way that fit the rhythm of dolphin communication.

    A lot of my time also went into the internal electronics. As the vehicle’s enclosure evolved, I handled the sensor stack, power distribution, wiring architecture, bi-directional communication links, and the integration work that kept everything synchronized inside a confined pressure vessel. Even as the mechanical design changed, I kept the electronics reliable and field-ready.

    Working across so many layers of the system changed the way I think about engineering. One week I was tuning PID loops, the next I was wiring the power system, and the week after that I was redesigning a real-time DSP pipeline. Jumping between software, firmware, and hardware forced me to learn quickly and understand how decisions in one part of the stack affect everything else. It shaped me into more of a generalist who can move through a wide spectrum of problems and keep a complex system working as a whole.
    
    BLIP is still growing as a research platform. We are expanding its acoustic vocabulary, increasing reliability for longer deployments, and exploring how underwater robots can participate in broader studies of marine communication and behavior.`,
    gallery: [
      "media/blip-auv/blip_1.mp4",
      "media/blip-auv/blip_2.jpg",
      "media/blip-auv/blip_3.jpg",
      "media/blip-auv/blip_4.mp4",
      "media/blip-auv/blip_5.jpg",
      "media/blip-auv/blip_6.jpg",
      "media/blip-auv/blip_7.jpg",
      "media/blip-auv/blip_8.jpg",
      "media/blip-auv/blip_9.jpg",
      "media/blip-auv/blip_10.jpg",
      "media/blip-auv/blip_11.jpg",]
  },
  {
    slug: "turtlebot3-ros2",
    title: "ROS2 Perception, Planning, and Control Experiments with TurtleBot3",
    blurb: "Exploring robotics principles in ROS2 using the TurtleBot3 platform, including SLAM, navigation, and computer vision.",
    tags: ["Robotics", "AI/ML", "ROS2", "OpenCV", "Gazebo", "SLAM"],
    area: "Robotics",
    status: "Complete",
    thumb: "media/turtlebot3/turtlebot3_thumb.jpg",
    previewVideo: "media/turtlebot3/turtlebot3_preview.mp4",
    mainVideo: "media/turtlebot3/turtlebot3_preview.mp4",
    links: { code: "https://github.com/ojas-mediratta/turtlebot3-ros2" },
    body: `This project started as a simple attempt to understand ROS 2 on a TurtleBot3, but it slowly turned into an ongoing exploration of perception, localization, and control. It became my way of learning the fundamentals of the ROS 2 ecosystem while getting hands-on experience with real autonomous mobile robotics.

    I began with a basic perception pipeline that used OpenCV to detect and track colored objects. From there, I tied everything into ROS 2 topics so the robot could publish processed images and target coordinates in real time. Once that worked, I built a cascaded PID controller that fused camera and LIDAR inputs, which allowed the robot to chase moving targets while keeping a safe buffer of distance and maintaining alignment.

    After that, I shifted toward navigation. I built a Go-to-Goal controller that blended odometry and LIDAR sensing for reactive obstacle avoidance. The robot computed velocity commands based on real-time obstacle vectors and could move toward arbitrary goal positions while steering cleanly around whatever got in the way. This part of the project taught me a lot about low-level control, sensor fusion, and how motion planning works under practical constraints.

    The most recent phase focused on full mapping, localization, and global navigation with the ROS 2 Nav2 stack. I set up AMCL for reliable pose estimation, and tuned costmap and controller parameters until the robot could handle narrow hallways without drifting or oscillating. To automate longer missions, I wrote a ROS 2 node that publishes sequential waypoints to the /goal_pose topic so the robot can traverse a full route on its own. I tested everything in Gazebo's maze world and then transferred it to the physical TurtleBot3, where it performed consistent waypoint navigation and environment-aware planning.

    The final project brought everything together in a maze navigation task that required real-time sign classification using computer vision. The robot had to autonomously navigate through a maze while identifying and responding to visual commands posted at intersections. We experimented with several machine learning approaches for image classification, testing different models to balance accuracy with computational constraints. After evaluating options including deep learning architectures (just for fun, these were way too big to run on our limited turtlebot3), we settled on a Support Vector Machine (SVM) classifier. The SVM proved to be lightweight enough to run directly onboard the TurtleBot3 while still delivering excellent classification performance.`,
    gallery: [
      "media/turtlebot3/turtlebot3_1.mp4",
      "media/turtlebot3/turtlebot3_2.mp4",
      "media/turtlebot3/turtlebot3_3.mp4",
      "media/turtlebot3/turtlebot3_4.mp4",
      "media/turtlebot3/turtlebot3_5.mp4",]
  },
  {
    slug: "buzzcaster-guitar",
    title: "BuzzCaster: Gig-Ready, Teensy-Powered Guitar Effects",
    blurb: "Electric guitar with a built-in Teensy 4.1 effects chain, onboard DSP, LCD UI, simple controls, and custom body mods.",
    tags: ["Embedded Systems", "C++", "Teensy 4.1", "Arduino", "Rapid Prototyping", "Audio DSP"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/buzzcaster/buzzcaster_thumb.jpg",
    previewVideo: "media/buzzcaster/buzzcaster_preview.mp4",
    links: { code: "https://github.com/ojas-mediratta/BuzzCaster-Guitar" },
    body: `Guitar has been one of my passions for over a decade. I have spent countless hours playing, tinkering with gear, and chasing tones, always fascinated by how design choices shape the sound and feel of an instrument. When it came time to choose a final project for CS 3651 (Prototyping Intelligent Devices), I saw the chance to bring that passion together with my interest in embedded systems: building a guitar with its own onboard effects.

    The result was BuzzCaster, a custom guitar project that integrates a complete digital signal processing (DSP) chain directly inside the instrument. Instead of relying on external pedals and cables, the guitar itself handles delay, reverb, EQ, and distortion through a Teensy microcontroller running PJRC’s real-time audio framework. The goal was to keep the instrument familiar in form and playability, while giving it the flexibility of a built-in effects unit.

    Making this possible required significant design work. I routed out the guitar body to house the electronics, created a compact LCD and encoder interface for real-time control, and tuned the preamp to preserve the pickups’ natural impedance. Power stability was another challenge, so I designed a dedicated battery housing and safeguards to handle USB quirks and power bank issues.

    The process was iterative, involving circuit prototyping, 3D-printed mounting solutions, firmware development, and repeated testing to refine both tone and ergonomics. By the end, I had not only a fully playable instrument but also a proof of concept in embedded audio design: a guitar that merges traditional playability with integrated digital processing.

    More details, including schematics, firmware, and build notes, are documented in the repo README.`,
    gallery: [
      "media/buzzcaster/buzzcaster_1.jpg",
      "media/buzzcaster/buzzcaster_2.jpg",
      "media/buzzcaster/buzzcaster_3.jpg",
      "media/buzzcaster/buzzcaster_4.mp4",
      "media/buzzcaster/buzzcaster_5.jpg",
      "media/buzzcaster/buzzcaster_6.jpg",
      "media/buzzcaster/buzzcaster_7.jpg",
      "media/buzzcaster/buzzcaster_8.jpg",
      "media/buzzcaster/buzzcaster_9.jpg",
      "media/buzzcaster/buzzcaster_10.jpg",
      "media/buzzcaster/buzzcaster_11.jpg",]
  },
  {
    slug: "et55-keyboard",
    title: "ET55: A Custom 55‑key, Hand‑Wired Mechanical Keyboard.",
    blurb: "An ultra-compact board blending the vintage feel of IBM Model F layouts with modern touches—QMK firmware, USB-C, an OLED status screen, and a rotary-encoder volume knob.",
    tags: ["Embedded Systems", "C++", "ATMega34U4", "Fusion360", "Rapid Prototyping"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/et55/et55_thumb.jpg",
    previewVideo: "media/et55/et55_preview.mp4",
    mainVideo: "media/et55/et55_main.mp4",
    links: { code: "https://github.com/ojas-mediratta/ET55-Keyboard" },
    body: `I have been building mechanical keyboards for years, so when ECE 4180 (Embedded Systems Design) came around, I treated the final project as an excuse to make something more customized than anything I had built before. That turned into ET55: a 55-key, hand-wired board shaped by vintage IBM layouts but designed around the embedded work I wanted to explore.

    The build followed the classic hand-wired approach. I wired every switch individually, added diodes for proper NKRO, and heat-shrunk each joint to keep the matrix clean and serviceable. For the controller, I used a Pro Micro (ATmega32U4) running QMK and set up a four-layer layout that fit the compact form factor. I mounted the microcontroller on external pin headers so it could be swapped in seconds. That mattered because the board had to be returned at the end of the course, so I wanted it to be genuinely plug-and-play. Debugging the matrix was the usual hand-wired experience: one miswired column, several phantom keypresses, and a multimeter session before everything behaved.

    I added a few modern conveniences while I was at it. The board uses USB-C for reliability, a rotary encoder that works as a volume knob and layer switch, and a small OLED display for status info. I modeled and 3D-printed a custom case and plate, adjusting tolerances over a few prints until the fit felt solid and the switches seated cleanly despite the wiring bundle underneath.

    In the end, ET55 was a full embedded systems build disguised as a hobby keyboard. It combined wiring, firmware, debugging, and enclosure design into a single project while letting me customize a layout I already loved. It slots naturally into my collection, but it also became one of the most technically complete boards I have built.

    [See the repo README for full build notes.]`,
    gallery: [
      "media/et55/et55_1.jpg",
      "media/et55/et55_2.jpg",
      "media/et55/et55_3.jpg",
      "media/et55/et55_4.mp4",
    ]
  },
  {
    slug: "keyboard-design",
    title: "Freelance Custom Mechanical Keyboard Design and Manufacturing",
    blurb: "Completely bespoke mechanical keyboards, tailored to client specifications and preferences, and machined out of premium materials.",
    tags: ["Design and Manufacturing", "Fusion360", "Blender", "DFM"],
    area: "Other",
    status: "Complete",
    thumb: "media/keyboard-design/keyboard-design_thumb.jpg",
    previewVideo: "media/keyboard-design/keyboard-design_preview.mp4",
    mainVideo: "media/keyboard-design/keyboard-design_preview.mp4",
    links: { code: "https://github.com/ojas-mediratta/keyboard-design" },
    body: `Like many in the enthusiast mechanical keyboard community, I started out fascinated by the artistry and engineering that go into custom boards. The scene thrives on experimentation, people debating mounting styles, chasing the perfect sound profile, and pushing the limits of what a typing tool can be. I wanted more than just to buy into that culture; I wanted to create something of my own.

      With no prior experience in CAD, I dove into Fusion 360. At first, I barely knew how to sketch a rectangle, but I pushed through tutorials, forums, and trial-and-error late nights until I could translate ideas into working 3D models. My first goal was simple: design a board that felt truly bespoke, tailored to my hands, my workflow, and my taste.

      From there, freelance commissions grew organically. Clients would come with a concept, sometimes just a layout or an aesthetic inspiration, and I’d take on the challenge of turning it into a manufacturable design. That meant iterating on case geometry, experimenting with plate materials, and ensuring PCB compatibility, all while keeping ergonomics and acoustics in mind.

      Over time, I honed a process that combined community-driven design values with engineering rigor: CAD modeling in Fusion 360, prototyping through 3D prints or CNC samples, and firmware integration via QMK or VIA. Each project became an exploration of form and function, not just making a keyboard that works, but one that feels alive, with its own personality and presence on a desk.

      This journey has been as much about problem-solving as it has been about craft. What began as a personal desire for a one-off board turned into a series of freelance collaborations where I could merge technical design with the culture of enthusiast keyboards, producing pieces that are at once tools and expressions of identity.`,
    gallery: [
      "media/keyboard-design/keyboard-design_2.mp4",
      "media/keyboard-design/keyboard-design_3.mp4",
      "media/keyboard-design/keyboard-design_5.jpg",
      "media/keyboard-design/keyboard-design_6.mp4",
      "media/keyboard-design/keyboard-design_7.jpg",
      "media/keyboard-design/keyboard-design_8.jpg",
      "media/keyboard-design/keyboard-design_9.mp4",
      "media/keyboard-design/keyboard-design_10.jpg",
      "media/keyboard-design/keyboard-design_11.jpg",
      "media/keyboard-design/keyboard-design_12.jpg",
      "media/keyboard-design/keyboard-design_13.jpg",
      "media/keyboard-design/keyboard-design_14.jpg",
      "media/keyboard-design/keyboard-design_15.mp4",
      "media/keyboard-design/keyboard-design_16.mp4",
      "media/keyboard-design/keyboard-design_17.jpg",
      "media/keyboard-design/keyboard-design_18.jpg",
      "media/keyboard-design/keyboard-design_19.jpg",
      "media/keyboard-design/keyboard-design_20.jpg",
      "media/keyboard-design/keyboard-design_21.jpg",
      "media/keyboard-design/keyboard-design_22.jpg",
      "media/keyboard-design/keyboard-design_23.jpg",
      "media/keyboard-design/keyboard-design_24.jpg",
    ]
  },
   {
    slug: "hackGT12",
    title: "Dose: Modern care in a bottle [HackGT 12 Best Overall Winner]",
    blurb: "A smart medicine bottle that uses embedded sensing and rich dashboards to ensure safe, consistent medication adherence.",
    tags: ["Embedded Systems", "C++", "ESP32", "Rapid Prototyping", "MedTech"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/hackGT12/dose_thumb3.jpeg",
    previewVideo: "media/hackGT12/dose_preview.mp4",
    youtubeVideo: "8https://youtu.be/j7cSnyq9Vn8?si=D-a5kVKJLNQyEynK",
    links: { code: "https://github.com/dawsonp2003/HackGT12-Dose", link: "https://devpost.com/software/dose-ebmo9z" },
    body: `Dose was my HackGT12 Hackathon project. This was my first ever hackathon, and I loved it. Over the course of 36 intense hours, my team and I brainstormed, built, and debugged our way through sleepless nights, sticky notes, and too many energy drinks to count. HackGT12 brought together 900+ participants, and being part of that energy—watching the room buzz with ideas while racing the clock to bring ours to life—was unforgettable.  

    We set out to tackle a problem that’s huge but often invisible: medication non-adherence.  

    Medication non-adherence happens when patients don’t take their medication at the prescribed time or in the prescribed way. It might sound simple, but the impact is massive—studies estimate it costs the U.S. healthcare system $100–300 billion every year in avoidable direct costs. Missed doses, overdoses, and inconsistent adherence don’t just create complications for patients, but also ripple outward into failed treatments, unnecessary hospitalizations, and unreliable results in drug trial research.  

    That’s where Dose comes in. We designed it as a smart pill bottle that combines embedded sensing with rich data delivery. For patients, it makes adherence straightforward. For researchers and clinicians, it provides the high-quality data needed to truly understand whether treatments are working as intended. Building the hardware, software, and dashboard in such a short time was equal parts challenging and exhilarating—but seeing our prototype come together at the expo made every late-night bug fix worth it.`,
    gallery: [
      "media/hackGT12/dose_1.jpeg",
      "media/hackGT12/dose_2.jpeg",
      "media/hackGT12/dose_3.jpeg", 
      "media/hackGT12/dose_4.jpeg",
      "media/hackGT12/dose_5.jpeg",
      "media/hackGT12/dose_6.jpeg",
      "media/hackGT12/dose_7.jpeg",
      "media/hackGT12/dose_8.jpeg",
      "media/hackGT12/dose_9.jpeg",
      "media/hackGT12/dose_10.jpeg",
      "media/hackGT12/dose_11.jpeg",
      "media/hackGT12/dose_12.jpeg",
      "media/hackGT12/dose_13.jpeg",
      "media/hackGT12/dose_14.jpeg",
    ]
  },
  {
    slug: "ai-atl25",
    title: "Lucid: Vision That Keeps Highways Safe [AI ATL 25 Winner]",
    blurb: "A computer vision system that monitors truck driver fatigue through facial cues and heart-rate analytics, streamed to a live fleet dashboard.",
    tags: ["AI/ML", "React", "Typescript", "OpenCV", "Mediapipe", "Snowflake API"],
    area: "AI/ML",
    thumb: "media/ai-atl25/lucid_thumb.png",
    youtubeVideo: "https://youtu.be/AiMx3mfucmc",
    previewVideo: "media/ai-atl25/lucid_preview.mp4",
    links: { code: "https://github.com/amukker15/GTAI", link: "https://devpost.com/software/lucid-nijx3r"},
    body: `Lucid was my second ever hackathon project, and somehow, we won again (this time in a sponsor track for Snowflake AI Cloud systems). I’d just come off my first win a month earlier and decided to ride the wave.

    We built Lucid at the AI ATL Hackathon: a computer vision system that monitors truck driver fatigue in real time. The goal was simple; catch signs of drowsiness like blinking, yawning, or nodding off before they become dangerous. The data runs through a Snowflake backend and updates a live dashboard that shows each driver’s fatigue levels across a fleet.

    I focused mostly on the physical and frontend sides of the project. I designed and printed the demo hardware, an enclosure for the mobile phone which included the cameras and sensors, which took a few rounds of failed prints and redesigns before it came together cleanly. On the frontend, I worked on the React dashboard and the mobile port, making sure the visuals were clean, responsive, and intuitive.

    I also jumped in on some backend work, helping connect the API to Snowflake and shape how the data was stored and streamed to the frontend. It was a lot of small but essential details: data schemas, validation, debugging.

    By the end of the weekend, we had a full working demo; hardware, dashboard, backend, everything, and it actually felt cohesive. The prototype made it tangible, and the UI made it look finished. For a 36-hour build, it came together in a way that surprised even us.`,
    gallery: [
      "media/ai-atl25/lucid_1.png",
      "media/ai-atl25/lucid_2.jpeg",
      "media/ai-atl25/lucid_3.jpeg",
      "media/ai-atl25/lucid_4.jpeg",
      "media/ai-atl25/lucid_5.jpeg",
    ]
  },
];