const quizzes = [
    {
        id: "history-1",
        title: "History: 20th Century",
        description: "Test your knowledge with this 20th century themed quiz!",
        icon: "fas fa-landmark",
        questions: [
            {
                q: "In what year did World War One begin?",
                options: ["1914", "1915", "1916", "1917"],
                answer: 0,
                explanation: "The catalyst for the war was the assassination of Archduke Franz Ferdinand on 28th June 1914 in Sarajevo. "
            },
            {
                q: "Which treaty marked the end of World War 1?",
                options: ["The Treaty of Brest-Litovsk", "The Treaty of Versailles", "The Treaty of London", "The Locarno Pact"],
                answer: 1,
                explanation: "The Treaty was decided by the Big 3: Great Britain, France, and U.S.A and the terms imposed on Germany were seen as excessively harsh."
            },
            {
                q: "Which U.S President served into his 4th term - from 1933-1945?",
                options: ["Woodrow Wilson", "Franklin D Roosevelt", "Herbert Hoover", "Harry Truman"],
                answer: 1,
                explanation: "FDR served four presidential terms from March 4, 1933, until his death on April 12, 1945."
            },
            {
                q: "Which agreement saw Hitler ally with Stalin before World War 2 began?",
                options: ["The Non-Intervention Agreement", "The Nazi-Soviet Pact", "The Nuremberg Laws", "The Kellogg-Briand Pact"],
                answer: 1,
                explanation: "In 1939, Hitler and Stalin promised not to attack each other, not to support any third power that attacked either party, and to remain neutral"
            },
            {
                q: "Who was Hitler’s chief of propaganda?",
                options: ["Heinrich Himmler", "Rudolf Hess", "Albert Speer", "Joseph Goebbels"],
                answer: 3,
                explanation: "Appointed as the Reich Minister for Public Enlightenment and Propaganda on 13 March 1933, Goebbels was responsible for pushing the Nazi’s antsemetic messages."
            },
            {
                q: "What does Blitzkrieg mean?",
                options: ["Total War", "Lightning war", "War Communism", "People's community"],
                answer: 1,
                explanation: "Blitzkrieg was a fast-moving offensive military strategy used by Nazi Germany in the early years of World War II to achieve quick victories"
            },
            {
                q: "Why did Russia leave World War 1 in 1917?",
                options: ["Defeat at the Battle of Tannenberg", "Stalin came to power", "A Revolution occurred", "Rasputin was executed"],
                answer: 2,
                explanation: "In 1917, Russia had TWO revolutions - February and October. The October Revolution saw the Bolsheviks take power and consequently withdraw Russia from WW1."
            },
            {
                q: "When was the Cuban Missile Crisis?",
                options: ["1962", "1960", "1964", "1968"],
                answer: 0,
                explanation: "On October 27, 1962, the world nearly drifted into nuclear war. A U.S. U-2 spy plane was shot down over Cuba, and a Soviet B-59 submarine under depth-charge pressure nearly fired a nuclear torpedo,"
            },
            {
                q: "Who was the leader of the USSR when it fell in 1991?",
                options: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
                answer: 3,
                explanation: "Gorbachev presided over the end of the Soviet Union as his policies of Perestroika and Glasnost loosened Russian control over the Soviet States."
            },
            {
                q: "Which TWO countries never joined the League of Nations?",
                options: ["United States of America", "Great Britain", "Germany", "France", "Russia", "Japan", "Switzerland", "Italy"],
                answer: [0, 4],
                explanation: "63 countries joined the League of Nations to keep peace after WW1. The U.S.A never joined due to their policy of isolationism and Russia was never allowed to join because of their communist governments. Germany - initially banned - joined the League in 1926"
            }
        ]
    },

    {
        id: "history-2",
        title: "History: Pre-20th Century",
        description: "Test your knowledge with this Pre-20th century themed quiz!",
        icon: "fas fa-landmark",
        questions: [
            {
                q: "Who was the FIRST Tudor Monarch?",
                options: ["Henry VII", "Henry VIII", "Richard III", "Edward V"],
                answer: 0,
                explanation: "Henry Tudor defeated Richard III at the Battle of Bosworth in 1485 - ending the War of the Roses and establishing the Tudor dynasty. "
            },
            {
                q: "What is Mary 1 better known as?",
                options: ["Mary Queen of Scots", "Bloody Mary", "The Virgin Queen", "Mary of Orange"],
                answer: 1,
                explanation: "Mary I earned the moniker ‘Bloody Mary’ due to her persecution of Protestants in England and she tried to return England to Catholicism. "
            },
            {
                q: "In which year was the Spanish Armada",
                options: ["1568", "1578", "1588", "1598"],
                answer: 2,
                explanation: "The Spanish Armada was the most powerful force in the world at the time. Its defeat by the English was due to a series of bad weather, poor planning, and England’s superior naval tactics."
            },
            {
                q: "Which of these events is known as ‘The Great Matter’?",
                options: ["Elizabeth I’s refusal to marry", "Mary I’s marriage to the King of Spain", "Henry VIII attempts to divorce Catherine of Aragon", "The Pope’s decision to excommunicate Elizabeth I"],
                answer: 2,
                explanation: "Henry VIII tasked Wolsey with achieving a divorce from the Pope as Catherine was unable to give him a son. The matter eventually saw England break from the Church of Rome and establish the Church of England."
            },
            {
                q: "Who is the ONLY U.K monarch to be executed?",
                options: ["Henry VIII", "James I", "Charles I", "Edward VI"],
                answer: 2,
                explanation: "Charles I was executed in January 1649 on charges of High Treason. Charles I refused to speak at this trial as he saw it as illegitimate. "
            },
            {
                q: "Who ruled England during the English Interregnum (1649–1660)?",
                options: ["Thomas Cromwell", "Cardinal Wolsey", "Oliver Cromwell", "The Duke of Wellington"],
                answer: 2,
                explanation: "Oliver Cromwell became Lord Protector of England after refusing the title of King. His Puritan rule saw him ban things like Christmas celebrations and closing down pubs/taverns."
            },
            {
                q: "Who did Queen Victoria marry?",
                options: ["Prince Phillip", "Robert Dudley", "Prince Albert", "Robert Devereux"],
                answer: 1,
                explanation: "Victoria proposed to Albert on October 15, 1839, just five days after he visited Windsor Castle."
            },
            {
                q: "Which battle ended the War of the Roses?",
                options: ["The Battle of Hastings", "The Battle of Britain", "The Battle of Stamford Bridge", "The Battle of Bosworth"],
                answer: 3,
                explanation: "Richard III brutally died during the battle. Richard himself only became King due to the mysterious disappearance of his two nephews who were the rightful heirs."
            },
            {
                q: "What is William Wilberforce best known for?",
                options: ["being a famous explorer and navigating the globe", "advising King Henry VIII", "commanding troops during the Spanish Armada", "leading the movement to abolish the Atlantic slave trade"],
                answer: 3,
                explanation: "After years of introducing annual bills and delivering landmark speeches, he led the successful campaign to pass the Slave Trade Act 1807, which made the slave trade illegal in the British Empire."
            },
            {
                q: "Which significant event happened in 1605?",
                options: ["The Great Fire of London", "The Great Plague", "The Gunpowder Plot", "The English Civil War"],
                answer: 2,
                explanation: "The plot was designed to assassinate the Protestant King James I and restore a Catholic monarch to the English throne. Guy Fawkes was found in the cellar of Parliament with the gunpowder. He was later publicly hanged, drawn, and quartered."
            }
        ]
    },
    {
        id: "english-1",
        title: "English Literature",
        description: "Test your knowledge with this English Literature themed quiz!",
        icon: "fas fa-pen-nib",
        questions: [
            {
                q: "Who wrote the dystopian novel ‘1984’?",
                options: ["J.B Preistley", "Arthur Miller", "George Orwell", "Sir Arthur Conan Doyle"],
                answer: 2,
                explanation: "1984 was published in 1949 and became a major work of dystopian literature. It features iconic aspects of totalitarian rule such as: Big Brother and Room 101."
            },
            {
                q: "In which book would you find the characters ‘Piggy, Jack, and Ralph’?",
                options: ["Never Let Me Go", "Lord of the Flies", "Great Expectations", "Oliver Twist"],
                answer: 1,
                explanation: "Golding wrote Lord of the Flies after his experiences in WW2 and seeing the Nazi concentration camps. Golding wanted to explore the idea of evil being innately human."
            },
            {
                q: "Which Shakespeare play focuses on the murder of King Duncan?",
                options: ["Othello", "Hamlet", "The Tempest", "Macbeth"],
                answer: 3,
                explanation: "Shakespeare wrote the play to flatter King James I, who believed deeply in witchcraft, sponsored Shakespeare's company. The message is a warning about attempting to kill a King."
            },
            {
                q: "‘It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife’ is the opening line from which book?",
                options: ["Jane Eyre", "Wuthering Heights", "Silas Marner", "Pride and Prejudice"],
                answer: 3,
                explanation: "Jane Austen, the author, published anonymously - attributed to 'a lady' or 'the author of Sense and Sensibility' - rather than under her own name."
            },
            {
                q: "Who wrote the novel ‘Frankenstein’?",
                options: ["Mary Shelley", "Bram Stoker", "J.R.R Tolkien", "Jane Austen"],
                answer: 0,
                explanation: "Written as part of a ghost story contest with friends, the original title of the book was ‘The Modern Prometheus’."
            },
            {
                q: "Which poet wrote the poems ‘Remains’ and ‘Manhunt’?",
                options: ["Carol Anne Duffy", "William Blake", "Simon Armitage", "Jane Weir"],
                answer: 2,
                explanation: "Simon Armitage was appointed as the UK Poet Laureate on 10 May 2019, serving a fixed 10-year term running until 2029"
            },
            {
                q: "In ‘Animal Farm’, Napoleon and Snowball are which kind of animal?",
                options: ["Goats", "Sheep", "Pigs", "Horses"],
                answer: 2,
                explanation: "The novella is an allegory with each character representing a key figure from History. Snowball is Trotsky; Napoleon is Stalin, while Old Major is Lenin."
            },
            {
                q: "How many ghosts appear in ‘A Christmas Carol’?",
                options: ["One", "Two", "Three", "Four"],
                answer: 3,
                explanation: "Four ghosts appear - Jacob Marley, The Ghost of Christmas Past, The Ghost of Christmas Present, and the Ghost of Christmas Yet to Come. The novella is written in staves - not chapters - to mirror the ‘Carol’ element of the tale."
            },
            {
                q: "In which era did Charles Dickens write all of his works?",
                options: ["Victorian Era", "Edwardian Ero", "Jacobean Era", "Elizabethan Era"],
                answer: 0,
                explanation: "Writing between 1833-1870, at age 12, Dickens worked in a shoe polish factory after his father was sent to debtors' prison, an experience that heavily influenced his themes of child poverty and social injustice."
            },
            {
                q: "Which of these poetic forms is written in iambic pentametre?",
                options: ["Haiku", "Ode", "Sonnet", "Free verse"],
                answer: 2,
                explanation: "1 iamb is equal to 2 syllables (unstressed/stressed). The number of iambs in a line is the metre; so 5 iambs (pent) gives you the iambic pentameter."
            },
            {
                q: "What is a soliloquy?",
                options: ["Where the audience knows more than the character", "Contrasting two or more ideas", "Where a character speaks their thoughts aloud", "A repeated theme, symbol, or motif"],
                answer: 2,
                explanation: "Famous examples of soliloquies are Macbeth’s ‘is this a dagger’ speech and Hamlet’s ‘to be or not to be’."
            },
            {
                q: "What does an epistolary mean?",
                options: ["A Gothic work", "A ‘coming of age’ genre of fiction", "A story where the narrative voice changes", "A story told through a series of written letters"],
                answer: 3,
                explanation: "Some famous novels use this form of telling a story through letters. Most notably: Dracula, Frankenstein, and The Color Purple. "
            },
        ]
    },
    {
        id: "english-2",
        title: "English Language",
        description: "Test your knowledge with this English Language themed quiz!",
        icon: "fas fa-pen-nib",
        questions: [
            {
                q: "What is a metaphor?",
                options: ["Comparing two things using ‘like’ or ‘as’", "Describing something", "Comparing two things directly", "Contrasting two points or ideas"],
                answer: 2,
                explanation: ""
            },
            {
                q: "Which of these sets of words below does NOT contain subordinating conjunctions?",
                options: ["if, since, as", "but, and, so", "because, despite, once", "unless, until, although"],
                answer: 1,
                explanation: ""
            },
            {
                q: "Which sentence uses a semi colon correctly?",
                options: ["The cabin was still so far away; because we had been walking all day.", "The cabin was; dark, dingy and abandoned.", "The cabin was there; we could see its outline.", "The cabin; which was abandoned, looked eerie."],
                answer: 2,
                explanation: ""
            },
            {
                q: "What does juxtaposition do?",
                options: ["Compares two things using ‘like’ or ‘as’.", "Contrasting two things within the same text.", "Uses two words with opposite meanings next to each other.", "Contrasts and compares two things directly using ‘is’ or ‘was’"],
                answer: 1,
                explanation: ""
            },
            {
                q: "‘For a moment, he was still. Cautiously, the boy paced along the street, passing the rows upon rows of quaint and colourful houses. All the while, he thought to himself of the strange things that happened that morning’. How many VERBS are in the sentence above?",
                options: ["5", "4", "7", "8"],
                answer: 0,
                explanation: ""
            },
            {
                q: "Which of these is an example of personification?",
                options: ["Like bullets, the rain hit against the frosted window pane.", "Brilliant and vivid flashes of lightning shot across the sky.", "Outside, a feral wind howled and moaned.", "Above me, a deafening thunderclap began to boom."],
                answer: 2,
                explanation: ""
            },
            {
                q: "Which of the below is a COMPOUND sentence?",
                options: ["Despite the gloriously shining sun, a bitter chill hung in the air.", "Alex, who never left his house, took a small step outside.", "There was never any doubt in his mind, because there was only one option he could make.", "The sky was a fading orange, and the clouds had begun to disappear."],
                answer: 3,
                explanation: ""
            },
            {
                q: "Which of the sets of words below contains ABSTRACT nouns?",
                options: ["Happily, Bravely, Lovely", "Bright, Brave, Happy", "Brighter, Happier, Lovelier", "Happiness, Bravery, Love"],
                answer: 3,
                explanation: ""
            },
            {
                q: "Which of the following is NOT a type of repetition?",
                options: ["Anaphora", "Asyndetic", "Polysyndectic", "Anadiplosis"],
                answer: 1,
                explanation: ""
            },
            {
                q: "What does ‘connotation’ mean?",
                options: ["The literal meaning of a word.", "A colour or image used repeatedly.", "An idea or feeling that a word can evoke.", "It is the result of the writer using imagery."],
                answer: 2,
                explanation: ""
            },
            {
                q: "What is a semantic field?",
                options: ["A set of words all sharing the same meanings.", "A repeated idea or symbol in a text.", "Where the weather mirrors the emotion of a character.", "A reference to another literary work."],
                answer: 0,
                explanation: ""
            },
            {
                q: "‘But I blink and he burst through the doors of the bank’ is an example of what type of alliteration?",
                options: ["Sibilance", "Plosive", "Fricative", "Assonance"],
                answer: 1,
                explanation: ""
            },
        ]
    }
];


module.exports = quizzes;