import React from 'react';
import CardComponent from './CardComponent';

const CardContainer: React.FC = () => {
  const cards = [
    {
      image: '/card1.jpeg',
      title: 'For Any Pooja',
      subtitle: 'This is the Pooja ',
    },
    {
      image: '/card2.jpeg',
      title: 'For Any Problems',
      subtitle: 'This is the Solution',
    },
    {
      image: '/card3.jpeg',
      title: 'For Ease ',
      subtitle: 'This is the Simple',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">There is always a occassion to celebrate</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:flex-wrap space-x-11">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
