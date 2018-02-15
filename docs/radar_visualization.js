
 radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Renuo Tech Radar - 2018.01",
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Frameworks" },
    { name: "Data Management" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
      // Example
      // {
      //   quadrant: 3,
      //   ring: 0,
      //   label: "AWS EMR",
      //   active: false,
      //   link: "../data_processing/aws_emr.html",
      //   moved: 0
      // },
      {
        quadrant: 0,
        ring: 0,
        label: "Ruby",
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Rails",
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Javascript",
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Typescript",
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Angular",
      },
      {
        quadrant: 2,
        ring: 1,
        label: "React Native",
      },
      {
        quadrant: 2,
        ring: 1,
        label: "GraphQL",
      },
      {
        quadrant: 0,
        ring: 1,
        label: 'Elixir',
      },
      {
        quadrant: 2,
        ring: 1,
        label: 'Phoenix',
      },
      {
        quadrant: 1,
        ring: 1,
        label: 'Heroku'
      },
      {
        quadrant: 0,
        ring: 2,
        label: 'Kotlin'
      },
      {
        quadrant: 2,
        ring: 1,
        label: 'VueJS'
      },
      {
        quadrant: 1,
        ring: 1,
        label: 'AWS S3'
      },
      {
        quadrant: 1,
        ring: 1,
        label: 'PostgreSQL'
      },
      {
        quadrant: 0,
        ring: 2,
        label: 'Swift'
      },
  ]
  //ENTRIES
}); 
