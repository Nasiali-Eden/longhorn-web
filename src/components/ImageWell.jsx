export default function ImageWell({ src, alt = '', ratio = 'ar-16-10', className = '', style }) {
  return (
    <figure className={'image-well ' + ratio + (className ? ' ' + className : '')} style={style}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
