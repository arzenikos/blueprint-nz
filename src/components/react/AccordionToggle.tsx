import { useState, useEffect } from 'react';



export default function TrickToggle() {
  const [stageOneOpen, setstageOneOpen] = useState(false);
  const [fixOpen, setFixOpen] = useState(false);
  const [supportsInterpolateSize, setSupportsInterpolateSize] = useState(true);

  // Feature-detect on mount, client-side only (matches the original CSS.supports check)
  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      setSupportsInterpolateSize(CSS.supports('interpolate-size', 'allow-keywords'));
    }
  }, []);

  const allOpen = stageOneOpen && fixOpen;

  const toggleBoth = () => {
    const opening = !allOpen;
    setstageOneOpen(opening);
    setFixOpen(opening);
  };

  return (
    <>
      <button className="cta" type="button" onClick={toggleBoth}>
        {allOpen ? 'Collapse all' : 'Expand all'}
      </button>

      <section className="grid">
        <article className="col stage-1">
          <div className="box">
            <button
              className="trigger"
              type="button"
              aria-expanded={stageOneOpen}
              aria-controls="panel-stageOne"
              onClick={() => setstageOneOpen((open) => !open)}
            >
              Stage 1
              <span className="sign" aria-hidden="true">{stageOneOpen ? '−' : '+'}</span>
            </button>
            <div className={`panel${stageOneOpen ? ' is-open' : ''}`} id="panel-stageOne">
              <div className="body">
                <p>
                  cards
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="col stage-2">
          <div className="box">
            <button
              className="trigger"
              type="button"
              aria-expanded={fixOpen}
              aria-controls="panel-fix"
              onClick={() => setFixOpen((open) => !open)}
            >
              Stage 2
              <span className="sign" aria-hidden="true">{fixOpen ? '−' : '+'}</span>
            </button>
            <div className={`panel${fixOpen ? ' is-open' : ''}`} id="panel-fix">
              <div className="body">
                <p>
                  cards
                </p>

              </div>
            </div>
          </div>
        </article>
      </section>

    </>
  );
}