import { useCallback, useEffect, useState } from 'react';
import type { Dimensions } from '../../types';

export function useElementSize<T extends HTMLElement>() {
	const [node, setNode] = useState<T | null>(null);
	const [size, setSize] = useState<Dimensions>({ width: 0, height: 0 });

	const ref = useCallback((element: T | null) => {
		setNode(element);
	}, []);

	useEffect(() => {
		if (!node) return;

		const updateSize = () => {
			const rect = node.getBoundingClientRect();
			setSize({
				width: Math.round(rect.width),
				height: Math.round(rect.height),
			});
		};

		updateSize();

		const resizeObserver = new ResizeObserver(() => {
			updateSize();
		});

		resizeObserver.observe(node);

		return () => {
			resizeObserver.disconnect();
		};
	}, [node]);

	return { ref, size };
}
