/**
 * Calculates the Y coordinate of the text baseline from the top of the element's margin box,
 *
 * The calculation formula is as follows:
 *
 * 1. Calculate the baseline offset:
 * - Typically, the baseline is about 80% of the `fontSize` from the top of the text, as this is a common average for many fonts.
 *
 * 2. Calculate the additional space due to `lineHeight`:
 * - If the `lineHeight` is greater than the `fontSize`, the extra space is evenly distributed above and below the text. This extra space is `(lineHeight - fontSize) / 2`.
 *
 * 3. Calculate the total baseline Y coordinate:
 * - Sum of `marginTop`, `borderTopWidth`, `paddingTop`, the extra space due to `lineHeight`, and the baseline offset.
 * @param element - The element which baseline would be calculated
 * @returns - The Y coordinate of the text baseline from the top of the element's margin box.
 */
export function calculateBaseline(element: Element): number {
  const style = window.getComputedStyle(element);
  const fontSize = parseFloat(style.fontSize);
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2; // default line-height if not set
  const paddingTop = parseFloat(style.paddingTop);
  const borderTopWidth = parseFloat(style.borderTopWidth);
  const marginTop = parseFloat(style.marginTop);

  /**
   * Typically, the baseline is about 80% of the `fontSize` from the top of the text, as this is a common average for many fonts.
   */
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const baselineOffset = fontSize * 0.8;

  /**
   * If the `lineHeight` is greater than the `fontSize`, the extra space is evenly distributed above and below the text. This extra space is `(lineHeight - fontSize) / 2`.
   */
  const extraLineHeight = (lineHeight - fontSize) / 2;

  /**
   * Calculate the total baseline Y coordinate from the top of the margin box
   */
  const baselineY =
    marginTop + borderTopWidth + paddingTop + extraLineHeight + baselineOffset;

  return baselineY;
}
