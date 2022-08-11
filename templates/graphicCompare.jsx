import React, { useRef } from 'react';
import { templates, compile } from 'core/js/reactHelpers';
import a11y from 'core/js/a11y';

export default function GraphicCompare(props) {
  const {
    _id,
    _graphic1,
    _graphic2,
    _value,
    onChange,
    _globals
  } = props;
  const widgetEl = useRef(null);

  return (
    <div className="component__inner graphiccompare__inner">
      <templates.header {...props} />
      <div className="component__widget graphiccompare__widget" ref={widgetEl} >

        <div className='graphiccompare__container'>
          <div className='u-visibility-hidden'>
            <img
              className='u-visibility-hidden'
              src={_graphic1.src}
              aria-label="hidden graphic"
              aria-hidden="true"
              loading='eager'
            />
          </div>
          <div className='graphiccompare__image graphiccompare__image-1'>
            <img
              src={_graphic1.src}
              aria-label={a11y.normalize(_graphic1.alt)}
              aria-hidden={!_graphic1.alt}
              loading='eager'
            />
          </div>
          <div className='graphiccompare__image graphiccompare__image-2' style={{ width: _value + '%' }}>
            <img
              style={{ maxWidth: widgetEl.current ? widgetEl.current.offsetWidth : '100%' }}
              src={_graphic2.src}
              aria-label={a11y.normalize(_graphic2.alt)}
              aria-hidden={!_graphic2.alt}
              loading='eager'
            />
          </div>
          <label>
            <span className="aria-label">{compile(_globals._components?._graphicCompare?.ariaLabel)}</span>
            <input id={`graphiccompare-input-${_id}`}
              type="range"
              value={_value}
              aria-valuenow={_value}
              aria-valuetext={`${_value}%`}
              min="0"
              max="100"
              step="1"
              readOnly={true}
              onChange={onChange}/>
          </label>
        </div>

      </div>
    </div>

  );
}
