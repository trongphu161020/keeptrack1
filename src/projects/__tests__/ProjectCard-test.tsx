import { render, screen } from "@testing-library/react";
import React from "react";
import { Project } from "../Project";
import ProjectCard from "../ProjectCard";

describe("<ProjectCard />", () => {
  let project: Project;
  let handleEdit: jest.Mock;
  beforeEach(() => {
    project = new Project({
      id: 1,
      name: "Mission Impossible",
      description: "This is really difficult",
      budget: 100,
    });
    handleEdit = jest.fn();
  });

  it("should initially render", () => {
    render(<ProjectCard project={project} onEdit={handleEdit} />);
  });
});
