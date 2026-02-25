import React from 'react'; // Added to fix React.Fragment error
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/portfolio';

const Timeline = () => {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-inner">
        <span className="sectionTag" data-animate="section-element">{t('timeline.tag')}</span>
        <h2 className="sectionTitle" data-animate="section-element">{t('timeline.title')}</h2>
        
        <div className="timeline-wrap">
          {/* Línea central absoluta - fuera del flujo del grid */}
          <div className="timeline-line-bg" aria-hidden="true" />
            
          {/* Filas: cada una con su dot en la columna central */}
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <React.Fragment key={item.id}> {/* Added unique key prop */}
                {/* Columna izquierda */}
                <div
                  className={`timeline-item ${isLeft ? 'left' : 'empty'}`}
                  data-animate={isLeft ? 'timeline-item' : undefined}
                  aria-hidden={isLeft ? undefined : 'true'}
                >
                  {isLeft && (
                    <>
                      <span className="timeline-date">{t(`timeline.e${item.id}.date`)}</span>
                      <h3 className="timeline-event" data-animate="section-element">{t(`timeline.e${item.id}.title`)}</h3>
                      <p className="timeline-detail" data-animate="section-element">{t(`timeline.e${item.id}.desc`)}</p>
                    </>
                  )}
                </div>

                {/* Columna central: dot de esta fila */}
                <div className="timeline-center-col" aria-hidden="true">
                  <div className="timeline-dot" />
                </div>

                {/* Columna derecha */}
                <div
                  className={`timeline-item ${!isLeft ? 'right' : 'empty'}`}
                  data-animate={!isLeft ? 'timeline-item' : undefined}
                  aria-hidden={!isLeft ? undefined : 'true'}
                >
                  {!isLeft && (
                    <>
                      <span className="timeline-date">{t(`timeline.e${item.id}.date`)}</span>
                      <h3 className="timeline-event" data-animate="section-element">{t(`timeline.e${item.id}.title`)}</h3>
                      <p className="timeline-detail" data-animate="section-element">{t(`timeline.e${item.id}.desc`)}</p>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
