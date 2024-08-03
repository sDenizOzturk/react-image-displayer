/* eslint-disable @typescript-eslint/no-var-requires */
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built-in Spinners',
    Svg: require('@site/static/img/spinner.svg').default,
    description: (
      <>
        Display spinners using<code>React Spinners</code> library while image is
        loading.
      </>
    ),
  },
  {
    title: 'Enter Animations',
    Svg: require('@site/static/img/framer_motion.svg').default,
    description: (
      <>
        Cool enter animations using <code>Framer Motion</code> library.
      </>
    ),
  },
  {
    title: 'JWT Support',
    Svg: require('@site/static/img/jwt_token.svg').default,
    description: <>Display images that need JWT authentication.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
