import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/writing/')({
	component: MobileWritingPage,
});

function MobileWritingPage() {
	return <div>Hello "/writing/"!</div>;
}
