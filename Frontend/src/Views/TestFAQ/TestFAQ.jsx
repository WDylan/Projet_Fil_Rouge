import React from 'react'
import '../TestFAQ/TestFAQ.scss'
import { Fragment } from 'react';
import BannerTest from '../../component/BannerTest';
import AccordionFAQ from '../../component/AccordionFAQ';
import NavFAQ from '../../component/NavFAQ';
import Footer from '../../component/Footer';
import Loginscreen from '../LoginScreen/LoginScreen'

const str1 = "Netflix est un service de streaming qui propose une vaste sélection de séries,films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.\n\n Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !";

const str3 = "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.\n\n Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.";

const str6 = "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.\n\n Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.";

function TestFAQ() {
    const lines1 = str1.split(/\n/);
    const withBreaks1 = lines1.flatMap((line, index) =>
        index > 0
            ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
            : [line]
    );

    const lines3 = str3.split(/\n/);
    const withBreaks3 = lines3.flatMap((line, index) =>
        index > 0
            ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
            : [line]
    );

    const lines6 = str6.split(/\n/);
    const withBreaks6 = lines6.flatMap((line, index) =>
        index > 0
            ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
            : [line]
    );

    return (
        <div>
            <Loginscreen />
            <div className='separation1'> </div>
            <div className='FAQ_title'>Foire aux questions

            </div>
            <div className='accordions'>
                <AccordionFAQ
                    title="Netflix, qu'est-ce que c'est ?"
                    content={withBreaks1} />

                <AccordionFAQ
                    title="Combien coûte Netflix ?"
                    content="Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming,
        le tout pour un tarif mensuel fixe. Les forfaits vont de 8,99 € à 17,99 € par mois.
        Pas de contrat ni de frais supplémentaires." />

                <AccordionFAQ
                    title="Où puis-je regarder Netflix ?"
                    content={withBreaks3} />

                <AccordionFAQ
                    title="Comment puis-je annuler mon forfait ?"
                    content="Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement.
          Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment." />

                <AccordionFAQ
                    title="Que puis-je regarder sur Netflix ?"
                    content="Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés.
          Regardez Netflix à volonté, quand vous le voulez." />

                <AccordionFAQ
                    title="Est-ce que Netflix est adapté aux enfants ?"
                    content={withBreaks6} />
            </div>
            <div className='separation2'> </div>
            <Footer />

        </div>
    )
}

export default TestFAQ