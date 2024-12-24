"use client";

import { useEffect, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { getProject } from "@/lib/actions";
import ProjectForm from "../../_components/ProjectForm";
import Container from "@/components/Container";
import LoaderWrapper from "@/components/LoaderWrapper";
import { ProjectInterface } from "@/types";

const UpdateProjectClientContent = ({ params: { id } }: { params: { id: string } }) => {
  const [project, setProject] = useState<ProjectInterface|any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProject(id, "");
        setProject(data?.project); 
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (!project && !isLoading) {
    return (
      <section className="flexStart flex-col paddings">
        <EmptyState
          showButton
          buttonTitle="Back to home"
          title="Failed to fetch project info"
          subtitle="No project found"
        />
      </section>
    );
  }

  return (
    <LoaderWrapper isLoading={isLoading}>
      <section className="mb-10">
        <Container className="!px-10">
          <h3 className="head-text my-10 md:!w-fit md:mx-auto">Update Project</h3>
          <ProjectForm type="update" project={project} />
        </Container>
      </section>
    </LoaderWrapper>
  );
};

export default UpdateProjectClientContent;
