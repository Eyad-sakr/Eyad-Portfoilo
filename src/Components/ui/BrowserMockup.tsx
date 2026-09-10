import "../../styles/BrowserMockup.css";
function BrowserMockup() {
  return (
      <div className="browser-mockup">
      <div className="browser-mockup__titlebar">
        <div className="browser-mockup__dots">
          <span></span><span></span><span></span>
        </div>
        <div className="browser-mockup__address"></div>
      </div>

      <div className="browser-mockup__body">
        <div className="skeleton-line skeleton-line--accent"></div>
        <div className="skeleton-line skeleton-line--wide"></div>
        <div className="skeleton-line skeleton-line--mid"></div>

        <div className="skeleton-cards">
          <div className="skeleton-card"><div className="skeleton-card__icon"></div></div>
          <div className="skeleton-card"><div className="skeleton-card__icon"></div></div>
          <div className="skeleton-card"><div className="skeleton-card__icon"></div></div>
        </div>
      </div>
    </div>
  )
}

export default BrowserMockup