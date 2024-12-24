"use client";

import ProjectsContent from "@/components/ProjectsContent";
import { fetchProjects } from "@/lib/actions";
import { ProjectInterface } from "@/types";
import { useEffect, useState } from "react";

const PageClientContent = ({
  searchParams: { q = "" },
}: {
  searchParams: { q?: string };
}) => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { projects } = await fetchProjects({ searchQuery: q });
        setProjects(projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [q]);

  return <ProjectsContent loading={isLoading} data={projects} />;
};

export default PageClientContent;
