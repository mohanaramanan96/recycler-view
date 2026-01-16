
import "../styles/skeleton.css";

export default function SkeletonItem({ style }) {
  return (
    <div className="skeleton-item" style={style}>
      <div className="skeleton-poster"></div>
      <div className="skeleton-lines">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
