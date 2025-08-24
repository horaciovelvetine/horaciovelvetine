import type { SketchProps } from '@p5-wrapper/react';
import type {
	Colors,
	Dimensions,
	SpriteCharSet,
	SpriteCountSelects,
} from '../../../types';

/**
 * React state props passed to the sketches used in the updateWithProps() methods.
 */
export interface RPSSketchProps extends SketchProps {
	canvasSize: Dimensions;
	canvasColor: Colors;
	spriteChars: SpriteCharSet;
	spriteCount: SpriteCountSelects;
	showCollisionRadius: boolean;
	showVelocityIndicators: boolean;
	sketchIsPaused: boolean;
	resetRequested?: boolean;
	onResetHandled?: () => void;
}
