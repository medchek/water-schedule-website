import { useState } from "react";
import FaqAccordionItem from "./FaqAccordionItem";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}
const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Y a-t-il une version iOS?",
    answer:
      "L'application n'est pas encore disponible sur iOS (pour iPhone), cepedant, une version iOS sera ajoutée si la demande des utilisateurs augemente.",
    isOpen: false,
  },
  {
    id: 2,
    question: "Le programme d'eau n'est pas disponible, que faire?",
    answer:
      "Les programmes d'eau sont ajoutés et mis à jours régulièrement par SEAAL, veuillez attendre jusqu'à ce que le programme soit ajouté pour votre commune par un membre de SEAAL.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Où est ce que je peux changer la langue de l'application?",
    answer:
      "La langue peut être changé en allant au paramètres de l'application (bouton haut à droite de l'écran) puis au paramètres de langues.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Le serveur est injoignable, que devrais-je faire?",
    answer:
      "Veuillez dabord vous assurer que votre téléphone est connecté à internet. Si c'est le cas, ce la signale que les serveurs sont actuellement injoignable pour des raison de maintenance ou à cause de difficultées techniques, veuillez réessayer votre requête ultérieurement.",
    isOpen: false,
  },
  {
    id: 5,
    question: "J'ai une question ou une suggestion, commet entrer en contacte?",
    answer: "Vous pouvez nous contacter par email sur contact@seaal.dz",
    isOpen: false,
  },
];

const FaqAccordion = () => {
  const [faqDataState, setFaqDataState] = useState<FaqItem[]>(faqData);

  const handleToggleOpenItem = (index: number) => {
    console.log("updating the state");
    const updatedState: FaqItem[] = faqDataState.map((item, i) =>
      i === index ? { ...item, isOpen: !item.isOpen } : item
    );
    setFaqDataState(updatedState);
  };

  const faqItems = faqDataState.map((faqItem, i) => (
    <FaqAccordionItem
      key={faqItem.id}
      question={faqItem.question}
      answer={faqItem.answer}
      isOpen={faqItem.isOpen}
      onClick={() => handleToggleOpenItem(i)}
    />
  ));

  return <div className="w-full space-y-9">{faqItems}</div>;
};

export default FaqAccordion;
