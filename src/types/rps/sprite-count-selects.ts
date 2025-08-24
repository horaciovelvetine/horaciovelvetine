/**
 * Union type representing the available sprite count selection options for the Rock Paper Scissors sketch
 *
 * Defines user-selectable options for determining how many sprites to generate and display
 * in the simulation. Each option corresponds to a different number of sprites that will
 * be created when the sketch is initialized.
 *
 * @type {'some' | 'more' | 'lots' | 'lots!'}
 * @property 'some' - 15 Sprite Chars
 * @property 'more' - 30 Sprite Chars
 * @property 'lots' - 45 Sprite Chars
 * @property 'lots!' - 60 Sprite Chars
 */
export type SpriteCountSelects = 'some' | 'more' | 'lots' | 'lots!';
