import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
	component: MobileAboutPage,
});

function MobileAboutPage() {
	return <div>Hello "/about"!</div>;
}
