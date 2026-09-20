/**
 * The wrapping divider grid.
 *
 * Every cell gets identical padding and a left hairline; the grid is shifted
 * -1px inside an overflow-hidden wrapper so the leading rule is clipped.
 * That is what keeps columns aligned however the row wraps — never
 * special-case the first or last child.
 */
export default function RuledGrid({ variant = '4', top = false, noBottom = false, className = '', children }) {
  return (
    <div className={'ruled' + (top ? ' ruled--top' : '')}>
      <div
        className={
          'ruled__grid ruled__grid--' + variant +
          (noBottom ? ' ruled__grid--nobottom' : '') +
          (className ? ' ' + className : '')
        }
      >
        {children}
      </div>
    </div>
  );
}
