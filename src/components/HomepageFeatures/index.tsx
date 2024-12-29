import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Png: string; // Change Svg to Png (string for path to PNG file)
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Agil für das Ehrenamt',
        Png: require('@site/static/img/team.png').default,
        description: (
            <>
                Ein agiler Prozess, maßgeschneidert für die besonderen Anforderungen ehrenamtlicher Arbeit.
            </>
        ),
    },
    {
        title: 'Klarheit',
        Png: require('@site/static/img/done.png').default,
        description: (
            <>
                Struktur, Transparenz und Fairness bei der Aufgabenverteilung und -bearbeitung in Vereinen.
            </>
        ),
    },
    {
        title: 'Gemeinsam Ziele erreichen',
        Png: require('@site/static/img/ziele.png').default,
        description: (
            <>
                Effiziente Teamarbeit für eine stressfreie und termingerechte Zielerreichung.
            </>
        ),
    },
];

function Feature({ title, Png, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className="featureImg" src={Png} alt={title}/>
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