import {
    Button,
  EmptyState,
  EmptyStateImage,
  EmptyStateText,
  EmptyStateTitle,
} from "../assets/tailwind-classes";

import logo from '../assets/no-projects.png'

export default function NoProjectedSelected({onCreateProject}) {
  return (
    <EmptyState>
      <EmptyStateImage src={logo} alt="No project selected" />
      <EmptyStateTitle>No Project Selected</EmptyStateTitle>
      <EmptyStateText>
        <Button onClick={onCreateProject}>Create new project</Button>
      </EmptyStateText>
    </EmptyState>
  );
}
