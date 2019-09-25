import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';


export const FlashCardContext = createContext();

export const FlashCardProvider = props => {

    const { children } = props;

    const [ allDecks, setAllDecks ] = useState({
        decks: [
            {
                id: 1,
                initials: 'HH',
                username: 'Hunter Helmsley',
                topic: 'Japanese Kanji Numbers',
                category: ['Language', 'Japanese'],
                cards: [
                    {
                        id: 1,
                        front: `一`,
                        back: 'ichi, itsu'
                    },
                    {
                        id: 2,
                        front: '二',
                        back: 'ni'
                    },
                    {
                        id: 3,
                        front: '三',
                        back: 'san'
                    },
                    {
                        id: 4,
                        front: `四`,
                        back: 'shi'
                    },
                    {
                        id: 5,
                        front: '五',
                        back: 'go'
                    },
                    {
                        id: 6,
                        front: '六',
                        back: 'roku'
                    },
                    {
                        id: 7,
                        front: '七',
                        back: 'shichi'
                    },
                    {
                        id: 8,
                        front: '八',
                        back: 'hachi'
                    },
                    {
                        id: 9,
                        front: '九',
                        back: 'kyuu, ku'
                    },
                    {
                        id: 10,
                        front: '十',
                        back: 'juu, ji'
                    },
                    {
                        id: 11,
                        front: '百',
                        back: 'hyaku'
                    },
                    {
                        id: 12,
                        front: '千',
                        back: 'sen'
                    },
                    {
                        id: 13,
                        front: '万',
                        back: 'man, ban '
                    },
                    {
                        id: 14,
                        front: '円',
                        back: 'en'
                    }
                ]
            },
            {
                id: 2,
                initials: 'SJ',
                username: 'Souchi Joutaro',
                topic: 'Books',
                category: ['Entertainment', 'Books'],
                cards: [
                    {
                        id: 1,
                        front: 'George Orwell wrote this book, which is often considered a statement on government oversight.',
                        back: '1984'
                    },
                    {
                        id: 2,
                        front: 'Who wrote the novel Fear And Loathing In Las Vegas?',
                        back: 'Hunter S. Thompson'
                    },
                    {
                        id: 3,
                        front: 'Green Eggs And Ham is a book by which author?',
                        back: 'Dr. Seuss'
                    },
                    {
                        id: 4,
                        front: `What's Harry Potters' dads name?`,
                        back: 'James Potter'
                    },
                    {
                        id: 5,
                        front: 'Who wrote the young adult novel The Fault in Our Stars?',
                        back: 'John Green'
                    },
                    {
                        id: 6,
                        front: `What is the name of the three headed dog in Harry Potter and the Sorcerer's Stone?`,
                        back: 'Fluffy'
                    }
                ]
            },
            {
                id: 3,
                initials: 'SJ',
                username: 'Souchi Joutaro',
                topic: 'Science Trivia',
                category: ['Science', 'Nature'],
                cards: [
                {
                    id: 1,
                    front: `Which of the following bones is not in the leg?`,
                    back: 'Radius'
                },
                {
                    id: 2,
                    front: 'What name is given to all baby marsupials?',
                    back: 'Joey'
                },
                {
                    id: 3,
                    front: 'How many planets make up our Solar System?',
                    back: '8'
                },
                {
                    id: 4,
                    front: 'How many bones are in the human body?',
                    back: '206'
                },
                {
                    id: 5,
                    front: 'Who is the chemical element Curium named after?',
                    back: 'Marie Pierre Curie'
                },
                {
                    id: 6,
                    front: 'What is the standard atomic weight of a Plutonium nucleus?',
                    back: '244'
                }
                ]
            },
            {
                id: 4,
                initials: 'TB',
                username: 'Tammy Brown',
                topic: 'Computer Knowledge',
                category: ['Science', 'Computers'],
                cards: [
                    {
                        id: 1,
                        front: 'True Or False. The logo for Snapchat is a Bell.',
                        back: 'False'
                    },
                    {
                        id: 2,
                        front: 'True Or False. RAM stands for Random Access Memory.',
                        back: 'True'
                    },
                    {
                        id: 3,
                        front: 'How many kilobytes in one gigabyte?',
                        back: '1000000'
                    },
                    {
                        id: 4,
                        front: 'On Twitter, what is the character limit for a Tweet?',
                        back: '140'
                    },
                    {
                        id: 5,
                        front: 'True Or False. The Windows 7 operating system has six main editions.',
                        back: 'True'
                    },
                    {
                        id: 6,
                        front: 'True Or False. The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.',
                        back: 'False'
                    },
                    {
                        id: 7,
                        front: 'True Or False. Linux was first created as an alternative to Windows XP.',
                        back: 'False'
                    },
                    {
                        id: 8,
                        front: 'The C programming language was created by this American computer scientist. ',
                        back: 'Dennis Ritchie"'
                    }
                ]
            },
            {
                id: 5,
                initials: 'MH',
                username: 'Mad Hatter',
                topic: 'General Geography Knowledge',
                category: ['Geography'],
                cards: [
                    {
                        id: 1,
                        front: 'How many federal states does Germany have?',
                        back: '16'
                    },
                    {
                        id: 2,
                        front: 'What colour is the circle on the Japanese flag?',
                        back: 'Red'
                    },
                    {
                        id: 3,
                        front: 'What African country has Portuguese as its official language?',
                        back: 'Mozambique'
                    },
                    {
                        id: 4,
                        front: 'True or False. You could walk from Norway to North Korea while only passing through Russia.',
                        back: 'True'
                    },
                    {
                        id: 5,
                        front: 'What is the capital of Seychelles?',
                        back: 'Victoria'
                    },
                    {
                        id: 6,
                        front: 'What is the second-largest city in Lithuania?',
                        back: 'Kaunas'
                    }
                ]
            },
            {
                id: 6,
                initials: 'MH',
                username: 'Mad Hatter',
                topic: 'Korean Basic Greetings',
                category: ['Language', 'Korean'],
                cards: [
                    {
                        id: 1,
                        front: '안녕하세요',
                        back: 'How are you/Hello'
                    },
                    {
                        id: 2,
                        front: '별일 없지요 ?',
                        back: 'What’s new?'
                    },
                    {
                        id: 3,
                        front: '오랜만이다',
                        back: 'Long time no see'
                    },
                    {
                        id: 4,
                        front: '만나서 반갑습니다',
                        back: 'Nice to meet you'
                    },
                    {
                        id: 5,
                        front: '만나서 참 반가워요',
                        back: 'I am very happy to meet you'
                    }
                ]
            },    {
                id: 7,
                initials: 'LN',
                username: 'Leonard Nimoy',
                topic: 'Korean Basic & Polite Phrases',
                category: ['Language', 'Korean'],
                cards: [
                    {
                        id: 1,
                        front: '네',
                        back: 'Yes'
                    },
                    {
                        id: 2,
                        front: '아니요',
                        back: 'No'
                    },
                    {
                        id: 3,
                        front: '실례지만…',
                        back: 'Excuse me (to request something)'
                    },
                    {
                        id: 4,
                        front: '감사합니다',
                        back: 'Thank you    '
                    },
                    {
                        id: 5,
                        front: '천만 에 요',
                        back: 'You’re welcome / don’t mention it'
                    }
                ]
            },
            {
                id: 8,
                initials: 'LN',
                username: 'Leonard Nimoy',
                topic: 'Japanese Greetings for Everyday',
                category: ['Language', 'Japanese'],
                cards: [
                    {
                        id: 1,
                        front: 'おはようございます！',
                        back: 'Good Morning!'
                    },
                    {
                        id: 2,
                        front: 'こんにちは',
                        back: 'Hello / Good Afternoon'
                    },
                    {
                        id: 3,
                        front: 'あー、＿＿＿さん',
                        back: 'Ah, Mr./Mrs. __'
                    },
                    {
                        id: 4,
                        front: 'いい天気ですね！',
                        back: 'Good Weather, huh!'
                    },
                    {
                        id: 5,
                        front: '元気ですか ',
                        back: 'How are you?'
                    },
                    {
                        id: 6,
                        front: '久しぶり！',
                        back: 'Long Time, No See!'
                    },
                    {
                        id: 7,
                        front: 'こんばんは ',
                        back: 'Good Evening'
                    },
                    {
                        id: 8,
                        front: 'おやすみなさい',
                        back: 'Goodnight'
                    },
                    {
                        id: 9,
                        front: 'じゃまた',
                        back: 'See You Later / Goodbye'
                    },

                ]
            },
            {
                id: 9,
                initials: 'JJ',
                username: 'Jun Jie',
                topic: 'Basic Japanese Words and Phrases for All Situations',
                category: ['Language', 'Japanese'],
                cards: [
                    {
                        id: 1,
                        front: 'ありがとうございます ',
                        back: 'Thank You'
                    },
                    {
                        id: 2,
                        front: 'ごめんなさい',
                        back: 'I’m Sorry'
                    },
                    {
                        id: 3,
                        front: 'はい or うん',
                        back: 'Yes'
                    },
                    {
                        id: 4,
                        front: 'いいえ or ううん',
                        back: 'No'
                    },
                    {
                        id: 5,
                        front: '名前は___ ',
                        back: 'My name is ___'
                    },
                    {
                        id: 6,
                        front: '___ です。',
                        back: 'I am ___'
                    },
                    {
                        id: 7,
                        front: 'いいですよ。',
                        back: 'It’s Good.'
                    },
                    {
                        id: 8,
                        front: 'だめです。',
                        back: 'It’s Bad.'
                    },
                    {
                        id: 9,
                        front: 'もう一度お願いします',
                        back: 'Again, Please.'
                    },
                    {
                        id: 10,
                        front: 'ゆっくりお願いします',
                        back: 'More Slowly, Please.'
                    },

                ]
            },
            {
                id: 10,
                initials: 'JJ',
                username: 'Jun Jie',
                topic: 'Video Games Trivia',
                category: ['Entertainment', 'Video Games'],
                cards: [
                    {
                        id: 1,
                        front: `What is Solid Snake's real name?`,
                        back: 'David'
                    },
                    {
                        id: 2,
                        front: 'Who was the first jedi that Starkiller had to kill in Star Wars: The Force Unleashed?',
                        back: 'Rahm Kota'
                    },
                    {
                        id: 3,
                        front: 'What is the name of the virus in Metal Gear Solid 1?',
                        back: 'FOXDIE'
                    },
                    {
                        id: 4,
                        front: `When was Garry's Mod released?`,
                        back: 'December 24, 2004'
                    },
                    {
                        id: 5,
                        front: 'Which CS:GO eSports team won the major event ESL One Cologne 2016?',
                        back: 'SK Gaming'
                    },
                    {
                        id: 6,
                        front: 'In Monster Hunter Generations, name one of the monsters, part of the Fated Four?',
                        back: 'Astalos'
                    },
                    {
                        id: 7,
                        front: 'When was the game Roblox released?',
                        back: '2006'
                    },
                    {
                        id: 8,
                        front: 'Who is the English voice actor for Sora from the Kingdom Hearts series?',
                        back: 'Haley Joel Osment'
                    },
                    {
                        id: 9,
                        front: 'When was Club Penguin launched?',
                        back: 'October 24, 2005'
                    },
                    {
                        id: 10,
                        front: 'When was the video game publisher Ubisoft founded ?',
                        back: 'March 1986'
                    }
                ]
            },
        ]
    });
    const [ selectedDeck, setSelectedDeck ] = useState({
        selected: false,
        deckId: null,
        sDeck: {}
    });
    const [ selectedCard, setSelectedCard ] = useState({
        selected: false,
        deckId: null,
        cardId: null,
        sCard: {}
    });
    const [ isDeckCreated, setIsDeckCreated ] = useState(false);
    const [ isCardCreated, setIsCardCreated ] = useState(false);
    const [ auth, setAuth ] = useState(false);
    const [ newDeck, setNewDeck ] = useState({
        id: null,
        initials: null,
        username: null,
        topic: null,
        category: [],
        cards: []
    });
    const [ newCard, setNewCard ] = useState({
        id: null,
        front: null,
        back: null
    });
    return(
        <FlashCardContext.Provider value={[ [allDecks, setAllDecks], [ selectedDeck, setSelectedDeck ],[ selectedCard, setSelectedCard ], [isCardCreated, setIsCardCreated], [isDeckCreated, setIsDeckCreated], [ newDeck, setNewDeck ], [ newCard, setNewCard ] ]}>
            {children}
        </FlashCardContext.Provider>
    );
}


FlashCardProvider.propTypes = {
    children: PropTypes.node,
};