import {
  Container,
  FlexBetween,
  Header,
  Heading,
  Text,
  TextPreserve,
} from "../assets/tailwind-classes";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Container>
      <Header>
        <FlexBetween>
          <Heading level={1}>{project.title}</Heading>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </FlexBetween>
        <Text>{formattedDate}</Text>
        <TextPreserve>{project.description}</TextPreserve>
      </Header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
    </Container>
  );
}
