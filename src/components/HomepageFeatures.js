import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Native speed',
    Svg: require('../../static/img/iconmonstr-time-19.svg').default,
    description: (
      <>
        The IFC.js parsing engine is based on WebAssembly and C++, 
        and is specifically designed to read data from large files as fast as a desktop application.
      </>
    ),
  },
  {
    title: 'Multi platform',
    Svg: require('../../static/img/iconmonstr-smartphone-16.svg').default,
    description: (
      <>
        IFC.js is compatible with any platform: web application (frontend and backend), 
        desktop applications (Windows, Mac and Linux) and mobile applications (Android and iOS).
      </>
    ),
  },
  {
    title: 'Plug and Play',
    Svg: require('../../static/img/iconmonstr-product-3.svg').default,
    description: (
      <>
        With IFC.js it is possible to create open BIM applications in less than 100 lines of JavaScript,
        without needing to know how the internals of the IFC schema work. 
        Focus your efforts on what brings value to your business.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('../../static/img/iconmonstr-paper-plane-2.svg').default,
    description: (
      <>
        An open BIM application created with IFC.js can weigh less than 1 MB. 
        This library allows the creation of web and native applications with
        almost no impact on the final weight of the application.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
