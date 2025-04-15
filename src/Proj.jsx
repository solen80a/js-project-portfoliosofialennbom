const project = [
  { title: "Title 1", content: "Hejhej Citroner" },
  { title: "Title 2" },
  { title: "Title 3" },
];

export const Proj = () => {
  <div>
  {project.map((project) => {
    return (
     
      <h3>{project.title}</h3>
      
    );
  })}
</div>
}