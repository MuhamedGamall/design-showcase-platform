import EmptyState from "@/components/EmptyState";
import { getProject } from "@/lib/actions";
import ProjectForm from "../../_components/ProjectForm";
import Container from "@/components/Container";
import LoaderWrapper from "@/components/LoaderWrapper";
import UpdateProjectClientContent from "../_components/UpdateProjectClientContent";

const EditProject = async ({ params }: { params: { id: string } }) => {
  return <UpdateProjectClientContent params={params} />;
};

export default EditProject;
