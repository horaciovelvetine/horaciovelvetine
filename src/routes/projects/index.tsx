import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/')({
	component: MobileProjectsPage,
});

function MobileProjectsPage() {
	return <div>Hello "/projects/"!</div>;
}
