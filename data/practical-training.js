(function () {
  function lines(items) {
    return items.map(function (item) {
      return { speaker: item[0], text: item[1] };
    });
  }

  function practicalCard(card) {
    const versions = (card.versions || []).map(function (version) {
      return Object.assign({}, version, { lines: lines(version.lines || []) });
    });

    return Object.assign(
      {
        collection: "Practical Training",
        status: "scripted",
        length: "About 1 minute",
        dayType: "V2 Practical",
        mood: "Natural and practical",
        level: "V2 Practical",
        audio: false,
        usefulExpressions: [],
        variations: [],
        practiceTip: "Practice the Natural Dialogue first, then rotate through the variations until the situation feels flexible."
      },
      card,
      { versions: versions }
    );
  }

  // Add future situations by copying one practicalCards item and keeping the same pack/group.
  const practicalCards = [
    {
        "id": "A01",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / Before Class",
        "situation": "첫 수업 전 옆자리 클래스메이트와 인사",
        "person": "Classmate",
        "goal": "이름, 전공, 어디서 왔는지, 수업 기대감",
        "topics": [
            "이름, 전공, 어디서 왔는지, 수업 기대감"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Classmate",
                        "Hi, is this seat taken?"
                    ],
                    [
                        "You",
                        "No, go ahead. I'm Jongkuk, by the way."
                    ],
                    [
                        "Classmate",
                        "Nice to meet you. I'm Maya."
                    ],
                    [
                        "You",
                        "Nice to meet you too. Are you in the architecture PhD program?"
                    ],
                    [
                        "Classmate",
                        "I'm in urban studies, but I'm taking this class as an elective. What about you?"
                    ],
                    [
                        "You",
                        "I'm starting a PhD in architecture. I just moved here from Korea, so I'm still finding my rhythm."
                    ],
                    [
                        "Classmate",
                        "That's a big move. How are you feeling about the class?"
                    ],
                    [
                        "You",
                        "Excited, but a little nervous. I heard the readings can be pretty intense."
                    ],
                    [
                        "Classmate",
                        "They can be, but people usually help each other out."
                    ],
                    [
                        "You",
                        "That's good to hear. I may need that during the first few weeks."
                    ]
                ]
            },
            {
                "title": "Variation A - The classmate talks very fast",
                "lines": [
                    [
                        "Classmate",
                        "I'm in urban studies, taking this for the theory requirement. What about you?"
                    ],
                    [
                        "You",
                        "Sorry, could you say that one more time? I'm still warming up to classroom English."
                    ],
                    [
                        "Classmate",
                        "Of course. I'm in urban studies, and this class counts for my requirement."
                    ],
                    [
                        "You",
                        "Got it. Thanks. I'm starting architecture, so I'm still figuring out how everything connects."
                    ],
                    [
                        "Classmate",
                        "No worries. First week is always a blur."
                    ],
                    [
                        "You",
                        "That's exactly how it feels."
                    ]
                ]
            },
            {
                "title": "Variation B - You need to explain your background",
                "lines": [
                    [
                        "Classmate",
                        "Did you study architecture before this?"
                    ],
                    [
                        "You",
                        "Yes, but my path is a little mixed. I started in design, then moved more toward architecture and urban questions."
                    ],
                    [
                        "Classmate",
                        "That sounds useful for this class."
                    ],
                    [
                        "You",
                        "I hope so. I'm interested in how design ideas can work at a city scale."
                    ],
                    [
                        "Classmate",
                        "Nice. That's a good angle."
                    ],
                    [
                        "You",
                        "Thanks. I'm still practicing how to explain it naturally."
                    ]
                ]
            },
            {
                "title": "Variation C - The conversation starts to die",
                "lines": [
                    [
                        "Classmate",
                        "Yeah, I'm still waiting to see what this class is like."
                    ],
                    [
                        "You",
                        "Same here."
                    ],
                    [
                        "Classmate",
                        "..."
                    ],
                    [
                        "You",
                        "By the way, have you taken a class with this professor before?"
                    ],
                    [
                        "Classmate",
                        "I haven't, but I heard she's really good."
                    ],
                    [
                        "You",
                        "Good to know. I was looking for one normal question to keep the conversation alive."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Is this seat taken?",
            "I'm still warming up to classroom English.",
            "My path is a little mixed.",
            "I'm still figuring out how everything connects.",
            "Have you taken a class with this professor before?",
            "First week is always a blur."
        ]
    },
    {
        "id": "A02",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / After Class",
        "situation": "수업 끝나고 오늘 내용이 어려웠는지 이야기",
        "person": "Classmate",
        "goal": "리딩, 과제, 교수님 설명에 대한 반응",
        "topics": [
            "리딩, 과제, 교수님 설명에 대한 반응"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hey, what did you think of today's class?"
                    ],
                    [
                        "Classmate",
                        "Honestly, it was dense. The theory part moved pretty fast."
                    ],
                    [
                        "You",
                        "I'm glad you said that. I understood the main idea, but some examples were hard to follow."
                    ],
                    [
                        "Classmate",
                        "Same. I think the reading helped, but not enough."
                    ],
                    [
                        "You",
                        "Do we need to respond to today's reading before next class?"
                    ],
                    [
                        "Classmate",
                        "I think so. The professor mentioned a short reflection."
                    ],
                    [
                        "You",
                        "Right, I wasn't sure if that was required or just recommended."
                    ],
                    [
                        "Classmate",
                        "Required, I think. Maybe around 500 words."
                    ],
                    [
                        "You",
                        "Thanks. I'll double-check the syllabus when I get home."
                    ],
                    [
                        "Classmate",
                        "Good idea. If I find the exact instruction, I'll send it to you."
                    ]
                ]
            },
            {
                "title": "Variation A - You missed the assignment detail",
                "lines": [
                    [
                        "You",
                        "Did I hear correctly that we have a response due next week?"
                    ],
                    [
                        "Classmate",
                        "Yes, a short response to the reading."
                    ],
                    [
                        "You",
                        "Is it uploaded online, or do we bring it to class?"
                    ],
                    [
                        "Classmate",
                        "I think we upload it before class."
                    ],
                    [
                        "You",
                        "Thanks. I caught the topic but missed the format."
                    ],
                    [
                        "Classmate",
                        "Same thing happened to me last week."
                    ]
                ]
            },
            {
                "title": "Variation B - You want to admit it was hard",
                "lines": [
                    [
                        "Classmate",
                        "How did that lecture feel to you?"
                    ],
                    [
                        "You",
                        "Honestly, challenging. I understood the direction, but not every reference."
                    ],
                    [
                        "Classmate",
                        "Same. There were a lot of names."
                    ],
                    [
                        "You",
                        "Exactly. I may need to reread the slides slowly."
                    ],
                    [
                        "Classmate",
                        "Good idea. Want to compare notes later?"
                    ],
                    [
                        "You",
                        "That would help a lot."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask how others study",
                "lines": [
                    [
                        "You",
                        "Do people usually read everything before class, or focus on the main text?"
                    ],
                    [
                        "Classmate",
                        "Depends, but I try to read the main text carefully and skim the rest."
                    ],
                    [
                        "You",
                        "That's helpful. I was trying to read every word and got buried."
                    ],
                    [
                        "Classmate",
                        "Yeah, that can happen fast."
                    ],
                    [
                        "You",
                        "I need a smarter strategy."
                    ],
                    [
                        "Classmate",
                        "Start with the argument, then go back for details."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Did I hear correctly that...?",
            "I caught the topic but missed the format.",
            "I understood the direction, but not every reference.",
            "I may need to reread the slides slowly.",
            "I got buried in the reading.",
            "I need a smarter strategy."
        ]
    },
    {
        "id": "A03",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / Before Next Class",
        "situation": "다음 수업 전 리딩 자료 확인",
        "person": "Classmate",
        "goal": "어떤 챕터까지 읽어야 하는지, 같이 확인",
        "topics": [
            "어떤 챕터까지 읽어야 하는지, 같이 확인"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Quick question. Did you read chapter three or chapter four for today?"
                    ],
                    [
                        "Classmate",
                        "I read chapter three and the article on the course site."
                    ],
                    [
                        "You",
                        "Okay, good. I did the same, but then I saw chapter four listed somewhere."
                    ],
                    [
                        "Classmate",
                        "I saw that too. I think chapter four is for next week."
                    ],
                    [
                        "You",
                        "That makes sense. The schedule is a little confusing."
                    ],
                    [
                        "Classmate",
                        "Yeah, the professor updated it after the first class."
                    ],
                    [
                        "You",
                        "Do you mind if I compare notes with you before class starts?"
                    ],
                    [
                        "Classmate",
                        "Sure. I highlighted the main argument, but I'm not totally confident."
                    ],
                    [
                        "You",
                        "Same here. Let's at least make sure we have the basic structure."
                    ],
                    [
                        "Classmate",
                        "Deal. If we're both confused, that's useful information too."
                    ]
                ]
            },
            {
                "title": "Variation A - The syllabus changed",
                "lines": [
                    [
                        "You",
                        "Did the professor update the reading list?"
                    ],
                    [
                        "Classmate",
                        "Yeah, she posted a revised schedule last night."
                    ],
                    [
                        "You",
                        "That explains it. I was looking at the old version."
                    ],
                    [
                        "Classmate",
                        "The new one has the article and only part of chapter four."
                    ],
                    [
                        "You",
                        "Thanks. I'll download the revised one now."
                    ],
                    [
                        "Classmate",
                        "Good call. The old one is confusing."
                    ]
                ]
            },
            {
                "title": "Variation B - You did not finish the reading",
                "lines": [
                    [
                        "You",
                        "I finished the article, but not the whole chapter. Do you think I'll be okay?"
                    ],
                    [
                        "Classmate",
                        "Probably. The article seemed more important."
                    ],
                    [
                        "You",
                        "Good. I don't want to walk in completely lost."
                    ],
                    [
                        "Classmate",
                        "If the chapter comes up, just listen for the main terms."
                    ],
                    [
                        "You",
                        "That's a good plan. I'll review the conclusion quickly."
                    ],
                    [
                        "Classmate",
                        "That should help."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask to compare notes",
                "lines": [
                    [
                        "You",
                        "Do you have two minutes to compare the main argument?"
                    ],
                    [
                        "Classmate",
                        "Sure. I thought the author was arguing that infrastructure shapes social behavior."
                    ],
                    [
                        "You",
                        "That's what I got too, but I wasn't sure about the case study."
                    ],
                    [
                        "Classmate",
                        "The case study felt more like evidence than the main point."
                    ],
                    [
                        "You",
                        "That helps. I was giving it too much weight."
                    ],
                    [
                        "Classmate",
                        "Easy mistake. The article is dense."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Did the professor update the reading list?",
            "I was looking at the old version.",
            "I don't want to walk in completely lost.",
            "Do you have two minutes to compare the main argument?",
            "I was giving it too much weight.",
            "The article is dense."
        ]
    },
    {
        "id": "A04",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / During Class",
        "situation": "수업 중 못 알아들은 부분을 클래스메이트에게 묻기",
        "person": "Classmate",
        "goal": "\"아까 교수님이 뭐라고 하신 거야?\"",
        "topics": [
            "\"아까 교수님이 뭐라고 하신 거야?\""
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Sorry, what did the professor just say about the assignment?"
                    ],
                    [
                        "Classmate",
                        "She said we need to bring one site observation next week."
                    ],
                    [
                        "You",
                        "One site observation. Does that mean a photo, or a short written note?"
                    ],
                    [
                        "Classmate",
                        "I think both. A photo and a few sentences about what we noticed."
                    ],
                    [
                        "You",
                        "Got it. I missed the first part because she spoke really fast."
                    ],
                    [
                        "Classmate",
                        "No worries. She also said it doesn't have to be polished."
                    ],
                    [
                        "You",
                        "That's helpful. So the point is to observe, not to present a finished analysis."
                    ],
                    [
                        "Classmate",
                        "Exactly."
                    ],
                    [
                        "You",
                        "Thanks. I'll write that down before I forget."
                    ],
                    [
                        "Classmate",
                        "Good call. This class has a lot of tiny instructions."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask for a quick whisper clarification",
                "lines": [
                    [
                        "You",
                        "Sorry, did she say the example is optional?"
                    ],
                    [
                        "Classmate",
                        "No, the example is required. The diagram is optional."
                    ],
                    [
                        "You",
                        "Example required, diagram optional. Got it."
                    ],
                    [
                        "Classmate",
                        "Exactly."
                    ],
                    [
                        "You",
                        "Thanks. I don't want to interrupt the whole class."
                    ],
                    [
                        "Classmate",
                        "No problem."
                    ]
                ]
            },
            {
                "title": "Variation B - You misunderstood a term",
                "lines": [
                    [
                        "You",
                        "What does she mean by \"precedent\" here?"
                    ],
                    [
                        "Classmate",
                        "She means an existing project we can study as a reference."
                    ],
                    [
                        "You",
                        "Ah, not a legal precedent."
                    ],
                    [
                        "Classmate",
                        "Right, more like a design example."
                    ],
                    [
                        "You",
                        "That makes much more sense."
                    ],
                    [
                        "Classmate",
                        "Architecture vocabulary can be weird."
                    ]
                ]
            },
            {
                "title": "Variation C - You confirm after class instead",
                "lines": [
                    [
                        "You",
                        "Earlier, I didn't want to whisper too much, but what was the final instruction?"
                    ],
                    [
                        "Classmate",
                        "Bring one site photo and a short observation."
                    ],
                    [
                        "You",
                        "No drawing yet?"
                    ],
                    [
                        "Classmate",
                        "Not yet. Just observation."
                    ],
                    [
                        "You",
                        "Perfect. Thanks for saving me from overdoing it."
                    ],
                    [
                        "Classmate",
                        "That's usually my danger too."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Did she say the example is optional?",
            "I don't want to interrupt the whole class.",
            "What does she mean by...?",
            "More like a design example.",
            "Thanks for saving me from overdoing it.",
            "Just observation, no drawing yet."
        ]
    },
    {
        "id": "A05",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / Hallway",
        "situation": "점심이나 커피를 자연스럽게 제안",
        "person": "Classmate",
        "goal": "너무 부담스럽지 않게 친해지기",
        "topics": [
            "너무 부담스럽지 않게 친해지기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Are you heading somewhere right after this?"
                    ],
                    [
                        "Classmate",
                        "Not really. I have about an hour before my next meeting."
                    ],
                    [
                        "You",
                        "Same. I was thinking of grabbing coffee nearby. No pressure, but do you want to join?"
                    ],
                    [
                        "Classmate",
                        "Sure, that sounds nice."
                    ],
                    [
                        "You",
                        "Great. I still don't know the good spots around campus."
                    ],
                    [
                        "Classmate",
                        "There's a decent cafe two blocks away. It gets crowded, but the coffee is good."
                    ],
                    [
                        "You",
                        "Perfect. I mostly need caffeine and a place to decompress."
                    ],
                    [
                        "Classmate",
                        "After that class, same."
                    ],
                    [
                        "You",
                        "Also, if you're busy, we can just walk over together and split up."
                    ],
                    [
                        "Classmate",
                        "No, coffee works. Let's go."
                    ]
                ]
            },
            {
                "title": "Variation A - They are busy",
                "lines": [
                    [
                        "You",
                        "I was going to grab coffee nearby. Do you want to join?"
                    ],
                    [
                        "Classmate",
                        "I wish I could, but I have a meeting in ten minutes."
                    ],
                    [
                        "You",
                        "No worries at all. Maybe another time."
                    ],
                    [
                        "Classmate",
                        "Definitely. Next week could work."
                    ],
                    [
                        "You",
                        "Sounds good. I'll ask again after class."
                    ],
                    [
                        "Classmate",
                        "Please do."
                    ]
                ]
            },
            {
                "title": "Variation B - You suggest a low-pressure lunch",
                "lines": [
                    [
                        "You",
                        "I'm thinking of getting a quick lunch before going back to studio."
                    ],
                    [
                        "Classmate",
                        "I could eat. Where were you thinking?"
                    ],
                    [
                        "You",
                        "Nothing fancy. Maybe the campus cafe?"
                    ],
                    [
                        "Classmate",
                        "That works."
                    ],
                    [
                        "You",
                        "Great. I didn't want to make it a big plan."
                    ],
                    [
                        "Classmate",
                        "Quick lunch is perfect."
                    ]
                ]
            },
            {
                "title": "Variation C - You invite a small group",
                "lines": [
                    [
                        "You",
                        "A few of us are getting coffee. Do you want to come with us?"
                    ],
                    [
                        "Classmate",
                        "Sure. Who's going?"
                    ],
                    [
                        "You",
                        "Maya and Daniel from our table."
                    ],
                    [
                        "Classmate",
                        "Nice, I haven't talked to them yet."
                    ],
                    [
                        "You",
                        "Same. I figured a small group would feel easier."
                    ],
                    [
                        "Classmate",
                        "Good idea. Let's go."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Do you want to join?",
            "No worries at all.",
            "Maybe another time.",
            "Nothing fancy.",
            "I didn't want to make it a big plan.",
            "A small group would feel easier."
        ]
    },
    {
        "id": "A06",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / Casual Conversation",
        "situation": "한국에서 온 배경과 전공 전환 이야기",
        "person": "Classmate",
        "goal": "디자인, 건축, 박사과정으로 이어진 배경 설명",
        "topics": [
            "디자인, 건축, 박사과정으로 이어진 배경 설명"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Classmate",
                        "So what did you do before coming here?"
                    ],
                    [
                        "You",
                        "My background is a mix of design, architecture, and urban research."
                    ],
                    [
                        "Classmate",
                        "That's interesting. Were you always planning to do a PhD?"
                    ],
                    [
                        "You",
                        "Not at first. I started more from design practice, but I became interested in bigger spatial systems."
                    ],
                    [
                        "Classmate",
                        "Like buildings and cities together?"
                    ],
                    [
                        "You",
                        "Exactly. I'm interested in how architecture can respond to unused urban spaces and changing lifestyles."
                    ],
                    [
                        "Classmate",
                        "That sounds very relevant here."
                    ],
                    [
                        "You",
                        "I hope so. I'm still learning how to explain it clearly in English."
                    ],
                    [
                        "Classmate",
                        "It made sense to me."
                    ],
                    [
                        "You",
                        "Thanks. That's encouraging. I'm trying to make it less like a formal statement and more like a real conversation."
                    ]
                ]
            },
            {
                "title": "Variation A - Someone asks why Boston",
                "lines": [
                    [
                        "Classmate",
                        "Why did you choose Boston?"
                    ],
                    [
                        "You",
                        "Partly because of the academic environment, and partly because Boston is a great city to study architecture and urban life."
                    ],
                    [
                        "Classmate",
                        "That makes sense."
                    ],
                    [
                        "You",
                        "It has old infrastructure, universities, housing pressure, and a lot of public space questions."
                    ],
                    [
                        "Classmate",
                        "Sounds like your research has a lot to work with."
                    ],
                    [
                        "You",
                        "Exactly. That's what I'm hoping."
                    ]
                ]
            },
            {
                "title": "Variation B - You simplify your research",
                "lines": [
                    [
                        "Classmate",
                        "What is your research about, in simple terms?"
                    ],
                    [
                        "You",
                        "I'm interested in how small unused spaces in cities can become useful again."
                    ],
                    [
                        "Classmate",
                        "Like empty lots?"
                    ],
                    [
                        "You",
                        "Yes, but also leftover spaces near transit, buildings, or infrastructure."
                    ],
                    [
                        "Classmate",
                        "And architecture helps activate them?"
                    ],
                    [
                        "You",
                        "That's the idea. I'm exploring flexible systems for that."
                    ]
                ]
            },
            {
                "title": "Variation C - You talk about English confidence",
                "lines": [
                    [
                        "Classmate",
                        "Your English is good. Why do you seem worried?"
                    ],
                    [
                        "You",
                        "Thanks. Everyday conversation is okay, but academic discussion still feels fast."
                    ],
                    [
                        "Classmate",
                        "That makes sense. It is fast even for native speakers."
                    ],
                    [
                        "You",
                        "That's comforting to hear."
                    ],
                    [
                        "Classmate",
                        "You'll get used to the rhythm."
                    ],
                    [
                        "You",
                        "I hope so. I'm trying to practice without freezing."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Boston is a great city to study architecture and urban life.",
            "In simple terms...",
            "Small unused spaces in cities.",
            "Leftover spaces near transit or infrastructure.",
            "Academic discussion still feels fast.",
            "I'm trying to practice without freezing."
        ]
    },
    {
        "id": "A07",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Classroom / Before & After Class",
        "place": "Classroom / Study Plan",
        "situation": "연락처 교환 / 스터디 제안",
        "person": "Classmate",
        "goal": "다음 과제나 리딩을 같이 보기",
        "topics": [
            "다음 과제나 리딩을 같이 보기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Before we go, would you be open to exchanging numbers?"
                    ],
                    [
                        "Classmate",
                        "Yeah, definitely."
                    ],
                    [
                        "You",
                        "Great. I thought it might be helpful to check readings or assignments together sometimes."
                    ],
                    [
                        "Classmate",
                        "I agree. This class seems like the kind where small details matter."
                    ],
                    [
                        "You",
                        "Exactly. I don't want to miss something just because I misunderstood one sentence."
                    ],
                    [
                        "Classmate",
                        "Same here. Do you use WhatsApp, text, or something else?"
                    ],
                    [
                        "You",
                        "Text is easiest for me, but WhatsApp works too."
                    ],
                    [
                        "Classmate",
                        "Let's do text for now."
                    ],
                    [
                        "You",
                        "Perfect. Maybe before next week's class, we can compare notes for ten minutes."
                    ],
                    [
                        "Classmate",
                        "Sounds good. Send me your number."
                    ]
                ]
            },
            {
                "title": "Variation A - You suggest a reading check-in",
                "lines": [
                    [
                        "You",
                        "Would you be interested in a quick reading check-in before class next week?"
                    ],
                    [
                        "Classmate",
                        "Yeah, that could be useful."
                    ],
                    [
                        "You",
                        "Nothing formal. Maybe ten minutes just to compare the main points."
                    ],
                    [
                        "Classmate",
                        "I like that."
                    ],
                    [
                        "You",
                        "Great. If either of us is lost, at least we'll know before class starts."
                    ],
                    [
                        "Classmate",
                        "Exactly."
                    ]
                ]
            },
            {
                "title": "Variation B - They prefer email",
                "lines": [
                    [
                        "You",
                        "What's the easiest way to stay in touch?"
                    ],
                    [
                        "Classmate",
                        "Email is probably best for me."
                    ],
                    [
                        "You",
                        "Works for me. I'll send you a short message so you have my contact."
                    ],
                    [
                        "Classmate",
                        "Perfect."
                    ],
                    [
                        "You",
                        "And if you ever want to compare notes, just let me know."
                    ],
                    [
                        "Classmate",
                        "Same to you."
                    ]
                ]
            },
            {
                "title": "Variation C - You start a small group chat",
                "lines": [
                    [
                        "You",
                        "Do you think a small group chat would be helpful for this class?"
                    ],
                    [
                        "Classmate",
                        "Probably, especially for assignment reminders."
                    ],
                    [
                        "You",
                        "I can start one if people are okay with it."
                    ],
                    [
                        "Classmate",
                        "Good idea. Keep it small at first."
                    ],
                    [
                        "You",
                        "Agreed. Just the people at our table for now."
                    ],
                    [
                        "Classmate",
                        "That sounds manageable."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Would you be interested in...?",
            "Nothing formal.",
            "Just to compare the main points.",
            "What's the easiest way to stay in touch?",
            "I can start one if people are okay with it.",
            "Keep it small at first."
        ]
    },
    {
        "id": "B01",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Project Introduction",
        "situation": "내 프로젝트를 짧게 소개",
        "person": "Critic",
        "goal": "사이트, 문제의식, 디자인 방향",
        "topics": [
            "사이트, 문제의식, 디자인 방향"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "My project looks at small underused spaces near transit corridors."
                    ],
                    [
                        "Critic",
                        "What kind of underused spaces?"
                    ],
                    [
                        "You",
                        "Places that are not empty enough to become major developments, but still have social and spatial potential."
                    ],
                    [
                        "Critic",
                        "And what are you proposing?"
                    ],
                    [
                        "You",
                        "I'm exploring a modular system that can support temporary learning, working, and community uses."
                    ],
                    [
                        "Critic",
                        "Why modular?"
                    ],
                    [
                        "You",
                        "Because the sites are irregular and the needs may change over time. I don't want the design to feel too fixed."
                    ],
                    [
                        "Critic",
                        "So flexibility is part of the argument."
                    ],
                    [
                        "You",
                        "Yes. The project is less about one final object and more about a system that can adapt to different urban conditions."
                    ],
                    [
                        "Critic",
                        "That's a clear starting point."
                    ]
                ]
            },
            {
                "title": "Variation A - You explain it to a non-architecture student",
                "lines": [
                    [
                        "Student",
                        "I'm not in architecture, so can you explain it simply?"
                    ],
                    [
                        "You",
                        "Sure. I'm looking at small spaces in the city that people usually ignore."
                    ],
                    [
                        "Student",
                        "And you want to build something there?"
                    ],
                    [
                        "You",
                        "Maybe, but not one big building. More like flexible pieces that can support different activities."
                    ],
                    [
                        "Student",
                        "So it's about making overlooked places useful."
                    ],
                    [
                        "You",
                        "Exactly. That's the simple version."
                    ]
                ]
            },
            {
                "title": "Variation B - The critic asks for one sentence",
                "lines": [
                    [
                        "Critic",
                        "Can you say the project in one sentence?"
                    ],
                    [
                        "You",
                        "It's a modular system for activating underused urban spaces without turning them into permanent developments."
                    ],
                    [
                        "Critic",
                        "Good. That's clearer."
                    ],
                    [
                        "You",
                        "I need to keep that sentence in mind while drawing."
                    ],
                    [
                        "Critic",
                        "Yes, because the drawings should serve that idea."
                    ],
                    [
                        "You",
                        "Right. Otherwise the system starts to look generic."
                    ]
                ]
            },
            {
                "title": "Variation C - You forgot a word",
                "lines": [
                    [
                        "You",
                        "The project focuses on... sorry, I'm missing the word. Spaces that are not fully used."
                    ],
                    [
                        "Critic",
                        "Underused?"
                    ],
                    [
                        "You",
                        "Yes, underused spaces. Thank you."
                    ],
                    [
                        "Critic",
                        "No problem. Go on."
                    ],
                    [
                        "You",
                        "I'm testing how modular elements could make those spaces more active."
                    ],
                    [
                        "Critic",
                        "Good recovery."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Can you explain it simply?",
            "Small spaces in the city that people usually ignore.",
            "More like flexible pieces.",
            "Can you say the project in one sentence?",
            "The drawings should serve that idea.",
            "Sorry, I'm missing the word."
        ]
    },
    {
        "id": "B02",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Critique",
        "situation": "교수님이 \"왜 이 사이트인가?\"라고 질문",
        "person": "Professor",
        "goal": "선택 이유, 도시적 맥락 설명",
        "topics": [
            "선택 이유, 도시적 맥락 설명"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Professor",
                        "Why did you choose this particular site?"
                    ],
                    [
                        "You",
                        "I chose it because it sits between several active systems, but it doesn't really belong to any of them."
                    ],
                    [
                        "Professor",
                        "Can you be more specific?"
                    ],
                    [
                        "You",
                        "It's close to transit, housing, and small businesses, but the space itself is treated mostly as leftover infrastructure."
                    ],
                    [
                        "Professor",
                        "So the site has visibility but not identity."
                    ],
                    [
                        "You",
                        "Yes, that's exactly the tension I'm interested in."
                    ],
                    [
                        "Professor",
                        "What makes it worth intervening there?"
                    ],
                    [
                        "You",
                        "I think a small intervention could test how unused urban space can support everyday public life without requiring a huge redevelopment."
                    ],
                    [
                        "Professor",
                        "Good. Then make sure your drawings show that urban pressure clearly."
                    ],
                    [
                        "You",
                        "I will. I need to make the surrounding relationships more visible."
                    ]
                ]
            },
            {
                "title": "Variation A - They question the site choice",
                "lines": [
                    [
                        "Professor",
                        "Why this site and not another leftover space?"
                    ],
                    [
                        "You",
                        "This site has a mix of transit, housing, and informal pedestrian movement."
                    ],
                    [
                        "Professor",
                        "But many sites have that."
                    ],
                    [
                        "You",
                        "True. What makes this one interesting is the conflict between visibility and neglect."
                    ],
                    [
                        "Professor",
                        "Say more about that in your presentation."
                    ],
                    [
                        "You",
                        "I will. That may be the strongest site argument."
                    ]
                ]
            },
            {
                "title": "Variation B - You need to admit the analysis is incomplete",
                "lines": [
                    [
                        "Professor",
                        "Your site analysis feels thin."
                    ],
                    [
                        "You",
                        "I agree. Right now, I have observations, but not enough evidence."
                    ],
                    [
                        "Professor",
                        "What evidence do you need?"
                    ],
                    [
                        "You",
                        "More pedestrian patterns, edge conditions, and maybe a few short interviews."
                    ],
                    [
                        "Professor",
                        "Good. Be specific."
                    ],
                    [
                        "You",
                        "I'll turn the analysis into a checklist for the next visit."
                    ]
                ]
            },
            {
                "title": "Variation C - A classmate asks about the neighborhood",
                "lines": [
                    [
                        "Classmate",
                        "How does the neighborhood use the site now?"
                    ],
                    [
                        "You",
                        "Mostly as a pass-through space. People cross it, but they don't stay."
                    ],
                    [
                        "Classmate",
                        "Is that a problem?"
                    ],
                    [
                        "You",
                        "Not always. But I think the site could support short pauses without forcing a big program."
                    ],
                    [
                        "Classmate",
                        "That distinction helps."
                    ],
                    [
                        "You",
                        "Thanks. I should make that clearer."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "The conflict between visibility and neglect.",
            "I have observations, but not enough evidence.",
            "What evidence do you need?",
            "Mostly as a pass-through space.",
            "People cross it, but they don't stay.",
            "The site could support short pauses."
        ]
    },
    {
        "id": "B03",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Peer Feedback",
        "situation": "동료가 내 디자인을 잘못 이해함",
        "person": "Classmate",
        "goal": "방어적이지 않게 의도 설명",
        "topics": [
            "방어적이지 않게 의도 설명"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Classmate",
                        "So is your project basically a pop-up market?"
                    ],
                    [
                        "You",
                        "It could include that, but that's not the main idea."
                    ],
                    [
                        "Classmate",
                        "Oh, I thought the modules were for retail."
                    ],
                    [
                        "You",
                        "I can see why it looks that way. I need to clarify the program better."
                    ],
                    [
                        "Classmate",
                        "What are you imagining instead?"
                    ],
                    [
                        "You",
                        "More of a flexible civic platform. It could host workshops, small classes, community meetings, or informal workspaces."
                    ],
                    [
                        "Classmate",
                        "So the market is just one possible use."
                    ],
                    [
                        "You",
                        "Exactly. I don't want it to be read only as a commercial space."
                    ],
                    [
                        "Classmate",
                        "Then maybe your diagrams should separate possible uses from the core system."
                    ],
                    [
                        "You",
                        "That's helpful. I think that would make the intention much clearer."
                    ]
                ]
            },
            {
                "title": "Variation A - Someone thinks it is only commercial",
                "lines": [
                    [
                        "Classmate",
                        "It reads like a retail pavilion to me."
                    ],
                    [
                        "You",
                        "That's useful to hear. I don't want it to feel only commercial."
                    ],
                    [
                        "Classmate",
                        "The small units look like shops."
                    ],
                    [
                        "You",
                        "Right. I may need to show non-commercial programs more clearly."
                    ],
                    [
                        "Classmate",
                        "Workshops or study rooms maybe?"
                    ],
                    [
                        "You",
                        "Exactly. I'll add those scenarios."
                    ]
                ]
            },
            {
                "title": "Variation B - You avoid sounding defensive",
                "lines": [
                    [
                        "Classmate",
                        "I don't really understand the system."
                    ],
                    [
                        "You",
                        "That's fair. If it isn't clear, that's on the drawings."
                    ],
                    [
                        "Classmate",
                        "I think the pieces need a hierarchy."
                    ],
                    [
                        "You",
                        "I agree. I was treating everything equally, and that may be confusing."
                    ],
                    [
                        "Classmate",
                        "A primary structure could help."
                    ],
                    [
                        "You",
                        "Good point. I'll test that."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask what they saw first",
                "lines": [
                    [
                        "You",
                        "Can I ask what you noticed first when you looked at it?"
                    ],
                    [
                        "Classmate",
                        "The repeated modules."
                    ],
                    [
                        "You",
                        "Not the public space?"
                    ],
                    [
                        "Classmate",
                        "Not really. The modules dominate."
                    ],
                    [
                        "You",
                        "That's helpful. I need the ground condition to read more strongly."
                    ],
                    [
                        "Classmate",
                        "Maybe make the public sequence darker or more diagrammatic."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "It reads like...",
            "That's useful to hear.",
            "I don't want it to feel only commercial.",
            "If it isn't clear, that's on the drawings.",
            "Can I ask what you noticed first?",
            "The modules dominate."
        ]
    },
    {
        "id": "B04",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Strong Critique",
        "situation": "강한 크리틱을 받음",
        "person": "Critic",
        "goal": "받아들이면서도 핵심 의도 유지",
        "topics": [
            "받아들이면서도 핵심 의도 유지"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Critic",
                        "Right now, the project feels too generic. I don't see why it belongs to this site."
                    ],
                    [
                        "You",
                        "I understand. I think the system is clearer than the site response at this point."
                    ],
                    [
                        "Critic",
                        "The modules could be anywhere."
                    ],
                    [
                        "You",
                        "That's fair. My intention was adaptability, but I may have pushed it too far away from the specific context."
                    ],
                    [
                        "Critic",
                        "What would make it more grounded?"
                    ],
                    [
                        "You",
                        "I need to connect the module sizes, access points, and public edges more directly to the site's actual conditions."
                    ],
                    [
                        "Critic",
                        "Good. Don't abandon the system, but make it earn its place."
                    ],
                    [
                        "You",
                        "That's helpful. I want to keep the flexible logic, but tie each decision to a site condition."
                    ],
                    [
                        "Critic",
                        "Then show that in the next iteration."
                    ],
                    [
                        "You",
                        "I will. Thank you."
                    ]
                ]
            },
            {
                "title": "Variation A - You need a moment to respond",
                "lines": [
                    [
                        "Critic",
                        "I don't think the project is working yet."
                    ],
                    [
                        "You",
                        "I appreciate the honesty. Can I take a second to think through your point?"
                    ],
                    [
                        "Critic",
                        "Of course."
                    ],
                    [
                        "You",
                        "I think you're saying the system is too detached from the site."
                    ],
                    [
                        "Critic",
                        "Yes."
                    ],
                    [
                        "You",
                        "Then my next step should be making every module respond to a specific condition."
                    ]
                ]
            },
            {
                "title": "Variation B - You protect the core idea",
                "lines": [
                    [
                        "Critic",
                        "Maybe you should drop the modular system."
                    ],
                    [
                        "You",
                        "I understand why it feels weak right now, but I still think the system is the core of the project."
                    ],
                    [
                        "Critic",
                        "Then it has to do more work."
                    ],
                    [
                        "You",
                        "Agreed. It needs to respond to access, scale, and program, not just repeat itself."
                    ],
                    [
                        "Critic",
                        "That's the challenge."
                    ],
                    [
                        "You",
                        "I'll focus the next iteration on that."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask for a concrete next step",
                "lines": [
                    [
                        "You",
                        "If I only have time to fix one thing before next week, what should it be?"
                    ],
                    [
                        "Critic",
                        "The site section."
                    ],
                    [
                        "You",
                        "Because it can show ground, access, and program together?"
                    ],
                    [
                        "Critic",
                        "Exactly."
                    ],
                    [
                        "You",
                        "That helps. I'll prioritize one strong section over many unfinished diagrams."
                    ],
                    [
                        "Critic",
                        "Good decision."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I appreciate the honesty.",
            "Can I take a second to think through your point?",
            "The system is too detached from the site.",
            "I still think the system is the core.",
            "It has to do more work.",
            "What should I fix first?"
        ]
    },
    {
        "id": "B05",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Work In Progress",
        "situation": "아직 결정하지 못한 부분 설명",
        "person": "Professor",
        "goal": "미완성 상태를 자연스럽게 말하기",
        "topics": [
            "미완성 상태를 자연스럽게 말하기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Professor",
                        "What are you still unsure about?"
                    ],
                    [
                        "You",
                        "The main thing is the relationship between the public ground level and the upper modules."
                    ],
                    [
                        "Professor",
                        "Why is that unresolved?"
                    ],
                    [
                        "You",
                        "If I make the ground too open, the project loses program. If I make it too programmed, it loses publicness."
                    ],
                    [
                        "Professor",
                        "That's a productive problem."
                    ],
                    [
                        "You",
                        "I think so, but I haven't found the right balance yet."
                    ],
                    [
                        "Professor",
                        "What options are you testing?"
                    ],
                    [
                        "You",
                        "One version keeps the ground mostly open, and another creates small enclosed rooms along the edge."
                    ],
                    [
                        "Professor",
                        "Bring both next time. Don't decide too early."
                    ],
                    [
                        "You",
                        "That helps. I'll present them as alternatives instead of pretending one is finished."
                    ]
                ]
            },
            {
                "title": "Variation A - You show two options",
                "lines": [
                    [
                        "Professor",
                        "Which version do you prefer?"
                    ],
                    [
                        "You",
                        "I'm not ready to choose yet. Version one is more public, and version two is more controlled."
                    ],
                    [
                        "Professor",
                        "What are you testing between them?"
                    ],
                    [
                        "You",
                        "The balance between openness and program."
                    ],
                    [
                        "Professor",
                        "Then present them as a comparison."
                    ],
                    [
                        "You",
                        "That makes sense. I can make the trade-off explicit."
                    ]
                ]
            },
            {
                "title": "Variation B - You admit the drawing is rough",
                "lines": [
                    [
                        "You",
                        "This drawing is still rough, but it shows the question I'm working through."
                    ],
                    [
                        "Professor",
                        "That's fine. What's the question?"
                    ],
                    [
                        "You",
                        "Whether the upper modules should feel independent or connected to the ground."
                    ],
                    [
                        "Professor",
                        "Good. The roughness is okay if the question is clear."
                    ],
                    [
                        "You",
                        "That's helpful. I was worried it looked unfinished."
                    ],
                    [
                        "Professor",
                        "It is unfinished, but productively."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask for decision criteria",
                "lines": [
                    [
                        "You",
                        "How should I decide between these options?"
                    ],
                    [
                        "Professor",
                        "Decide what the project values most."
                    ],
                    [
                        "You",
                        "Public access, adaptability, and a strong relationship to the site."
                    ],
                    [
                        "Professor",
                        "Then judge each option against those three."
                    ],
                    [
                        "You",
                        "That's useful. I need criteria, not just preference."
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I'm not ready to choose yet.",
            "The balance between openness and program.",
            "This drawing is still rough.",
            "It shows the question I'm working through.",
            "I need criteria, not just preference.",
            "Judge each option against those three."
        ]
    },
    {
        "id": "B06",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Seminar / Asking A Question",
        "situation": "다른 학생 발표에 질문하기",
        "person": "Presenter",
        "goal": "공격적이지 않게 질문",
        "topics": [
            "공격적이지 않게 질문"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "I have a question about your site analysis."
                    ],
                    [
                        "Presenter",
                        "Sure."
                    ],
                    [
                        "You",
                        "You mentioned that the area feels disconnected from the neighborhood. Do you mean physically disconnected, socially disconnected, or both?"
                    ],
                    [
                        "Presenter",
                        "Mostly physically, because of the road."
                    ],
                    [
                        "You",
                        "That makes sense. I was wondering because some of your photos also show people using the edge informally."
                    ],
                    [
                        "Presenter",
                        "Right, that's something I'm still trying to understand."
                    ],
                    [
                        "You",
                        "Maybe that informal use could become part of your argument."
                    ],
                    [
                        "Presenter",
                        "That's a good point."
                    ],
                    [
                        "You",
                        "I don't mean it as a criticism. I just thought that tension was interesting."
                    ],
                    [
                        "Presenter",
                        "No, it's helpful. Thanks."
                    ]
                ]
            },
            {
                "title": "Variation A - You soften the question",
                "lines": [
                    [
                        "You",
                        "This may be more of a clarification than a critique."
                    ],
                    [
                        "Presenter",
                        "Sure, go ahead."
                    ],
                    [
                        "You",
                        "When you say the site is isolated, are you referring to physical access or social perception?"
                    ],
                    [
                        "Presenter",
                        "Mostly social perception."
                    ],
                    [
                        "You",
                        "That's helpful. Then maybe the photos of informal use become really important."
                    ],
                    [
                        "Presenter",
                        "Good point."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask after class",
                "lines": [
                    [
                        "You",
                        "I liked your presentation. Can I ask one quick follow-up?"
                    ],
                    [
                        "Presenter",
                        "Of course."
                    ],
                    [
                        "You",
                        "How did you choose the boundary of your site?"
                    ],
                    [
                        "Presenter",
                        "Mostly by walking routes."
                    ],
                    [
                        "You",
                        "Interesting. I was wondering because your project seems to extend beyond the official lot."
                    ],
                    [
                        "Presenter",
                        "Yeah, that's something I need to define better."
                    ]
                ]
            },
            {
                "title": "Variation C - You connect it to your own project",
                "lines": [
                    [
                        "You",
                        "Your project made me think about something in my own site."
                    ],
                    [
                        "Presenter",
                        "Oh really?"
                    ],
                    [
                        "You",
                        "Yes, the way people use the edge informally. Did you map that from observation?"
                    ],
                    [
                        "Presenter",
                        "Mostly from photos and a few visits."
                    ],
                    [
                        "You",
                        "That's helpful. I may need to do the same."
                    ],
                    [
                        "Presenter",
                        "Definitely. It changes how you read the site."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "This may be more of a clarification than a critique.",
            "Are you referring to...?",
            "Can I ask one quick follow-up?",
            "How did you choose the boundary?",
            "It seems to extend beyond the official lot.",
            "It changes how you read the site."
        ]
    },
    {
        "id": "B07",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Studio / Seminar Room / Critique",
        "place": "Studio / Giving Feedback",
        "situation": "다른 학생 작업에 피드백 주기",
        "person": "Classmate",
        "goal": "칭찬 + 제안 + 질문",
        "topics": [
            "칭찬 + 제안 + 질문"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "I really like the atmosphere in your drawings."
                    ],
                    [
                        "Classmate",
                        "Thanks. I'm still not sure if the concept is clear."
                    ],
                    [
                        "You",
                        "The feeling is clear to me, especially the contrast between the heavy wall and the open courtyard."
                    ],
                    [
                        "Classmate",
                        "That's good to hear."
                    ],
                    [
                        "You",
                        "One thing that might help is showing how people actually move through the space."
                    ],
                    [
                        "Classmate",
                        "Like circulation diagrams?"
                    ],
                    [
                        "You",
                        "Yes, or even a simple sequence of arrival, pause, and exit."
                    ],
                    [
                        "Classmate",
                        "That could work."
                    ],
                    [
                        "You",
                        "Also, I'm curious why you placed the entrance on the quieter street."
                    ],
                    [
                        "Classmate",
                        "I wanted a slower approach, but I need to explain that better."
                    ],
                    [
                        "You",
                        "That intention is strong. I think it just needs one clearer drawing."
                    ]
                ]
            },
            {
                "title": "Variation A - You give feedback when unsure",
                "lines": [
                    [
                        "You",
                        "I'm still learning how to give critique, but I can tell you what I noticed."
                    ],
                    [
                        "Classmate",
                        "Please do."
                    ],
                    [
                        "You",
                        "The atmosphere is strong, but I got a little lost in the sequence."
                    ],
                    [
                        "Classmate",
                        "That's helpful."
                    ],
                    [
                        "You",
                        "Maybe one diagram could show how a person moves through the project."
                    ],
                    [
                        "Classmate",
                        "Good idea. I haven't drawn that yet."
                    ]
                ]
            },
            {
                "title": "Variation B - You balance praise and suggestion",
                "lines": [
                    [
                        "You",
                        "The model is really beautiful, especially the way light enters."
                    ],
                    [
                        "Classmate",
                        "Thanks. I'm worried the concept isn't clear."
                    ],
                    [
                        "You",
                        "I think the concept is there. It just needs one sentence that ties the model to the site."
                    ],
                    [
                        "Classmate",
                        "So less explanation, but sharper?"
                    ],
                    [
                        "You",
                        "Exactly. The work is already doing a lot."
                    ],
                    [
                        "Classmate",
                        "That's encouraging."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask a useful question",
                "lines": [
                    [
                        "You",
                        "Can I ask about the entrance?"
                    ],
                    [
                        "Classmate",
                        "Sure."
                    ],
                    [
                        "You",
                        "It feels intentionally quiet. Is that because you want a slow arrival?"
                    ],
                    [
                        "Classmate",
                        "Yes, that's exactly it."
                    ],
                    [
                        "You",
                        "Then maybe show that as a sequence, not just a plan."
                    ],
                    [
                        "Classmate",
                        "That's a great point."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I can tell you what I noticed.",
            "I got a little lost in the sequence.",
            "One diagram could show...",
            "Less explanation, but sharper.",
            "The work is already doing a lot.",
            "It feels intentionally quiet."
        ]
    },
    {
        "id": "C01",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / First Introduction",
        "situation": "교수님께 처음 자기소개",
        "person": "Professor",
        "goal": "배경, 관심 분야, 현재 목표",
        "topics": [
            "배경, 관심 분야, 현재 목표"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Professor",
                        "Come in. It's nice to finally meet you."
                    ],
                    [
                        "You",
                        "Thank you for making time. I'm Jongkuk, a new PhD student in architecture."
                    ],
                    [
                        "Professor",
                        "Welcome. Tell me a little about your background."
                    ],
                    [
                        "You",
                        "My background connects design practice, architecture, and urban systems. In Korea, I worked across design and spatial questions before deciding to pursue research more seriously."
                    ],
                    [
                        "Professor",
                        "What are you hoping to focus on here?"
                    ],
                    [
                        "You",
                        "I'm interested in modular architecture, underused urban spaces, and how flexible systems can support changing social needs."
                    ],
                    [
                        "Professor",
                        "That's a broad but promising area."
                    ],
                    [
                        "You",
                        "Yes, I'm trying to narrow it into a research question this year."
                    ],
                    [
                        "Professor",
                        "Good. The first step is learning which conversation you want to join."
                    ],
                    [
                        "You",
                        "Exactly. That's one reason I wanted to meet with you early."
                    ]
                ]
            },
            {
                "title": "Variation A - The professor asks what you need",
                "lines": [
                    [
                        "Professor",
                        "What would be most helpful for you this semester?"
                    ],
                    [
                        "You",
                        "I think I need help narrowing my research direction without losing the bigger ambition."
                    ],
                    [
                        "Professor",
                        "That's a good goal."
                    ],
                    [
                        "You",
                        "I also want to understand which academic conversations I should be reading."
                    ],
                    [
                        "Professor",
                        "We can work on that."
                    ],
                    [
                        "You",
                        "Thank you. A clearer map would help me feel less scattered."
                    ]
                ]
            },
            {
                "title": "Variation B - You mention English concerns",
                "lines": [
                    [
                        "Professor",
                        "How are you adjusting so far?"
                    ],
                    [
                        "You",
                        "Overall, I'm grateful to be here, but academic English still takes extra energy."
                    ],
                    [
                        "Professor",
                        "That's understandable."
                    ],
                    [
                        "You",
                        "I can follow the main ideas, but fast discussion is harder."
                    ],
                    [
                        "Professor",
                        "Don't hesitate to ask for clarification."
                    ],
                    [
                        "You",
                        "I appreciate that. I want to participate, even if I'm not perfectly fluent."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask how to prepare",
                "lines": [
                    [
                        "You",
                        "Is there anything you recommend I do before the semester gets busier?"
                    ],
                    [
                        "Professor",
                        "Build a reading habit and start writing short notes."
                    ],
                    [
                        "You",
                        "Short notes as in summaries?"
                    ],
                    [
                        "Professor",
                        "Summaries, questions, and your own reactions."
                    ],
                    [
                        "You",
                        "That sounds manageable."
                    ],
                    [
                        "Professor",
                        "It will help you find your voice."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I need help narrowing my research direction.",
            "Without losing the bigger ambition.",
            "A clearer map would help me feel less scattered.",
            "Academic English still takes extra energy.",
            "I want to participate, even if I'm not perfectly fluent.",
            "It will help you find your voice."
        ]
    },
    {
        "id": "C02",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Office Hours",
        "situation": "오피스아워에 질문하러 감",
        "person": "Professor",
        "goal": "시간을 써도 되는지 정중히 묻기",
        "topics": [
            "시간을 써도 되는지 정중히 묻기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi Professor, do you have a few minutes, or should I come back later?"
                    ],
                    [
                        "Professor",
                        "I have about ten minutes now. What's on your mind?"
                    ],
                    [
                        "You",
                        "Thank you. I wanted to ask about the reading from this week."
                    ],
                    [
                        "Professor",
                        "Sure."
                    ],
                    [
                        "You",
                        "I understood the general argument, but I'm struggling with how the author connects theory to design practice."
                    ],
                    [
                        "Professor",
                        "That's a good question. Which part felt unclear?"
                    ],
                    [
                        "You",
                        "The section about spatial agency. I understand the phrase, but not how to use it analytically."
                    ],
                    [
                        "Professor",
                        "Try asking who has the power to shape the space, and through what tools."
                    ],
                    [
                        "You",
                        "So I should read it less as an abstract concept and more as a question about actors and mechanisms."
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ],
                    [
                        "You",
                        "That helps a lot. Thank you."
                    ]
                ]
            },
            {
                "title": "Variation A - Office hours are full",
                "lines": [
                    [
                        "You",
                        "Hi Professor, do you have a few minutes?"
                    ],
                    [
                        "Professor",
                        "I'm booked right now, unfortunately."
                    ],
                    [
                        "You",
                        "No problem. Should I sign up for another time?"
                    ],
                    [
                        "Professor",
                        "Yes, send me an email with your question."
                    ],
                    [
                        "You",
                        "I will. It's about the reading and how to frame my response."
                    ],
                    [
                        "Professor",
                        "Good. Mention that in the email."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask a messy question",
                "lines": [
                    [
                        "You",
                        "My question may be a little messy."
                    ],
                    [
                        "Professor",
                        "That's fine. Start where you can."
                    ],
                    [
                        "You",
                        "I'm trying to understand how the theory becomes a design method."
                    ],
                    [
                        "Professor",
                        "Good question."
                    ],
                    [
                        "You",
                        "I don't need a full answer now. I just need a way to approach it."
                    ],
                    [
                        "Professor",
                        "Then start by identifying the author's key terms."
                    ]
                ]
            },
            {
                "title": "Variation C - You confirm the next step",
                "lines": [
                    [
                        "You",
                        "So for my response, I should focus on one concept rather than the whole reading?"
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ],
                    [
                        "You",
                        "And connect that concept to one design example?"
                    ],
                    [
                        "Professor",
                        "Yes. Keep it specific."
                    ],
                    [
                        "You",
                        "Great. That gives me a clear structure."
                    ],
                    [
                        "Professor",
                        "Good. Bring the draft if you want feedback."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Should I sign up for another time?",
            "My question may be a little messy.",
            "Start where you can.",
            "How the theory becomes a design method.",
            "I just need a way to approach it.",
            "Keep it specific."
        ]
    },
    {
        "id": "C03",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Research Pitch",
        "situation": "연구 관심사를 1분 안에 설명",
        "person": "Professor",
        "goal": "모듈러, 도시 유휴공간, 건축/기술 접점",
        "topics": [
            "모듈러, 도시 유휴공간, 건축/기술 접점"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Professor",
                        "How would you summarize your research interest in one minute?"
                    ],
                    [
                        "You",
                        "I'm interested in how modular architectural systems can activate underused urban spaces."
                    ],
                    [
                        "Professor",
                        "Go on."
                    ],
                    [
                        "You",
                        "Many cities have small leftover spaces that are too complex or temporary for conventional development."
                    ],
                    [
                        "Professor",
                        "And where does technology come in?"
                    ],
                    [
                        "You",
                        "I want to explore how digital design, prefabrication, and adaptive systems could make small-scale interventions more responsive."
                    ],
                    [
                        "Professor",
                        "Responsive to what?"
                    ],
                    [
                        "You",
                        "To changing programs, community needs, and site constraints."
                    ],
                    [
                        "Professor",
                        "That's clearer. What's the research question?"
                    ],
                    [
                        "You",
                        "I'm still forming it, but it might ask how modular systems can move beyond efficiency and become tools for urban adaptability."
                    ],
                    [
                        "Professor",
                        "That's a useful direction."
                    ]
                ]
            },
            {
                "title": "Variation A - The professor asks for a sharper question",
                "lines": [
                    [
                        "Professor",
                        "That's a topic, but what's the question?"
                    ],
                    [
                        "You",
                        "Right. Maybe the question is how modular systems can support temporary urban programs without becoming generic."
                    ],
                    [
                        "Professor",
                        "Better."
                    ],
                    [
                        "You",
                        "So the tension is flexibility versus specificity."
                    ],
                    [
                        "Professor",
                        "Exactly. That sounds researchable."
                    ],
                    [
                        "You",
                        "Great. I can build the next version around that tension."
                    ]
                ]
            },
            {
                "title": "Variation B - You explain why it matters",
                "lines": [
                    [
                        "Professor",
                        "Why does this matter beyond your design interest?"
                    ],
                    [
                        "You",
                        "Cities have many small spaces that are ignored because they don't fit normal development models."
                    ],
                    [
                        "Professor",
                        "And your work addresses that?"
                    ],
                    [
                        "You",
                        "I hope it offers a way to think about small-scale adaptability instead of only large redevelopment."
                    ],
                    [
                        "Professor",
                        "Good. That's the broader claim."
                    ],
                    [
                        "You",
                        "I'll make that clearer."
                    ]
                ]
            },
            {
                "title": "Variation C - You avoid overclaiming",
                "lines": [
                    [
                        "Professor",
                        "Are you saying modular architecture solves urban vacancy?"
                    ],
                    [
                        "You",
                        "Not exactly. I don't want to make that claim."
                    ],
                    [
                        "Professor",
                        "Good."
                    ],
                    [
                        "You",
                        "I see it more as a tool for testing possible uses and revealing constraints."
                    ],
                    [
                        "Professor",
                        "That's more careful."
                    ],
                    [
                        "You",
                        "Yes, I want the argument to be useful but not exaggerated."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "That's a topic, but what's the question?",
            "Flexibility versus specificity.",
            "That sounds researchable.",
            "Beyond my design interest.",
            "Small-scale adaptability.",
            "I don't want to make that claim."
        ]
    },
    {
        "id": "C04",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Clarifying Feedback",
        "situation": "피드백을 잘 못 알아들어 다시 확인",
        "person": "Professor",
        "goal": "\"제가 이해한 게 맞나요?\"",
        "topics": [
            "\"제가 이해한 게 맞나요?\""
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Can I repeat what I heard to make sure I understood you correctly?"
                    ],
                    [
                        "Professor",
                        "Of course."
                    ],
                    [
                        "You",
                        "I think you're saying the project idea is interesting, but my current evidence is too general."
                    ],
                    [
                        "Professor",
                        "Yes, that's right."
                    ],
                    [
                        "You",
                        "And instead of adding more examples randomly, I should choose a smaller set of cases and analyze them more deeply."
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ],
                    [
                        "You",
                        "So the next step is not to expand the topic, but to sharpen the criteria."
                    ],
                    [
                        "Professor",
                        "That's a good way to put it."
                    ],
                    [
                        "You",
                        "Thank you. I wanted to check because I sometimes miss the nuance in fast feedback."
                    ],
                    [
                        "Professor",
                        "That's completely fine. Clarifying is part of the process."
                    ]
                ]
            },
            {
                "title": "Variation A - You repeat a complex comment",
                "lines": [
                    [
                        "You",
                        "Let me see if I understood the feedback."
                    ],
                    [
                        "Professor",
                        "Go ahead."
                    ],
                    [
                        "You",
                        "You're suggesting that I separate the design proposal from the research argument."
                    ],
                    [
                        "Professor",
                        "Yes, because right now they are blurred."
                    ],
                    [
                        "You",
                        "So the design can be evidence, but not the whole argument."
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask for an example",
                "lines": [
                    [
                        "You",
                        "Could you give me an example of what you mean by sharper criteria?"
                    ],
                    [
                        "Professor",
                        "For example, define what counts as adaptable."
                    ],
                    [
                        "You",
                        "So not just saying flexible, but naming the conditions."
                    ],
                    [
                        "Professor",
                        "Right."
                    ],
                    [
                        "You",
                        "That helps. I can create criteria like time, program, scale, and access."
                    ],
                    [
                        "Professor",
                        "Good."
                    ]
                ]
            },
            {
                "title": "Variation C - You clarify because of language",
                "lines": [
                    [
                        "You",
                        "I want to check the nuance because I may be missing part of the English."
                    ],
                    [
                        "Professor",
                        "Sure."
                    ],
                    [
                        "You",
                        "When you say \"too loose,\" do you mean the idea is too broad?"
                    ],
                    [
                        "Professor",
                        "Yes, broad and not yet grounded."
                    ],
                    [
                        "You",
                        "Okay. So I need more boundaries and stronger evidence."
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Let me see if I understood the feedback.",
            "The design can be evidence, but not the whole argument.",
            "Could you give me an example?",
            "Not just saying flexible.",
            "I want to check the nuance.",
            "More boundaries and stronger evidence."
        ]
    },
    {
        "id": "C05",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Partial Disagreement",
        "situation": "교수님 의견에 부분적으로 다른 관점 제시",
        "person": "Professor",
        "goal": "조심스럽게 반대하거나 보완",
        "topics": [
            "조심스럽게 반대하거나 보완"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Professor",
                        "I would focus less on modularity and more on urban policy."
                    ],
                    [
                        "You",
                        "That makes sense, and I agree the policy context is important."
                    ],
                    [
                        "Professor",
                        "But?"
                    ],
                    [
                        "You",
                        "I wonder if the modular system can still be useful as a way to test policy limits at a smaller scale."
                    ],
                    [
                        "Professor",
                        "Explain what you mean."
                    ],
                    [
                        "You",
                        "Instead of treating modularity only as construction logic, I want to frame it as an experimental tool for temporary urban use."
                    ],
                    [
                        "Professor",
                        "That could work, but you need to be careful not to overclaim."
                    ],
                    [
                        "You",
                        "Absolutely. Maybe the argument is not that modularity solves policy problems, but that it reveals them."
                    ],
                    [
                        "Professor",
                        "That's much stronger."
                    ],
                    [
                        "You",
                        "Great. I'll revise the framing in that direction."
                    ]
                ]
            },
            {
                "title": "Variation A - You offer a softer alternative",
                "lines": [
                    [
                        "Professor",
                        "I would remove the technology part for now."
                    ],
                    [
                        "You",
                        "I see why that could make the project cleaner."
                    ],
                    [
                        "Professor",
                        "It may be too much."
                    ],
                    [
                        "You",
                        "Could I keep it as a secondary layer, not the main argument?"
                    ],
                    [
                        "Professor",
                        "Possibly, if it stays disciplined."
                    ],
                    [
                        "You",
                        "That sounds reasonable. I'll make the hierarchy clearer."
                    ]
                ]
            },
            {
                "title": "Variation B - You disagree with evidence",
                "lines": [
                    [
                        "Professor",
                        "The site may not need a modular approach."
                    ],
                    [
                        "You",
                        "That's possible. But from my observations, the site's use changes a lot by time of day."
                    ],
                    [
                        "Professor",
                        "How does that support modularity?"
                    ],
                    [
                        "You",
                        "It suggests the program may need to shift rather than stay fixed."
                    ],
                    [
                        "Professor",
                        "Then show that evidence clearly."
                    ],
                    [
                        "You",
                        "I will. The argument needs to come from observation."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask if your framing works",
                "lines": [
                    [
                        "You",
                        "Would it be fair to frame the project as a test, rather than a solution?"
                    ],
                    [
                        "Professor",
                        "Yes, that's much better."
                    ],
                    [
                        "You",
                        "A test of what kinds of uses the site can support?"
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ],
                    [
                        "You",
                        "That helps me avoid sounding too final."
                    ],
                    [
                        "Professor",
                        "Good. Research can stay provisional."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I see why that could make the project cleaner.",
            "Could I keep it as a secondary layer?",
            "The site's use changes by time of day.",
            "The argument needs to come from observation.",
            "A test, rather than a solution.",
            "Research can stay provisional."
        ]
    },
    {
        "id": "C06",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Reading Direction",
        "situation": "어떤 논문/이론부터 봐야 할지 질문",
        "person": "Professor",
        "goal": "선행연구, 키워드, 방향성 요청",
        "topics": [
            "선행연구, 키워드, 방향성 요청"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "I wanted to ask for advice on where to start with the literature."
                    ],
                    [
                        "Professor",
                        "What have you been reading so far?"
                    ],
                    [
                        "You",
                        "Mostly texts on modular architecture and temporary urbanism, but the field feels scattered."
                    ],
                    [
                        "Professor",
                        "It is. You may need a few separate clusters."
                    ],
                    [
                        "You",
                        "That's what I was thinking. Would it make sense to organize them around modularity, urban vacancy, and adaptive reuse?"
                    ],
                    [
                        "Professor",
                        "Yes. Also look at tactical urbanism and infrastructure studies."
                    ],
                    [
                        "You",
                        "Great. Are there any authors or keywords you think I should start with?"
                    ],
                    [
                        "Professor",
                        "I can send you a few names. Don't try to read everything at once."
                    ],
                    [
                        "You",
                        "Thank you. A starting map would help me a lot."
                    ],
                    [
                        "Professor",
                        "Build the map first, then decide where your project sits."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask for keywords",
                "lines": [
                    [
                        "You",
                        "Could you suggest a few keywords I should search with?"
                    ],
                    [
                        "Professor",
                        "Try temporary urbanism, tactical urbanism, adaptive reuse, and modular construction."
                    ],
                    [
                        "You",
                        "That's helpful. Should I search them separately or in combinations?"
                    ],
                    [
                        "Professor",
                        "Both. The combinations may be more interesting."
                    ],
                    [
                        "You",
                        "Great. I'll start building a reading map."
                    ],
                    [
                        "Professor",
                        "Good. Track which field each text comes from."
                    ]
                ]
            },
            {
                "title": "Variation B - You feel overwhelmed",
                "lines": [
                    [
                        "You",
                        "I'm finding too many sources and losing the structure."
                    ],
                    [
                        "Professor",
                        "That happens. Don't collect endlessly."
                    ],
                    [
                        "You",
                        "Should I limit the first round?"
                    ],
                    [
                        "Professor",
                        "Yes. Pick ten strong texts and understand the conversation."
                    ],
                    [
                        "You",
                        "Ten sounds manageable."
                    ],
                    [
                        "Professor",
                        "Depth first, then expansion."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask about theory versus cases",
                "lines": [
                    [
                        "You",
                        "Should I start with theory or case studies?"
                    ],
                    [
                        "Professor",
                        "Do both, but don't confuse their roles."
                    ],
                    [
                        "You",
                        "Theory gives concepts, and cases show how they operate?"
                    ],
                    [
                        "Professor",
                        "Exactly."
                    ],
                    [
                        "You",
                        "That helps. I'll separate them in my notes."
                    ],
                    [
                        "Professor",
                        "Good habit."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Could you suggest a few keywords?",
            "Search them separately or in combinations.",
            "Start building a reading map.",
            "Don't collect endlessly.",
            "Depth first, then expansion.",
            "Don't confuse their roles."
        ]
    },
    {
        "id": "C07",
        "collection": "Practical Training",
        "pack": "Academic Life Pack",
        "group": "Professor's Office / Office Hours",
        "place": "Professor's Office / Research Opportunity",
        "situation": "연구기회나 추천서 가능성 묻기",
        "person": "Professor",
        "goal": "부담스럽지 않게 가능성 확인",
        "topics": [
            "부담스럽지 않게 가능성 확인"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "I also wanted to ask something slightly forward-looking."
                    ],
                    [
                        "Professor",
                        "Sure."
                    ],
                    [
                        "You",
                        "If there are research opportunities in the department later, I'd be very interested in contributing."
                    ],
                    [
                        "Professor",
                        "What kind of work are you hoping to do?"
                    ],
                    [
                        "You",
                        "Anything related to urban systems, housing, modular construction, or design research methods would be especially relevant."
                    ],
                    [
                        "Professor",
                        "That's good to know."
                    ],
                    [
                        "You",
                        "I don't expect anything immediately. I just wanted to understand how students usually get involved."
                    ],
                    [
                        "Professor",
                        "Usually through seminars, project meetings, or conversations with faculty."
                    ],
                    [
                        "You",
                        "That helps. And in the longer term, if I hope to ask for a recommendation, what would be the best way to build that relationship responsibly?"
                    ],
                    [
                        "Professor",
                        "Do good work, keep me updated, and give me enough context when the time comes."
                    ],
                    [
                        "You",
                        "Thank you. That's very helpful."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask about assistantship norms",
                "lines": [
                    [
                        "You",
                        "How do students usually hear about research assistant opportunities?"
                    ],
                    [
                        "Professor",
                        "Often through faculty announcements or direct conversations."
                    ],
                    [
                        "You",
                        "Is it okay to express interest early?"
                    ],
                    [
                        "Professor",
                        "Yes, as long as you understand nothing is guaranteed."
                    ],
                    [
                        "You",
                        "Of course. I just want to be visible and prepared."
                    ],
                    [
                        "Professor",
                        "That's a healthy approach."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask how to build toward a recommendation",
                "lines": [
                    [
                        "You",
                        "In the long term, I may need recommendation letters. How should I build that responsibly?"
                    ],
                    [
                        "Professor",
                        "Let faculty see your work over time."
                    ],
                    [
                        "You",
                        "So not just asking at the last minute."
                    ],
                    [
                        "Professor",
                        "Exactly. Share drafts, ask questions, and show progress."
                    ],
                    [
                        "You",
                        "That makes sense. I want the request to feel earned."
                    ],
                    [
                        "Professor",
                        "Good."
                    ]
                ]
            },
            {
                "title": "Variation C - You offer to help",
                "lines": [
                    [
                        "You",
                        "If there are small ways I can help with ongoing research, I'd be interested."
                    ],
                    [
                        "Professor",
                        "What skills could you contribute?"
                    ],
                    [
                        "You",
                        "Design research, diagrams, visual communication, and some digital workflow experience."
                    ],
                    [
                        "Professor",
                        "Good to know."
                    ],
                    [
                        "You",
                        "I don't want to overcommit, but I'd like to learn by contributing."
                    ],
                    [
                        "Professor",
                        "That's a good balance."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "How do students usually hear about...?",
            "I just want to be visible and prepared.",
            "Let faculty see your work over time.",
            "I want the request to feel earned.",
            "I don't want to overcommit.",
            "I'd like to learn by contributing."
        ]
    },
    {
        "id": "D01",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Move-In Day",
        "situation": "입주 첫날 관리사무소에서 안내받기",
        "person": "Manager",
        "goal": "열쇠, 우편함, 세탁실, 쓰레기",
        "topics": [
            "열쇠, 우편함, 세탁실, 쓰레기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Manager",
                        "Welcome. Are you here for move-in?"
                    ],
                    [
                        "You",
                        "Yes, I'm Jongkuk. I'm moving into unit 304 today."
                    ],
                    [
                        "Manager",
                        "Great. Let me get your keys."
                    ],
                    [
                        "You",
                        "Thank you. Could you also explain the basics, like mail, laundry, and trash?"
                    ],
                    [
                        "Manager",
                        "Of course. This key is for your unit, and this smaller one is for the mailbox."
                    ],
                    [
                        "You",
                        "Where is the mailbox located?"
                    ],
                    [
                        "Manager",
                        "In the lobby, on the right side. Laundry is in the basement."
                    ],
                    [
                        "You",
                        "Got it. And where should I take trash and recycling?"
                    ],
                    [
                        "Manager",
                        "Trash goes behind the building. Recycling is in the blue bins next to it."
                    ],
                    [
                        "You",
                        "Perfect. Is there anything new tenants usually forget to ask?"
                    ],
                    [
                        "Manager",
                        "Package pickup. You'll get an email when something arrives."
                    ]
                ]
            },
            {
                "title": "Variation A - The mailbox key does not work",
                "lines": [
                    [
                        "You",
                        "I tried the mailbox key, but it doesn't seem to work."
                    ],
                    [
                        "Manager",
                        "Which mailbox number?"
                    ],
                    [
                        "You",
                        "304. It goes in, but it won't turn."
                    ],
                    [
                        "Manager",
                        "Let me check if we gave you the right key."
                    ],
                    [
                        "You",
                        "Thanks. I just want to fix it before important mail starts arriving."
                    ],
                    [
                        "Manager",
                        "Good idea."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask about laundry payment",
                "lines": [
                    [
                        "You",
                        "How does laundry work in the building?"
                    ],
                    [
                        "Manager",
                        "The machines use an app."
                    ],
                    [
                        "You",
                        "Is there a card option, or only the app?"
                    ],
                    [
                        "Manager",
                        "Mostly the app, but there is a backup card system."
                    ],
                    [
                        "You",
                        "Great. Could you write down the app name for me?"
                    ],
                    [
                        "Manager",
                        "Sure."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask what to do after hours",
                "lines": [
                    [
                        "You",
                        "If something urgent happens after office hours, what should I do?"
                    ],
                    [
                        "Manager",
                        "Call the emergency maintenance number."
                    ],
                    [
                        "You",
                        "Is that for things like leaks or no heat?"
                    ],
                    [
                        "Manager",
                        "Exactly. For small issues, submit an online request."
                    ],
                    [
                        "You",
                        "Got it. Emergency phone for urgent problems, online request for normal repairs."
                    ],
                    [
                        "Manager",
                        "That's right."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "It goes in, but it won't turn.",
            "Before important mail starts arriving.",
            "How does laundry work?",
            "Could you write down the app name?",
            "If something urgent happens after office hours...",
            "Emergency phone for urgent problems."
        ]
    },
    {
        "id": "D02",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Maintenance",
        "situation": "난방, 수도, 인터넷 문제 신고",
        "person": "Manager",
        "goal": "문제 설명, 수리 일정 잡기",
        "topics": [
            "문제 설명, 수리 일정 잡기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, I'm calling about a maintenance issue in unit 304."
                    ],
                    [
                        "Manager",
                        "What's going on?"
                    ],
                    [
                        "You",
                        "The heat doesn't seem to be working, and the apartment is getting pretty cold."
                    ],
                    [
                        "Manager",
                        "When did you first notice it?"
                    ],
                    [
                        "You",
                        "Last night. I tried adjusting the thermostat, but nothing changed."
                    ],
                    [
                        "Manager",
                        "Okay. We can send someone this afternoon."
                    ],
                    [
                        "You",
                        "That would be great. Do I need to be home for the visit?"
                    ],
                    [
                        "Manager",
                        "If you give permission to enter, you don't have to be there."
                    ],
                    [
                        "You",
                        "I'd prefer to be there if possible. What time window are we talking about?"
                    ],
                    [
                        "Manager",
                        "Between two and four."
                    ],
                    [
                        "You",
                        "That works. Please put me down for that window."
                    ]
                ]
            },
            {
                "title": "Variation A - Hot water is not working",
                "lines": [
                    [
                        "You",
                        "Hi, I'm having an issue with hot water in unit 304."
                    ],
                    [
                        "Manager",
                        "Is there no hot water at all?"
                    ],
                    [
                        "You",
                        "It gets slightly warm for a minute, then turns cold."
                    ],
                    [
                        "Manager",
                        "When did it start?"
                    ],
                    [
                        "You",
                        "This morning. I tried twice to make sure."
                    ],
                    [
                        "Manager",
                        "We'll send maintenance today."
                    ]
                ]
            },
            {
                "title": "Variation B - The technician needs access",
                "lines": [
                    [
                        "Technician",
                        "I'm here for the maintenance request."
                    ],
                    [
                        "You",
                        "Thanks for coming. The problem is in the bathroom sink."
                    ],
                    [
                        "Technician",
                        "Do you mind if I take a look now?"
                    ],
                    [
                        "You",
                        "Of course. Let me move a few things out of the way."
                    ],
                    [
                        "Technician",
                        "Thanks."
                    ],
                    [
                        "You",
                        "If you need to come back later, could you let me know the time window?"
                    ]
                ]
            },
            {
                "title": "Variation C - Internet keeps dropping",
                "lines": [
                    [
                        "You",
                        "The internet works, but it keeps disconnecting every few minutes."
                    ],
                    [
                        "Manager",
                        "Is it building Wi-Fi or your own router?"
                    ],
                    [
                        "You",
                        "My own router, but the connection from the wall seems unstable."
                    ],
                    [
                        "Manager",
                        "We may need to contact the provider."
                    ],
                    [
                        "You",
                        "That would help. I have online meetings this week, so it's a bit urgent."
                    ],
                    [
                        "Manager",
                        "Understood."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "It gets slightly warm, then turns cold.",
            "I tried twice to make sure.",
            "Do you mind if I take a look now?",
            "Let me move a few things out of the way.",
            "It keeps disconnecting every few minutes.",
            "I have online meetings this week."
        ]
    },
    {
        "id": "D03",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Roommates",
        "situation": "룸메이트와 생활 규칙 정하기",
        "person": "Roommate",
        "goal": "청소, 소음, 손님, 공용공간",
        "topics": [
            "청소, 소음, 손님, 공용공간"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Since I just moved in, would it be okay to talk about house routines?"
                    ],
                    [
                        "Roommate",
                        "Definitely. It's better to talk early."
                    ],
                    [
                        "You",
                        "Great. How do you usually handle cleaning shared spaces?"
                    ],
                    [
                        "Roommate",
                        "We try to clean the kitchen right after cooking and do a bigger clean on weekends."
                    ],
                    [
                        "You",
                        "That works for me. Should we make a simple rotation for trash and bathroom cleaning?"
                    ],
                    [
                        "Roommate",
                        "Yeah, that would be helpful."
                    ],
                    [
                        "You",
                        "Also, what are the expectations around guests?"
                    ],
                    [
                        "Roommate",
                        "Guests are fine, just give a heads-up if someone stays late or overnight."
                    ],
                    [
                        "You",
                        "Makes sense. And quiet hours?"
                    ],
                    [
                        "Roommate",
                        "After ten on weeknights is usually quiet."
                    ],
                    [
                        "You",
                        "Perfect. I want to be respectful, so thanks for walking me through it."
                    ]
                ]
            },
            {
                "title": "Variation A - Kitchen cleaning expectations",
                "lines": [
                    [
                        "You",
                        "Can we talk about kitchen cleanup?"
                    ],
                    [
                        "Roommate",
                        "Sure. Is something wrong?"
                    ],
                    [
                        "You",
                        "Nothing serious. I just want to understand the usual expectation."
                    ],
                    [
                        "Roommate",
                        "We usually clean right after cooking."
                    ],
                    [
                        "You",
                        "That works. If I'm cooking late, I'll make sure to wipe everything down before bed."
                    ],
                    [
                        "Roommate",
                        "Perfect."
                    ]
                ]
            },
            {
                "title": "Variation B - Noise during study time",
                "lines": [
                    [
                        "You",
                        "I wanted to ask about noise during weeknights."
                    ],
                    [
                        "Roommate",
                        "Sure. Am I being too loud?"
                    ],
                    [
                        "You",
                        "Not too loud, but my reading takes a lot of concentration right now."
                    ],
                    [
                        "Roommate",
                        "Got it. I can use headphones after ten."
                    ],
                    [
                        "You",
                        "Thanks. And if I ever make noise, please tell me directly too."
                    ],
                    [
                        "Roommate",
                        "Deal."
                    ]
                ]
            },
            {
                "title": "Variation C - Sharing supplies",
                "lines": [
                    [
                        "You",
                        "Do we share things like paper towels and dish soap?"
                    ],
                    [
                        "Roommate",
                        "Yeah, we usually rotate buying them."
                    ],
                    [
                        "You",
                        "Great. Should I buy the next round?"
                    ],
                    [
                        "Roommate",
                        "That would be helpful."
                    ],
                    [
                        "You",
                        "No problem. Just tell me the brands people prefer."
                    ],
                    [
                        "Roommate",
                        "Anything basic is fine."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I just want to understand the usual expectation.",
            "I'll wipe everything down before bed.",
            "My reading takes a lot of concentration.",
            "Please tell me directly too.",
            "Do we share things like...?",
            "We usually rotate buying them."
        ]
    },
    {
        "id": "D04",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Neighbor Noise",
        "situation": "이웃 소음 문제 말하기",
        "person": "Neighbor",
        "goal": "무례하지 않게 불편함 전달",
        "topics": [
            "무례하지 않게 불편함 전달"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, sorry to bother you. I'm Jongkuk from upstairs."
                    ],
                    [
                        "Neighbor",
                        "Hi. Is everything okay?"
                    ],
                    [
                        "You",
                        "Yes, mostly. I just wanted to ask about the music late at night."
                    ],
                    [
                        "Neighbor",
                        "Oh, was it too loud?"
                    ],
                    [
                        "You",
                        "A little, especially after midnight. I know apartments can be noisy, so I didn't want to make it a big thing."
                    ],
                    [
                        "Neighbor",
                        "I'm sorry. I didn't realize it was carrying upstairs."
                    ],
                    [
                        "You",
                        "No worries. I just have early classes, so it would help if it could be lower after eleven."
                    ],
                    [
                        "Neighbor",
                        "Absolutely. I'll keep it down."
                    ],
                    [
                        "You",
                        "Thanks, I really appreciate it."
                    ],
                    [
                        "Neighbor",
                        "Thanks for telling me politely."
                    ]
                ]
            },
            {
                "title": "Variation A - You write a polite message",
                "lines": [
                    [
                        "You",
                        "Hi, this is Jongkuk from upstairs. I hope it's okay to message."
                    ],
                    [
                        "Neighbor",
                        "Sure, what's up?"
                    ],
                    [
                        "You",
                        "The music has been carrying through the ceiling late at night."
                    ],
                    [
                        "Neighbor",
                        "Sorry about that."
                    ],
                    [
                        "You",
                        "No worries. Would it be possible to lower it after eleven on weeknights?"
                    ],
                    [
                        "Neighbor",
                        "Yes, absolutely."
                    ]
                ]
            },
            {
                "title": "Variation B - The neighbor reacts defensively",
                "lines": [
                    [
                        "Neighbor",
                        "I don't think it's that loud."
                    ],
                    [
                        "You",
                        "I understand. It may not sound loud in your apartment."
                    ],
                    [
                        "Neighbor",
                        "Maybe the building carries sound."
                    ],
                    [
                        "You",
                        "That might be it. I'm not trying to blame you, just hoping we can find a workable level."
                    ],
                    [
                        "Neighbor",
                        "Okay, I can turn it down later at night."
                    ],
                    [
                        "You",
                        "I really appreciate it."
                    ]
                ]
            },
            {
                "title": "Variation C - You suggest a compromise",
                "lines": [
                    [
                        "You",
                        "I don't mind normal noise, especially earlier in the evening."
                    ],
                    [
                        "Neighbor",
                        "That's good to know."
                    ],
                    [
                        "You",
                        "The hard part is after midnight because I have early classes."
                    ],
                    [
                        "Neighbor",
                        "Fair."
                    ],
                    [
                        "You",
                        "Would after eleven be a reasonable quiet time?"
                    ],
                    [
                        "Neighbor",
                        "Yes, that works."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I hope it's okay to message.",
            "The music has been carrying through the ceiling.",
            "It may not sound loud in your apartment.",
            "I'm not trying to blame you.",
            "A workable level.",
            "Would after eleven be reasonable?"
        ]
    },
    {
        "id": "D05",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Package Problem",
        "situation": "택배가 안 보이거나 오배송됨",
        "person": "Manager",
        "goal": "로비, 우편함, 배송 확인",
        "topics": [
            "로비, 우편함, 배송 확인"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, I got a delivery notification, but I can't find the package."
                    ],
                    [
                        "Manager",
                        "What carrier was it?"
                    ],
                    [
                        "You",
                        "It says UPS, delivered this morning at 10:12."
                    ],
                    [
                        "Manager",
                        "Did it say mailroom or front desk?"
                    ],
                    [
                        "You",
                        "The app only says delivered to building."
                    ],
                    [
                        "Manager",
                        "Let me check the package room."
                    ],
                    [
                        "You",
                        "Thank you. It's a small box with my name on it."
                    ],
                    [
                        "Manager",
                        "I don't see it here. Sometimes drivers leave packages by the side entrance."
                    ],
                    [
                        "You",
                        "Should I check there, or should I contact UPS first?"
                    ],
                    [
                        "Manager",
                        "Check the side entrance first. If it's not there, send us the tracking number."
                    ],
                    [
                        "You",
                        "Got it. I'll check and follow up if needed."
                    ]
                ]
            },
            {
                "title": "Variation A - The package went to the wrong unit",
                "lines": [
                    [
                        "You",
                        "I think my package may have gone to the wrong unit."
                    ],
                    [
                        "Manager",
                        "What makes you think that?"
                    ],
                    [
                        "You",
                        "The delivery photo shows a different door mat."
                    ],
                    [
                        "Manager",
                        "Can you send us the photo?"
                    ],
                    [
                        "You",
                        "Yes, I'll forward it now with the tracking number."
                    ],
                    [
                        "Manager",
                        "Great. We'll check with the neighboring units."
                    ]
                ]
            },
            {
                "title": "Variation B - You contact the carrier",
                "lines": [
                    [
                        "Carrier Agent",
                        "How can I help you?"
                    ],
                    [
                        "You",
                        "My package says delivered, but I can't find it in the mailroom or lobby."
                    ],
                    [
                        "Carrier Agent",
                        "Can I have the tracking number?"
                    ],
                    [
                        "You",
                        "Yes, it's 1Z..."
                    ],
                    [
                        "Carrier Agent",
                        "I see it was marked delivered to the front desk."
                    ],
                    [
                        "You",
                        "Could you open an investigation or confirm the exact drop-off location?"
                    ]
                ]
            },
            {
                "title": "Variation C - A neighbor found it",
                "lines": [
                    [
                        "Neighbor",
                        "Are you Jongkuk in 304?"
                    ],
                    [
                        "You",
                        "Yes, that's me."
                    ],
                    [
                        "Neighbor",
                        "I think your package was left by my door."
                    ],
                    [
                        "You",
                        "Oh, thank you so much. I was looking for it."
                    ],
                    [
                        "Neighbor",
                        "No problem. The labels were probably hard to see."
                    ],
                    [
                        "You",
                        "I really appreciate you bringing it over."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "It may have gone to the wrong unit.",
            "The delivery photo shows a different door mat.",
            "I'll forward it with the tracking number.",
            "It says delivered, but I can't find it.",
            "Could you confirm the exact drop-off location?",
            "I appreciate you bringing it over."
        ]
    },
    {
        "id": "D06",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Lease And Rent",
        "situation": "계약, 보증금, 렌트 관련 질문",
        "person": "Manager",
        "goal": "due date, deposit, lease renewal",
        "topics": [
            "due date, deposit, lease renewal"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "I had a few questions about the lease and rent payments."
                    ],
                    [
                        "Manager",
                        "Sure. What would you like to know?"
                    ],
                    [
                        "You",
                        "First, when is rent due each month?"
                    ],
                    [
                        "Manager",
                        "It's due on the first, with a short grace period until the fifth."
                    ],
                    [
                        "You",
                        "Okay. And is online payment the preferred method?"
                    ],
                    [
                        "Manager",
                        "Yes, through the resident portal."
                    ],
                    [
                        "You",
                        "Great. I also wanted to confirm how the security deposit works."
                    ],
                    [
                        "Manager",
                        "It's held until move-out, then returned depending on the condition of the unit."
                    ],
                    [
                        "You",
                        "That makes sense. If I want to renew later, when should I start that conversation?"
                    ],
                    [
                        "Manager",
                        "Usually sixty days before the lease ends."
                    ],
                    [
                        "You",
                        "Perfect. Thanks for clarifying."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask about late fees",
                "lines": [
                    [
                        "You",
                        "I want to make sure I understand the rent deadline."
                    ],
                    [
                        "Manager",
                        "Rent is due on the first."
                    ],
                    [
                        "You",
                        "Is there a late fee after the grace period?"
                    ],
                    [
                        "Manager",
                        "Yes, after the fifth."
                    ],
                    [
                        "You",
                        "Got it. I'll set up autopay so I don't miss it."
                    ],
                    [
                        "Manager",
                        "That's the easiest way."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask about renewal timing",
                "lines": [
                    [
                        "You",
                        "When should I let you know if I want to renew the lease?"
                    ],
                    [
                        "Manager",
                        "Usually sixty days before it ends."
                    ],
                    [
                        "You",
                        "Will you send a reminder, or should I track it myself?"
                    ],
                    [
                        "Manager",
                        "We usually send a notice, but it's good to track it too."
                    ],
                    [
                        "You",
                        "Makes sense. I'll put it on my calendar."
                    ],
                    [
                        "Manager",
                        "Good plan."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask about deposit deductions",
                "lines": [
                    [
                        "You",
                        "What kinds of things can affect the security deposit?"
                    ],
                    [
                        "Manager",
                        "Damage beyond normal wear and tear."
                    ],
                    [
                        "You",
                        "Could you give me an example?"
                    ],
                    [
                        "Manager",
                        "Large wall damage, broken fixtures, or heavy cleaning needs."
                    ],
                    [
                        "You",
                        "That helps. I just want to take care of the place properly."
                    ],
                    [
                        "Manager",
                        "That's appreciated."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Is there a late fee?",
            "I'll set up autopay.",
            "Should I track it myself?",
            "I'll put it on my calendar.",
            "Normal wear and tear.",
            "I want to take care of the place properly."
        ]
    },
    {
        "id": "D07",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Apartment / Home / Roommates",
        "place": "Apartment / Guest Policy",
        "situation": "집에 친구나 손님 초대 관련 확인",
        "person": "Roommate",
        "goal": "guest policy, quiet hours",
        "topics": [
            "guest policy, quiet hours"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Quick question about guests."
                    ],
                    [
                        "Roommate",
                        "Sure, what's up?"
                    ],
                    [
                        "You",
                        "A friend might visit this weekend. I wanted to check what feels okay in the apartment."
                    ],
                    [
                        "Roommate",
                        "Thanks for asking. Is it just for dinner, or overnight?"
                    ],
                    [
                        "You",
                        "Probably just dinner, but maybe staying late."
                    ],
                    [
                        "Roommate",
                        "That's fine. Just let me know the rough time."
                    ],
                    [
                        "You",
                        "Of course. I'll keep the common area clean and quiet."
                    ],
                    [
                        "Roommate",
                        "Appreciate it. We usually try to be quieter after ten."
                    ],
                    [
                        "You",
                        "Makes sense. If it ever feels uncomfortable, please tell me directly."
                    ],
                    [
                        "Roommate",
                        "Same here. Communication helps."
                    ]
                ]
            },
            {
                "title": "Variation A - Overnight guest",
                "lines": [
                    [
                        "You",
                        "My friend may stay overnight this weekend. Is that okay?"
                    ],
                    [
                        "Roommate",
                        "One night is fine. Thanks for checking."
                    ],
                    [
                        "You",
                        "Of course. I'll make sure it doesn't affect the shared space."
                    ],
                    [
                        "Roommate",
                        "That works."
                    ],
                    [
                        "You",
                        "Should I tell the building office too?"
                    ],
                    [
                        "Roommate",
                        "Not for one night, I don't think."
                    ]
                ]
            },
            {
                "title": "Variation B - Roommate has a guest",
                "lines": [
                    [
                        "Roommate",
                        "I might have a friend over tonight."
                    ],
                    [
                        "You",
                        "Thanks for letting me know. Around what time?"
                    ],
                    [
                        "Roommate",
                        "Maybe seven to eleven."
                    ],
                    [
                        "You",
                        "That's totally fine. I have reading to do, so I'll probably stay in my room."
                    ],
                    [
                        "Roommate",
                        "We'll keep it quiet."
                    ],
                    [
                        "You",
                        "Appreciate it."
                    ]
                ]
            },
            {
                "title": "Variation C - You need quiet before presentation",
                "lines": [
                    [
                        "You",
                        "I have a presentation tomorrow morning, so I may need a quiet night."
                    ],
                    [
                        "Roommate",
                        "Good to know. I was thinking of inviting people over."
                    ],
                    [
                        "You",
                        "Would it be possible to keep it small or do another night?"
                    ],
                    [
                        "Roommate",
                        "Yeah, we can move it."
                    ],
                    [
                        "You",
                        "Thanks. I don't want to be difficult."
                    ],
                    [
                        "Roommate",
                        "You're not. Presentations are stressful."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Thanks for checking.",
            "I'll make sure it doesn't affect the shared space.",
            "Around what time?",
            "I have reading to do.",
            "I may need a quiet night.",
            "I don't want to be difficult."
        ]
    },
    {
        "id": "E01",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Cafe / First Order",
        "situation": "처음 간 카페에서 추천받아 주문",
        "person": "Barista",
        "goal": "메뉴, 사이즈, 우유 종류, 덜 단 음료",
        "topics": [
            "메뉴, 사이즈, 우유 종류, 덜 단 음료"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Barista",
                        "Hi, what can I get started for you?"
                    ],
                    [
                        "You",
                        "Hi. It's my first time here. Do you have any recommendations that aren't too sweet?"
                    ],
                    [
                        "Barista",
                        "Our iced latte is popular. You can add vanilla, but without syrup it's not sweet."
                    ],
                    [
                        "You",
                        "That sounds good. Could I get a medium iced latte with oat milk?"
                    ],
                    [
                        "Barista",
                        "Sure. Oat milk is a dollar extra."
                    ],
                    [
                        "You",
                        "That's fine. And no syrup, please."
                    ],
                    [
                        "Barista",
                        "For here or to go?"
                    ],
                    [
                        "You",
                        "For here. I'm going to study for a while."
                    ],
                    [
                        "Barista",
                        "Can I get a name?"
                    ],
                    [
                        "You",
                        "Jongkuk. It's spelled J-O-N-G-K-U-K."
                    ],
                    [
                        "Barista",
                        "Great. You can tap whenever you're ready."
                    ]
                ]
            },
            {
                "title": "Variation A - The barista mishears your name",
                "lines": [
                    [
                        "Barista",
                        "Can I get a name?"
                    ],
                    [
                        "You",
                        "Jongkuk. J-O-N-G-K-U-K."
                    ],
                    [
                        "Barista",
                        "John?"
                    ],
                    [
                        "You",
                        "Close, but it's Jongkuk. You can also write J.K. if that's easier."
                    ],
                    [
                        "Barista",
                        "J.K. works."
                    ],
                    [
                        "You",
                        "Perfect. Thank you."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask for less sweet",
                "lines": [
                    [
                        "You",
                        "Is the vanilla latte very sweet?"
                    ],
                    [
                        "Barista",
                        "It's pretty sweet with the regular syrup."
                    ],
                    [
                        "You",
                        "Could you do half the syrup?"
                    ],
                    [
                        "Barista",
                        "Sure."
                    ],
                    [
                        "You",
                        "Great. I like the flavor, but not too much sugar."
                    ],
                    [
                        "Barista",
                        "Half sweet, oat milk, medium."
                    ]
                ]
            },
            {
                "title": "Variation C - Your card tap fails",
                "lines": [
                    [
                        "Barista",
                        "You can tap whenever you're ready."
                    ],
                    [
                        "You",
                        "It didn't go through. Should I try inserting it?"
                    ],
                    [
                        "Barista",
                        "Yeah, try the chip."
                    ],
                    [
                        "You",
                        "Okay. Sometimes my card is picky."
                    ],
                    [
                        "Barista",
                        "No worries. It worked this time."
                    ],
                    [
                        "You",
                        "Great, thanks."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "You can also write J.K. if that's easier.",
            "Could you do half the syrup?",
            "Not too much sugar.",
            "It didn't go through.",
            "Should I try inserting it?",
            "Sometimes my card is picky."
        ]
    },
    {
        "id": "E02",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Cafe / Study Seat",
        "situation": "카페에서 공부하기 좋은 자리 묻기",
        "person": "Barista",
        "goal": "콘센트, 오래 앉아도 되는지",
        "topics": [
            "콘센트, 오래 앉아도 되는지"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Excuse me, do you mind if I ask a quick question?"
                    ],
                    [
                        "Barista",
                        "Sure."
                    ],
                    [
                        "You",
                        "Is there a good spot to work for a couple of hours?"
                    ],
                    [
                        "Barista",
                        "The back tables are usually better for studying."
                    ],
                    [
                        "You",
                        "Great. Are there outlets back there?"
                    ],
                    [
                        "Barista",
                        "There are two along the wall."
                    ],
                    [
                        "You",
                        "Perfect. Is it okay if I sit for a while after ordering?"
                    ],
                    [
                        "Barista",
                        "Yeah, that's totally fine. It may get busy around lunch, though."
                    ],
                    [
                        "You",
                        "No problem. If it gets crowded, I'll move."
                    ],
                    [
                        "Barista",
                        "Thanks. That's very considerate."
                    ],
                    [
                        "You",
                        "Thank you. I'll grab a coffee first."
                    ]
                ]
            },
            {
                "title": "Variation A - The cafe is crowded",
                "lines": [
                    [
                        "You",
                        "Is it okay if I work here for a while?"
                    ],
                    [
                        "Barista",
                        "You can, but we may need tables during lunch."
                    ],
                    [
                        "You",
                        "Of course. If it gets busy, I'll move."
                    ],
                    [
                        "Barista",
                        "Thanks for understanding."
                    ],
                    [
                        "You",
                        "No problem. I just need an hour or two."
                    ],
                    [
                        "Barista",
                        "That should be fine."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask a customer about a seat",
                "lines": [
                    [
                        "You",
                        "Excuse me, is anyone sitting here?"
                    ],
                    [
                        "Customer",
                        "No, go ahead."
                    ],
                    [
                        "You",
                        "Thanks. Also, do you mind if I use this outlet?"
                    ],
                    [
                        "Customer",
                        "Not at all."
                    ],
                    [
                        "You",
                        "Perfect. I just need to charge my laptop for a bit."
                    ],
                    [
                        "Customer",
                        "Sure."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask about Wi-Fi",
                "lines": [
                    [
                        "You",
                        "Do you have Wi-Fi here?"
                    ],
                    [
                        "Barista",
                        "Yes, the network is on the receipt."
                    ],
                    [
                        "You",
                        "Great. Is there a password?"
                    ],
                    [
                        "Barista",
                        "It's also on the receipt."
                    ],
                    [
                        "You",
                        "Perfect. I'm going to do some schoolwork for a bit."
                    ],
                    [
                        "Barista",
                        "Sounds good."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "If it gets busy, I'll move.",
            "I just need an hour or two.",
            "Is anyone sitting here?",
            "Do you mind if I use this outlet?",
            "I just need to charge my laptop.",
            "The network is on the receipt."
        ]
    },
    {
        "id": "E03",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Restaurant / Menu Question",
        "situation": "식당에서 메뉴를 잘 몰라 질문",
        "person": "Server",
        "goal": "추천, 재료, 맵기, 포장",
        "topics": [
            "추천, 재료, 맵기, 포장"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Server",
                        "Are you ready to order?"
                    ],
                    [
                        "You",
                        "Almost. I have a couple of questions because it's my first time here."
                    ],
                    [
                        "Server",
                        "Of course."
                    ],
                    [
                        "You",
                        "What would you recommend if I want something filling but not too heavy?"
                    ],
                    [
                        "Server",
                        "The grilled chicken bowl is a good option."
                    ],
                    [
                        "You",
                        "What's in it?"
                    ],
                    [
                        "Server",
                        "Rice, grilled chicken, vegetables, and a sauce on the side."
                    ],
                    [
                        "You",
                        "Is the sauce spicy?"
                    ],
                    [
                        "Server",
                        "A little, but we can make it mild."
                    ],
                    [
                        "You",
                        "Mild would be great. And if I can't finish it, can I get a box?"
                    ],
                    [
                        "Server",
                        "Absolutely."
                    ],
                    [
                        "You",
                        "Perfect. I'll have that, please."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask about ingredients",
                "lines": [
                    [
                        "You",
                        "Does this have cilantro in it?"
                    ],
                    [
                        "Server",
                        "Yes, but we can leave it out."
                    ],
                    [
                        "You",
                        "That would be great, please."
                    ],
                    [
                        "Server",
                        "Any allergies, or just preference?"
                    ],
                    [
                        "You",
                        "Just preference. I can eat it, but I don't love the taste."
                    ],
                    [
                        "Server",
                        "No problem."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask about spice level",
                "lines": [
                    [
                        "You",
                        "How spicy is this dish?"
                    ],
                    [
                        "Server",
                        "Medium spicy."
                    ],
                    [
                        "You",
                        "Is it possible to make it mild?"
                    ],
                    [
                        "Server",
                        "Yes, we can put the sauce on the side."
                    ],
                    [
                        "You",
                        "Perfect. I'd rather control the spice myself."
                    ],
                    [
                        "Server",
                        "Good idea."
                    ]
                ]
            },
            {
                "title": "Variation C - You order takeout",
                "lines": [
                    [
                        "Server",
                        "For here or to go?"
                    ],
                    [
                        "You",
                        "To go, please."
                    ],
                    [
                        "Server",
                        "Any utensils?"
                    ],
                    [
                        "You",
                        "Yes, could I get utensils and napkins?"
                    ],
                    [
                        "Server",
                        "Sure."
                    ],
                    [
                        "You",
                        "Thanks. About how long will it take?"
                    ],
                    [
                        "Server",
                        "Around fifteen minutes."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Can you leave it out?",
            "Any allergies, or just preference?",
            "How spicy is this dish?",
            "Could you put the sauce on the side?",
            "I'd rather control the spice myself.",
            "About how long will it take?"
        ]
    },
    {
        "id": "E04",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Restaurant / Wrong Order",
        "situation": "주문이 잘못 나와 정중히 말하기",
        "person": "Server",
        "goal": "바꾸기, 확인하기",
        "topics": [
            "바꾸기, 확인하기"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Excuse me, sorry to bother you."
                    ],
                    [
                        "Server",
                        "No problem. What's wrong?"
                    ],
                    [
                        "You",
                        "I think this might be a different order. I ordered the chicken bowl, but this looks like beef."
                    ],
                    [
                        "Server",
                        "Let me check. You're right, that's not yours."
                    ],
                    [
                        "You",
                        "No worries. I just wanted to make sure before eating it."
                    ],
                    [
                        "Server",
                        "I'll bring the correct one right away."
                    ],
                    [
                        "You",
                        "Thank you. I appreciate it."
                    ],
                    [
                        "Server",
                        "Sorry about the mix-up."
                    ],
                    [
                        "You",
                        "It's okay. It happens."
                    ],
                    [
                        "Server",
                        "I'll also make sure the sauce is mild."
                    ],
                    [
                        "You",
                        "Thanks, that's perfect."
                    ]
                ]
            },
            {
                "title": "Variation A - Missing item",
                "lines": [
                    [
                        "You",
                        "Excuse me, I think one item might be missing."
                    ],
                    [
                        "Server",
                        "What are you missing?"
                    ],
                    [
                        "You",
                        "I ordered a side of rice, but I don't see it here."
                    ],
                    [
                        "Server",
                        "You're right. I'll bring that out."
                    ],
                    [
                        "You",
                        "Thank you. No rush."
                    ],
                    [
                        "Server",
                        "Sorry about that."
                    ]
                ]
            },
            {
                "title": "Variation B - Wrong sauce",
                "lines": [
                    [
                        "You",
                        "Sorry, I asked for the mild sauce on the side."
                    ],
                    [
                        "Server",
                        "Oh, did it come mixed in?"
                    ],
                    [
                        "You",
                        "Yes. Is it possible to switch it?"
                    ],
                    [
                        "Server",
                        "Absolutely. I'll have the kitchen remake it."
                    ],
                    [
                        "You",
                        "Thank you. I really appreciate it."
                    ],
                    [
                        "Server",
                        "No problem."
                    ]
                ]
            },
            {
                "title": "Variation C - You are not sure if it is wrong",
                "lines": [
                    [
                        "You",
                        "I may be mistaken, but is this the chicken bowl?"
                    ],
                    [
                        "Server",
                        "Let me check. That looks like the tofu bowl."
                    ],
                    [
                        "You",
                        "Okay, I thought so. I just didn't want to assume."
                    ],
                    [
                        "Server",
                        "You're right to ask."
                    ],
                    [
                        "You",
                        "Thanks for checking."
                    ],
                    [
                        "Server",
                        "I'll bring the correct one."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I think one item might be missing.",
            "I don't see it here.",
            "No rush.",
            "Is it possible to switch it?",
            "I may be mistaken, but...",
            "I just didn't want to assume."
        ]
    },
    {
        "id": "E05",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Grocery Store / Finding Items",
        "situation": "마트에서 물건 위치 묻기",
        "person": "Staff",
        "goal": "aisle, section, self-checkout",
        "topics": [
            "aisle, section, self-checkout"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, do you know where I can find laundry detergent?"
                    ],
                    [
                        "Staff",
                        "Aisle seven, near the cleaning supplies."
                    ],
                    [
                        "You",
                        "Thanks. And do you carry small bags of rice?"
                    ],
                    [
                        "Staff",
                        "Yes, aisle four, bottom shelf."
                    ],
                    [
                        "You",
                        "Great. I'm setting up a new apartment, so I'm buying all the basics."
                    ],
                    [
                        "Staff",
                        "First big grocery trip?"
                    ],
                    [
                        "You",
                        "Exactly. I'm discovering how many small things a home needs."
                    ],
                    [
                        "Staff",
                        "Very true."
                    ],
                    [
                        "You",
                        "One more question. If I use self-checkout and something doesn't scan, can I ask for help there?"
                    ],
                    [
                        "Staff",
                        "Yes, someone will be nearby."
                    ],
                    [
                        "You",
                        "Perfect. Thank you."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask where something specific is",
                "lines": [
                    [
                        "You",
                        "Hi, where can I find trash bags?"
                    ],
                    [
                        "Staff",
                        "Aisle six, near the cleaning supplies."
                    ],
                    [
                        "You",
                        "Great. Are the smaller kitchen bags there too?"
                    ],
                    [
                        "Staff",
                        "Yes, same aisle, middle shelf."
                    ],
                    [
                        "You",
                        "Perfect. I'm still learning the store layout."
                    ],
                    [
                        "Staff",
                        "No problem."
                    ]
                ]
            },
            {
                "title": "Variation B - Self-checkout issue",
                "lines": [
                    [
                        "You",
                        "Excuse me, this item isn't scanning."
                    ],
                    [
                        "Staff",
                        "Let me take a look."
                    ],
                    [
                        "You",
                        "I tried the barcode twice, but it keeps giving an error."
                    ],
                    [
                        "Staff",
                        "Sometimes that one needs manual entry."
                    ],
                    [
                        "You",
                        "Got it. Thanks for helping."
                    ],
                    [
                        "Staff",
                        "You're all set."
                    ]
                ]
            },
            {
                "title": "Variation C - You forgot bags",
                "lines": [
                    [
                        "Cashier",
                        "Do you need bags?"
                    ],
                    [
                        "You",
                        "Yes, please. I forgot to bring reusable ones."
                    ],
                    [
                        "Cashier",
                        "Paper or plastic?"
                    ],
                    [
                        "You",
                        "Paper is fine. Two should be enough."
                    ],
                    [
                        "Cashier",
                        "Sure."
                    ],
                    [
                        "You",
                        "Thanks. I'm still building my grocery routine."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I'm still learning the store layout.",
            "This item isn't scanning.",
            "It keeps giving an error.",
            "Manual entry.",
            "I forgot to bring reusable bags.",
            "Two should be enough."
        ]
    },
    {
        "id": "E06",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Store / Return Or Exchange",
        "situation": "환불, 교환 요청",
        "person": "Cashier",
        "goal": "receipt, return policy",
        "topics": [
            "receipt, return policy"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Cashier",
                        "Hi, how can I help?"
                    ],
                    [
                        "You",
                        "Hi, I'd like to return this if possible."
                    ],
                    [
                        "Cashier",
                        "Do you have the receipt?"
                    ],
                    [
                        "You",
                        "Yes, it's right here. I bought it yesterday, but it doesn't fit what I need."
                    ],
                    [
                        "Cashier",
                        "No problem. Was it opened?"
                    ],
                    [
                        "You",
                        "I opened the box, but I didn't use the item."
                    ],
                    [
                        "Cashier",
                        "That's fine. We can refund it to the original card."
                    ],
                    [
                        "You",
                        "Great. Is there a restocking fee?"
                    ],
                    [
                        "Cashier",
                        "Not for this item."
                    ],
                    [
                        "You",
                        "Good to know. Thank you."
                    ],
                    [
                        "Cashier",
                        "You'll see the refund in a few business days."
                    ],
                    [
                        "You",
                        "Perfect. I appreciate your help."
                    ]
                ]
            },
            {
                "title": "Variation A - You want an exchange",
                "lines": [
                    [
                        "Cashier",
                        "Are you returning this today?"
                    ],
                    [
                        "You",
                        "If possible, I'd like to exchange it for a different size."
                    ],
                    [
                        "Cashier",
                        "Do you have the receipt?"
                    ],
                    [
                        "You",
                        "Yes, right here."
                    ],
                    [
                        "Cashier",
                        "Great. The same item is in aisle three."
                    ],
                    [
                        "You",
                        "Perfect. Should I bring the new one back here?"
                    ]
                ]
            },
            {
                "title": "Variation B - No receipt",
                "lines": [
                    [
                        "You",
                        "I don't have the receipt, but I bought it with this card."
                    ],
                    [
                        "Cashier",
                        "We may be able to look it up."
                    ],
                    [
                        "You",
                        "That would be great."
                    ],
                    [
                        "Cashier",
                        "When did you purchase it?"
                    ],
                    [
                        "You",
                        "Two days ago, sometime in the afternoon."
                    ],
                    [
                        "Cashier",
                        "Okay, let me check."
                    ]
                ]
            },
            {
                "title": "Variation C - Refund timing",
                "lines": [
                    [
                        "You",
                        "How long does the refund usually take?"
                    ],
                    [
                        "Cashier",
                        "A few business days."
                    ],
                    [
                        "You",
                        "Okay. Will it go back to the same card?"
                    ],
                    [
                        "Cashier",
                        "Yes, the original payment method."
                    ],
                    [
                        "You",
                        "Great. Could I get a confirmation receipt?"
                    ],
                    [
                        "Cashier",
                        "Of course."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I'd like to exchange it for a different size.",
            "Should I bring the new one back here?",
            "I bought it with this card.",
            "We may be able to look it up.",
            "The original payment method.",
            "Could I get a confirmation receipt?"
        ]
    },
    {
        "id": "E07",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Cafe / Restaurant / Grocery / Pharmacy",
        "place": "Pharmacy / Minor Symptoms",
        "situation": "약국에서 증상 설명하고 약 사기",
        "person": "Pharmacist",
        "goal": "감기, 소화, 통증, 복용법",
        "topics": [
            "감기, 소화, 통증, 복용법"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Pharmacist",
                        "Hi, what symptoms are you having?"
                    ],
                    [
                        "You",
                        "I have a sore throat, a runny nose, and some congestion."
                    ],
                    [
                        "Pharmacist",
                        "Any fever?"
                    ],
                    [
                        "You",
                        "Not that I can tell. I mostly feel tired and congested."
                    ],
                    [
                        "Pharmacist",
                        "Do you need something non-drowsy?"
                    ],
                    [
                        "You",
                        "Yes, please. I have class during the day."
                    ],
                    [
                        "Pharmacist",
                        "This one is non-drowsy. Take it every twelve hours."
                    ],
                    [
                        "You",
                        "Can I take it with ibuprofen if I get a headache?"
                    ],
                    [
                        "Pharmacist",
                        "Yes, just follow the dosage on both labels."
                    ],
                    [
                        "You",
                        "Got it. And this is over the counter, right?"
                    ],
                    [
                        "Pharmacist",
                        "Yes."
                    ],
                    [
                        "You",
                        "Thank you. That's exactly what I needed."
                    ]
                ]
            },
            {
                "title": "Variation A - Allergy medicine",
                "lines": [
                    [
                        "Pharmacist",
                        "What symptoms are you having?"
                    ],
                    [
                        "You",
                        "Sneezing, itchy eyes, and congestion."
                    ],
                    [
                        "Pharmacist",
                        "Sounds like allergies. Do you need non-drowsy medicine?"
                    ],
                    [
                        "You",
                        "Yes. I need to read and go to class."
                    ],
                    [
                        "Pharmacist",
                        "Try this one during the day."
                    ],
                    [
                        "You",
                        "Thank you. Should I take it with food?"
                    ]
                ]
            },
            {
                "title": "Variation B - Stomach issue",
                "lines": [
                    [
                        "You",
                        "I have an upset stomach and some nausea."
                    ],
                    [
                        "Pharmacist",
                        "How long has it been going on?"
                    ],
                    [
                        "You",
                        "Since last night."
                    ],
                    [
                        "Pharmacist",
                        "Any severe pain or fever?"
                    ],
                    [
                        "You",
                        "No, just discomfort."
                    ],
                    [
                        "Pharmacist",
                        "This may help, but see a doctor if it gets worse."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask about drowsiness",
                "lines": [
                    [
                        "You",
                        "Does this make people sleepy?"
                    ],
                    [
                        "Pharmacist",
                        "It can, yes."
                    ],
                    [
                        "You",
                        "Then maybe I should avoid it during the day."
                    ],
                    [
                        "Pharmacist",
                        "I would take it at night first."
                    ],
                    [
                        "You",
                        "Good to know. I have a seminar tomorrow morning."
                    ],
                    [
                        "Pharmacist",
                        "Then choose the non-drowsy option."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Sneezing, itchy eyes, and congestion.",
            "Do you need non-drowsy medicine?",
            "Should I take it with food?",
            "How long has it been going on?",
            "See a doctor if it gets worse.",
            "Does this make people sleepy?"
        ]
    },
    {
        "id": "F01",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / CharlieCard",
        "situation": "CharlieCard / 교통카드 관련 질문",
        "person": "Staff",
        "goal": "충전, 사용법, fare",
        "topics": [
            "충전, 사용법, fare"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, I'm new to Boston. Can I ask about the CharlieCard?"
                    ],
                    [
                        "Staff",
                        "Sure. What do you need help with?"
                    ],
                    [
                        "You",
                        "I want to take the subway and bus. Do I need a physical card, or can I use my phone?"
                    ],
                    [
                        "Staff",
                        "You can use a CharlieCard, tickets, or some contactless payment options depending on the station."
                    ],
                    [
                        "You",
                        "If I get a CharlieCard, how do I add money?"
                    ],
                    [
                        "Staff",
                        "Use the fare machine. Choose add value, tap the card, and pay."
                    ],
                    [
                        "You",
                        "Does the same card work for buses?"
                    ],
                    [
                        "Staff",
                        "Yes, it works on the subway and buses."
                    ],
                    [
                        "You",
                        "Great. Is there a transfer discount?"
                    ],
                    [
                        "Staff",
                        "Usually, yes, within a certain time window."
                    ],
                    [
                        "You",
                        "Perfect. I'll add some value now."
                    ]
                ]
            },
            {
                "title": "Variation A - The fare machine is confusing",
                "lines": [
                    [
                        "You",
                        "Excuse me, I'm trying to add value to this card."
                    ],
                    [
                        "Staff",
                        "Sure. Tap the card first."
                    ],
                    [
                        "You",
                        "Here?"
                    ],
                    [
                        "Staff",
                        "Yes, then choose add value."
                    ],
                    [
                        "You",
                        "Got it. I was starting from the wrong screen."
                    ],
                    [
                        "Staff",
                        "Happens all the time."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask about monthly passes",
                "lines": [
                    [
                        "You",
                        "Is there a monthly pass for students?"
                    ],
                    [
                        "Staff",
                        "Some schools offer discounted passes."
                    ],
                    [
                        "You",
                        "Should I ask my university, then?"
                    ],
                    [
                        "Staff",
                        "Yes, check with the student office."
                    ],
                    [
                        "You",
                        "Great. For now, I'll just add regular value."
                    ],
                    [
                        "Staff",
                        "That works."
                    ]
                ]
            },
            {
                "title": "Variation C - Your card does not tap",
                "lines": [
                    [
                        "You",
                        "The gate isn't reading my card."
                    ],
                    [
                        "Staff",
                        "Try tapping it flat against the reader."
                    ],
                    [
                        "You",
                        "Like this?"
                    ],
                    [
                        "Staff",
                        "Yes. There it goes."
                    ],
                    [
                        "You",
                        "Thanks. I was tapping too quickly."
                    ],
                    [
                        "Staff",
                        "Happens when you're in a hurry."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I'm trying to add value.",
            "I was starting from the wrong screen.",
            "Is there a monthly pass?",
            "Check with the student office.",
            "The gate isn't reading my card.",
            "Try tapping it flat."
        ]
    },
    {
        "id": "F02",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Route Question",
        "situation": "지하철이나 버스 노선 묻기",
        "person": "Passenger",
        "goal": "어느 방향, 어디서 갈아타는지",
        "topics": [
            "어느 방향, 어디서 갈아타는지"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Excuse me, am I on the right platform for Kendall Square?"
                    ],
                    [
                        "Passenger",
                        "You need the Red Line toward Alewife."
                    ],
                    [
                        "You",
                        "Toward Alewife, okay. Do I need to transfer?"
                    ],
                    [
                        "Passenger",
                        "No, Kendall is on the same line."
                    ],
                    [
                        "You",
                        "Great. How many stops is it from here?"
                    ],
                    [
                        "Passenger",
                        "Three stops, I think."
                    ],
                    [
                        "You",
                        "Thanks. I always get nervous about the direction."
                    ],
                    [
                        "Passenger",
                        "Everyone does at first."
                    ],
                    [
                        "You",
                        "So if the train says Alewife, I'm good."
                    ],
                    [
                        "Passenger",
                        "Exactly."
                    ],
                    [
                        "You",
                        "Perfect. Thanks for the help."
                    ]
                ]
            },
            {
                "title": "Variation A - You are on the wrong side",
                "lines": [
                    [
                        "You",
                        "Is this the train toward Alewife?"
                    ],
                    [
                        "Passenger",
                        "No, this side goes toward Ashmont and Braintree."
                    ],
                    [
                        "You",
                        "Oh, so I need the other platform?"
                    ],
                    [
                        "Passenger",
                        "Yes, go upstairs and cross over."
                    ],
                    [
                        "You",
                        "Thank you. I'm glad I asked."
                    ],
                    [
                        "Passenger",
                        "Better now than after three stops."
                    ]
                ]
            },
            {
                "title": "Variation B - You need a bus transfer",
                "lines": [
                    [
                        "You",
                        "Do I take the subway all the way, or transfer to a bus?"
                    ],
                    [
                        "Passenger",
                        "Take the Red Line two stops, then the 1 bus."
                    ],
                    [
                        "You",
                        "Two stops, then the 1 bus. Got it."
                    ],
                    [
                        "Passenger",
                        "The bus stop is right outside the station."
                    ],
                    [
                        "You",
                        "Thanks. That makes it much clearer."
                    ],
                    [
                        "Passenger",
                        "No problem."
                    ]
                ]
            },
            {
                "title": "Variation C - Service is delayed",
                "lines": [
                    [
                        "You",
                        "Do you know why the train is delayed?"
                    ],
                    [
                        "Passenger",
                        "They announced a signal problem."
                    ],
                    [
                        "You",
                        "Is there another way to get to Kendall?"
                    ],
                    [
                        "Passenger",
                        "You could take the bus, but it may be slower."
                    ],
                    [
                        "You",
                        "I might wait a few more minutes, then decide."
                    ],
                    [
                        "Passenger",
                        "That's what I'm doing too."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Is this the train toward...?",
            "I need the other platform.",
            "I'm glad I asked.",
            "Do I transfer to a bus?",
            "The bus stop is right outside.",
            "I might wait a few more minutes."
        ]
    },
    {
        "id": "F03",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Lost On The Street",
        "situation": "길을 잃어서 행인에게 묻기",
        "person": "Passerby",
        "goal": "가장 가까운 역, 출구, 방향",
        "topics": [
            "가장 가까운 역, 출구, 방향"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Excuse me, quick question. Do you know where the closest T station is?"
                    ],
                    [
                        "Passerby",
                        "Yeah, keep going straight for two blocks, then take a left."
                    ],
                    [
                        "You",
                        "Straight for two blocks, then left?"
                    ],
                    [
                        "Passerby",
                        "Exactly. You'll see the entrance near the pharmacy."
                    ],
                    [
                        "You",
                        "Great. Is it walkable from here?"
                    ],
                    [
                        "Passerby",
                        "Yes, about eight minutes."
                    ],
                    [
                        "You",
                        "Perfect. I'm new to Boston, so I'm still getting my bearings."
                    ],
                    [
                        "Passerby",
                        "No worries. The streets can be confusing."
                    ],
                    [
                        "You",
                        "I noticed. They don't really follow a grid."
                    ],
                    [
                        "Passerby",
                        "Not at all."
                    ],
                    [
                        "You",
                        "Thanks. I appreciate it."
                    ]
                ]
            },
            {
                "title": "Variation A - Directions are too fast",
                "lines": [
                    [
                        "Passerby",
                        "Go straight, left at the church, then right after the bank."
                    ],
                    [
                        "You",
                        "Sorry, could you slow that down for me?"
                    ],
                    [
                        "Passerby",
                        "Sure. Straight for two blocks first."
                    ],
                    [
                        "You",
                        "Straight for two blocks."
                    ],
                    [
                        "Passerby",
                        "Then left at the church."
                    ],
                    [
                        "You",
                        "Perfect. That's the part I needed."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask if it is safe to walk",
                "lines": [
                    [
                        "You",
                        "Is it okay to walk there from here?"
                    ],
                    [
                        "Passerby",
                        "During the day, yes."
                    ],
                    [
                        "You",
                        "What about later at night?"
                    ],
                    [
                        "Passerby",
                        "I'd stay on the main road or take a ride."
                    ],
                    [
                        "You",
                        "Good to know. I'm still learning the area."
                    ],
                    [
                        "Passerby",
                        "That's smart."
                    ]
                ]
            },
            {
                "title": "Variation C - Phone battery is low",
                "lines": [
                    [
                        "You",
                        "My phone battery is almost dead. Is the station close?"
                    ],
                    [
                        "Passerby",
                        "Yes, about five minutes."
                    ],
                    [
                        "You",
                        "Could you point me in the right direction?"
                    ],
                    [
                        "Passerby",
                        "Go straight until the big intersection, then left."
                    ],
                    [
                        "You",
                        "Thank you. I'll write that down before my phone dies."
                    ],
                    [
                        "Passerby",
                        "Good luck."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Could you slow that down for me?",
            "That's the part I needed.",
            "Is it okay to walk there?",
            "Stay on the main road.",
            "My phone battery is almost dead.",
            "Could you point me in the right direction?"
        ]
    },
    {
        "id": "F04",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Uber Pickup",
        "situation": "우버/리프트 기사와 픽업 위치 확인",
        "person": "Driver",
        "goal": "어디 서 있는지, 차량 확인",
        "topics": [
            "어디 서 있는지, 차량 확인"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Driver",
                        "Hi, is this Jongkuk?"
                    ],
                    [
                        "You",
                        "Yes, that's me. Are you in the silver Toyota?"
                    ],
                    [
                        "Driver",
                        "Yes. I'm by the main entrance."
                    ],
                    [
                        "You",
                        "I think I'm at the side entrance. I can see a pharmacy across the street."
                    ],
                    [
                        "Driver",
                        "Okay, stay there. I'll pull around."
                    ],
                    [
                        "You",
                        "Thank you. I'm wearing a black jacket and carrying a backpack."
                    ],
                    [
                        "Driver",
                        "Got it. I see you now."
                    ],
                    [
                        "You",
                        "Great. Just to confirm, the destination is near the architecture building, right?"
                    ],
                    [
                        "Driver",
                        "Yes, that's what I have in the app."
                    ],
                    [
                        "You",
                        "Perfect. Thanks for finding me."
                    ]
                ]
            },
            {
                "title": "Variation A - Wrong pickup spot",
                "lines": [
                    [
                        "Driver",
                        "I'm at the pickup spot, but I don't see you."
                    ],
                    [
                        "You",
                        "I may be at the wrong entrance. I'm near the blue sign."
                    ],
                    [
                        "Driver",
                        "I see two entrances. Can you walk toward the main road?"
                    ],
                    [
                        "You",
                        "Yes, I'll head there now."
                    ],
                    [
                        "Driver",
                        "I'll wait by the corner."
                    ],
                    [
                        "You",
                        "Thank you. Sorry for the confusion."
                    ]
                ]
            },
            {
                "title": "Variation B - You confirm the car",
                "lines": [
                    [
                        "You",
                        "Hi, are you Sam?"
                    ],
                    [
                        "Driver",
                        "Yes, for Jongkuk?"
                    ],
                    [
                        "You",
                        "That's me. Just confirming the plate ends in 42, right?"
                    ],
                    [
                        "Driver",
                        "Correct."
                    ],
                    [
                        "You",
                        "Great. I always like to double-check."
                    ],
                    [
                        "Driver",
                        "Good habit."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask for a quiet ride",
                "lines": [
                    [
                        "Driver",
                        "How's your day going?"
                    ],
                    [
                        "You",
                        "Pretty good, just a little tired."
                    ],
                    [
                        "Driver",
                        "Long day?"
                    ],
                    [
                        "You",
                        "Yes. Would it be okay if I had a quiet ride?"
                    ],
                    [
                        "Driver",
                        "Of course."
                    ],
                    [
                        "You",
                        "Thanks. I really appreciate it."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I may be at the wrong entrance.",
            "I'm near the blue sign.",
            "Sorry for the confusion.",
            "Just confirming the plate.",
            "I always like to double-check.",
            "Would it be okay if I had a quiet ride?"
        ]
    },
    {
        "id": "F05",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Running Late",
        "situation": "수업에 늦을 것 같아 메시지",
        "person": "Professor",
        "goal": "지각 설명, 도착 예정 시간",
        "topics": [
            "지각 설명, 도착 예정 시간"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi Professor, I'm sorry, but I may be about ten minutes late today."
                    ],
                    [
                        "Professor",
                        "Thanks for letting me know. Is everything okay?"
                    ],
                    [
                        "You",
                        "Yes. The Red Line is delayed, and I'm waiting for the next train now."
                    ],
                    [
                        "Professor",
                        "Understood."
                    ],
                    [
                        "You",
                        "I expect to arrive around 9:40. I'll come in quietly if class has already started."
                    ],
                    [
                        "Professor",
                        "That's fine."
                    ],
                    [
                        "You",
                        "Thank you. I'll catch up on anything I miss."
                    ],
                    [
                        "Professor",
                        "Safe travels."
                    ],
                    [
                        "You",
                        "Thanks. I appreciate your understanding."
                    ]
                ]
            },
            {
                "title": "Variation A - Texting a classmate",
                "lines": [
                    [
                        "You",
                        "Hey, I'm running about ten minutes late."
                    ],
                    [
                        "Classmate",
                        "No worries. Do you want me to save you a seat?"
                    ],
                    [
                        "You",
                        "That would be amazing, if it's not awkward."
                    ],
                    [
                        "Classmate",
                        "Not awkward. I'll grab one near the aisle."
                    ],
                    [
                        "You",
                        "Thank you. I'll come in quietly."
                    ],
                    [
                        "Classmate",
                        "See you soon."
                    ]
                ]
            },
            {
                "title": "Variation B - Telling a professor after arrival",
                "lines": [
                    [
                        "You",
                        "Professor, I'm sorry I came in late."
                    ],
                    [
                        "Professor",
                        "Thanks for coming in quietly."
                    ],
                    [
                        "You",
                        "The train was delayed, but I should have left earlier."
                    ],
                    [
                        "Professor",
                        "It happens."
                    ],
                    [
                        "You",
                        "I'll check with a classmate for what I missed."
                    ],
                    [
                        "Professor",
                        "Good."
                    ]
                ]
            },
            {
                "title": "Variation C - You may miss the meeting",
                "lines": [
                    [
                        "You",
                        "I'm sorry, but I may not make it on time."
                    ],
                    [
                        "Classmate",
                        "How late are you?"
                    ],
                    [
                        "You",
                        "At least thirty minutes. The bus hasn't arrived."
                    ],
                    [
                        "Classmate",
                        "Should we start without you?"
                    ],
                    [
                        "You",
                        "Yes, please start. I'll join as soon as I can."
                    ],
                    [
                        "Classmate",
                        "Okay, we'll take notes."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I'm running about ten minutes late.",
            "Could you save me a seat?",
            "I'll come in quietly.",
            "I should have left earlier.",
            "I may not make it on time.",
            "Please start without me."
        ]
    },
    {
        "id": "F06",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Bad Weather",
        "situation": "눈, 비 때문에 이동이 어려움",
        "person": "Classmate",
        "goal": "날씨 때문에 늦거나 취소",
        "topics": [
            "날씨 때문에 늦거나 취소"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Hi, I wanted to let you know the weather is slowing everything down."
                    ],
                    [
                        "Classmate",
                        "Yeah, the rain is terrible. Are you on your way?"
                    ],
                    [
                        "You",
                        "I'm trying, but the bus is delayed and the sidewalks are flooded."
                    ],
                    [
                        "Classmate",
                        "Do you think you'll make it?"
                    ],
                    [
                        "You",
                        "I might be late by twenty minutes. If the meeting can start without me, please go ahead."
                    ],
                    [
                        "Classmate",
                        "We can wait a little, but don't rush if it's unsafe."
                    ],
                    [
                        "You",
                        "Thanks. If it gets worse, I may join by Zoom instead."
                    ],
                    [
                        "Classmate",
                        "That works."
                    ],
                    [
                        "You",
                        "I'll update you in ten minutes."
                    ],
                    [
                        "Classmate",
                        "Sounds good. Stay dry."
                    ]
                ]
            },
            {
                "title": "Variation A - Snow changes the plan",
                "lines": [
                    [
                        "Classmate",
                        "Are we still meeting in person?"
                    ],
                    [
                        "You",
                        "I'm not sure. The snow is getting heavy near my apartment."
                    ],
                    [
                        "Classmate",
                        "Same here."
                    ],
                    [
                        "You",
                        "Would you be open to switching to Zoom?"
                    ],
                    [
                        "Classmate",
                        "Yes, that seems smarter."
                    ],
                    [
                        "You",
                        "Great. I'll send a link."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask for extra time",
                "lines": [
                    [
                        "You",
                        "I'm on my way, but the sidewalks are icy."
                    ],
                    [
                        "Classmate",
                        "Don't rush."
                    ],
                    [
                        "You",
                        "Thanks. I may need an extra fifteen minutes."
                    ],
                    [
                        "Classmate",
                        "That's fine. Safety first."
                    ],
                    [
                        "You",
                        "I appreciate it. I'll update you when I'm close."
                    ],
                    [
                        "Classmate",
                        "Sounds good."
                    ]
                ]
            },
            {
                "title": "Variation C - Class is cancelled",
                "lines": [
                    [
                        "Professor",
                        "Class is cancelled because of the storm."
                    ],
                    [
                        "You",
                        "Thank you for letting us know."
                    ],
                    [
                        "Professor",
                        "Please check the course site for an updated assignment."
                    ],
                    [
                        "You",
                        "Will the deadline also move?"
                    ],
                    [
                        "Professor",
                        "Yes, by one day."
                    ],
                    [
                        "You",
                        "Great. I'll check the update."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "The snow is getting heavy.",
            "Would you be open to switching to Zoom?",
            "The sidewalks are icy.",
            "I may need an extra fifteen minutes.",
            "Safety first.",
            "Will the deadline also move?"
        ]
    },
    {
        "id": "F07",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Transportation / Getting Around Boston",
        "place": "Transportation / Safe Route At Night",
        "situation": "밤에 안전한 길이나 이동 방법 묻기",
        "person": "Classmate",
        "goal": "safe route, late-night transport",
        "topics": [
            "safe route, late-night transport"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "You",
                        "Do you know the safest way to get home from here at night?"
                    ],
                    [
                        "Classmate",
                        "Where are you heading?"
                    ],
                    [
                        "You",
                        "Toward Cambridge. I can take the T, but I'm not sure about the walk from the station."
                    ],
                    [
                        "Classmate",
                        "The T is okay, but if it's very late, I would take a rideshare from the station."
                    ],
                    [
                        "You",
                        "That makes sense. Is this street okay to walk on?"
                    ],
                    [
                        "Classmate",
                        "It's usually fine, but stay on the main road. Don't cut through the park at night."
                    ],
                    [
                        "You",
                        "Good to know. I don't want to overreact, but I'm still learning the area."
                    ],
                    [
                        "Classmate",
                        "That's reasonable."
                    ],
                    [
                        "You",
                        "Thanks. I'll take the main road or call a ride if it feels too quiet."
                    ],
                    [
                        "Classmate",
                        "Smart plan."
                    ]
                ]
            },
            {
                "title": "Variation A - Asking campus security",
                "lines": [
                    [
                        "You",
                        "Hi, is there a campus shuttle at this hour?"
                    ],
                    [
                        "Security",
                        "Yes, it runs until midnight."
                    ],
                    [
                        "You",
                        "Great. Where does it pick up?"
                    ],
                    [
                        "Security",
                        "Outside the main entrance."
                    ],
                    [
                        "You",
                        "Is it okay to wait there alone?"
                    ],
                    [
                        "Security",
                        "Yes, it's well lit, and we can see the area from here."
                    ]
                ]
            },
            {
                "title": "Variation B - You ask a classmate to walk together",
                "lines": [
                    [
                        "You",
                        "Are you heading toward the station?"
                    ],
                    [
                        "Classmate",
                        "Yes."
                    ],
                    [
                        "You",
                        "Would you mind if I walked with you? I'm still learning the area at night."
                    ],
                    [
                        "Classmate",
                        "Of course."
                    ],
                    [
                        "You",
                        "Thanks. I don't feel unsafe exactly, just unfamiliar."
                    ],
                    [
                        "Classmate",
                        "Totally understandable."
                    ]
                ]
            },
            {
                "title": "Variation C - You decide to call a ride",
                "lines": [
                    [
                        "Classmate",
                        "Are you taking the T?"
                    ],
                    [
                        "You",
                        "I think I'll call a ride tonight."
                    ],
                    [
                        "Classmate",
                        "Probably a good idea. It's late."
                    ],
                    [
                        "You",
                        "Yeah, I'd rather spend a little more and feel comfortable."
                    ],
                    [
                        "Classmate",
                        "Makes sense."
                    ],
                    [
                        "You",
                        "I'll wait inside until the driver arrives."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Is there a campus shuttle at this hour?",
            "Where does it pick up?",
            "Would you mind if I walked with you?",
            "I'm still learning the area at night.",
            "I'd rather feel comfortable.",
            "I'll wait inside until the driver arrives."
        ]
    },
    {
        "id": "G01",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Clinic / Appointment",
        "situation": "병원/클리닉 예약",
        "person": "Receptionist",
        "goal": "증상, 가능한 시간, 보험",
        "topics": [
            "증상, 가능한 시간, 보험"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Receptionist",
                        "Clinic front desk. How can I help you?"
                    ],
                    [
                        "You",
                        "Hi, I'd like to make an appointment. I'm not feeling well."
                    ],
                    [
                        "Receptionist",
                        "What symptoms are you having?"
                    ],
                    [
                        "You",
                        "I've had a sore throat and a fever since yesterday."
                    ],
                    [
                        "Receptionist",
                        "Do you have insurance?"
                    ],
                    [
                        "You",
                        "Yes, through my university. I can bring the card or upload it if needed."
                    ],
                    [
                        "Receptionist",
                        "We have an opening tomorrow at 10:30."
                    ],
                    [
                        "You",
                        "That works. Is there anything I should bring besides my insurance card and ID?"
                    ],
                    [
                        "Receptionist",
                        "Bring a list of any medications you're taking."
                    ],
                    [
                        "You",
                        "Okay. If my symptoms get worse tonight, should I go to urgent care?"
                    ],
                    [
                        "Receptionist",
                        "Yes, especially if you have trouble breathing or a high fever."
                    ],
                    [
                        "You",
                        "Understood. Thank you."
                    ]
                ]
            },
            {
                "title": "Variation A - Same-day appointment",
                "lines": [
                    [
                        "You",
                        "Do you have any same-day appointments?"
                    ],
                    [
                        "Receptionist",
                        "We're fully booked today."
                    ],
                    [
                        "You",
                        "Is there a cancellation list?"
                    ],
                    [
                        "Receptionist",
                        "Yes, I can add you."
                    ],
                    [
                        "You",
                        "Thank you. If nothing opens, should I go to urgent care?"
                    ],
                    [
                        "Receptionist",
                        "If symptoms get worse, yes."
                    ]
                ]
            },
            {
                "title": "Variation B - Insurance confusion",
                "lines": [
                    [
                        "Receptionist",
                        "What insurance do you have?"
                    ],
                    [
                        "You",
                        "It's through my university, but I'm still learning how it works."
                    ],
                    [
                        "Receptionist",
                        "Do you have the card or member ID?"
                    ],
                    [
                        "You",
                        "I have the digital card on my phone."
                    ],
                    [
                        "Receptionist",
                        "That should work."
                    ],
                    [
                        "You",
                        "Great. Please let me know if anything is missing."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask what to bring",
                "lines": [
                    [
                        "You",
                        "What should I bring to the appointment?"
                    ],
                    [
                        "Receptionist",
                        "ID, insurance card, and a list of medications."
                    ],
                    [
                        "You",
                        "I don't take regular medication. Should I still write down anything over the counter?"
                    ],
                    [
                        "Receptionist",
                        "Yes, if you've taken something recently."
                    ],
                    [
                        "You",
                        "Got it. I'll make a short list."
                    ],
                    [
                        "Receptionist",
                        "Perfect."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Do you have any same-day appointments?",
            "Is there a cancellation list?",
            "It's through my university.",
            "I have the digital card on my phone.",
            "Please let me know if anything is missing.",
            "Should I write down anything over the counter?"
        ]
    },
    {
        "id": "G02",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Clinic / Doctor Visit",
        "situation": "진료실에서 증상 설명",
        "person": "Doctor",
        "goal": "통증, 기간, 정도, 약 복용 여부",
        "topics": [
            "통증, 기간, 정도, 약 복용 여부"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Doctor",
                        "What brings you in today?"
                    ],
                    [
                        "You",
                        "I've had stomach pain for two days, and it hasn't really improved."
                    ],
                    [
                        "Doctor",
                        "Where is the pain?"
                    ],
                    [
                        "You",
                        "Mostly here, in the lower right area. It's not sharp all the time, but it comes and goes."
                    ],
                    [
                        "Doctor",
                        "On a scale of one to ten, how bad is it?"
                    ],
                    [
                        "You",
                        "Maybe a four normally, but sometimes it feels like a six."
                    ],
                    [
                        "Doctor",
                        "Any fever, nausea, or vomiting?"
                    ],
                    [
                        "You",
                        "A little nausea, but no vomiting. I don't think I have a fever."
                    ],
                    [
                        "Doctor",
                        "Have you taken any medication?"
                    ],
                    [
                        "You",
                        "Just some over-the-counter stomach medicine yesterday, but it didn't help much."
                    ],
                    [
                        "Doctor",
                        "Okay. We'll examine you and decide the next step."
                    ],
                    [
                        "You",
                        "Thank you. I wanted to get it checked before it got worse."
                    ]
                ]
            },
            {
                "title": "Variation A - You describe pain carefully",
                "lines": [
                    [
                        "Doctor",
                        "Can you describe the pain?"
                    ],
                    [
                        "You",
                        "It's a dull pain most of the time, but sometimes it becomes sharper."
                    ],
                    [
                        "Doctor",
                        "Does anything make it worse?"
                    ],
                    [
                        "You",
                        "Walking fast seems to make it worse."
                    ],
                    [
                        "Doctor",
                        "Anything make it better?"
                    ],
                    [
                        "You",
                        "Resting helps a little, but it doesn't go away completely."
                    ]
                ]
            },
            {
                "title": "Variation B - You don't know a medical word",
                "lines": [
                    [
                        "Doctor",
                        "Any dizziness or shortness of breath?"
                    ],
                    [
                        "You",
                        "Sorry, what does dizziness mean exactly?"
                    ],
                    [
                        "Doctor",
                        "Feeling lightheaded, like you might faint."
                    ],
                    [
                        "You",
                        "I see. No, not really."
                    ],
                    [
                        "Doctor",
                        "Okay."
                    ],
                    [
                        "You",
                        "Thanks for explaining the word."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask about next steps",
                "lines": [
                    [
                        "Doctor",
                        "I don't think it's serious, but we should monitor it."
                    ],
                    [
                        "You",
                        "What should I watch for?"
                    ],
                    [
                        "Doctor",
                        "Fever, worsening pain, or vomiting."
                    ],
                    [
                        "You",
                        "If that happens, should I come back or go to urgent care?"
                    ],
                    [
                        "Doctor",
                        "Go to urgent care if it's severe."
                    ],
                    [
                        "You",
                        "Understood."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "It's a dull pain.",
            "Sometimes it becomes sharper.",
            "Walking fast makes it worse.",
            "What does that mean exactly?",
            "Feeling lightheaded.",
            "What should I watch for?"
        ]
    },
    {
        "id": "G03",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Bank / Opening Account",
        "situation": "은행 계좌 개설",
        "person": "Banker",
        "goal": "ID, 주소, debit card, transfer",
        "topics": [
            "ID, 주소, debit card, transfer"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Banker",
                        "Hi, what brings you in today?"
                    ],
                    [
                        "You",
                        "I'd like to open a checking account. I just moved here for graduate school."
                    ],
                    [
                        "Banker",
                        "Do you have a passport and proof of address?"
                    ],
                    [
                        "You",
                        "I have my passport. For address, I only have temporary housing right now."
                    ],
                    [
                        "Banker",
                        "A lease or school document may work."
                    ],
                    [
                        "You",
                        "I have my admission letter and a housing confirmation email. Would either of those help?"
                    ],
                    [
                        "Banker",
                        "Let's take a look."
                    ],
                    [
                        "You",
                        "Thank you. I also wanted to ask about debit cards and international transfers."
                    ],
                    [
                        "Banker",
                        "We can issue a debit card and explain transfer fees."
                    ],
                    [
                        "You",
                        "Great. I'd like to understand the fees before I commit to anything."
                    ],
                    [
                        "Banker",
                        "Absolutely. We'll go through them line by line."
                    ]
                ]
            },
            {
                "title": "Variation A - Temporary address problem",
                "lines": [
                    [
                        "Banker",
                        "Do you have proof of address?"
                    ],
                    [
                        "You",
                        "I only have temporary housing right now."
                    ],
                    [
                        "Banker",
                        "Do you have a lease or official letter?"
                    ],
                    [
                        "You",
                        "I have a housing confirmation email from the building."
                    ],
                    [
                        "Banker",
                        "That may work. Let's check."
                    ],
                    [
                        "You",
                        "Thank you. I'm still getting permanent documents set up."
                    ]
                ]
            },
            {
                "title": "Variation B - Asking about fees",
                "lines": [
                    [
                        "You",
                        "Are there monthly fees for this checking account?"
                    ],
                    [
                        "Banker",
                        "There can be, unless you meet certain conditions."
                    ],
                    [
                        "You",
                        "Could you explain those conditions slowly?"
                    ],
                    [
                        "Banker",
                        "Sure. A minimum balance or direct deposit can waive the fee."
                    ],
                    [
                        "You",
                        "That's helpful. I don't want surprise charges."
                    ],
                    [
                        "Banker",
                        "Of course."
                    ]
                ]
            },
            {
                "title": "Variation C - Debit card timing",
                "lines": [
                    [
                        "You",
                        "When would I receive the debit card?"
                    ],
                    [
                        "Banker",
                        "Usually within seven to ten business days."
                    ],
                    [
                        "You",
                        "Is there a temporary card I can use before then?"
                    ],
                    [
                        "Banker",
                        "We may be able to issue one here."
                    ],
                    [
                        "You",
                        "That would be helpful because I just moved."
                    ],
                    [
                        "Banker",
                        "Let me check."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I only have temporary housing right now.",
            "Official letter.",
            "Are there monthly fees?",
            "Could you explain those conditions slowly?",
            "I don't want surprise charges.",
            "Is there a temporary card?"
        ]
    },
    {
        "id": "G04",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Bank / Card Or Transfer Problem",
        "situation": "카드 결제 문제나 송금 문제",
        "person": "Bank Agent",
        "goal": "declined, pending, international transfer",
        "topics": [
            "declined, pending, international transfer"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Bank Agent",
                        "How can I help you today?"
                    ],
                    [
                        "You",
                        "My card was declined this morning, but I think there should be enough money in the account."
                    ],
                    [
                        "Bank Agent",
                        "I can check that. Was it an online purchase or in person?"
                    ],
                    [
                        "You",
                        "In person, at a grocery store."
                    ],
                    [
                        "Bank Agent",
                        "I see a security hold because the account is new and the transaction pattern changed."
                    ],
                    [
                        "You",
                        "Okay. Can the hold be removed?"
                    ],
                    [
                        "Bank Agent",
                        "Yes, after I verify your identity."
                    ],
                    [
                        "You",
                        "Sure. Also, I have an international transfer that still says pending."
                    ],
                    [
                        "Bank Agent",
                        "When did you send it?"
                    ],
                    [
                        "You",
                        "Two days ago."
                    ],
                    [
                        "Bank Agent",
                        "International transfers can take several business days, but I'll check the status."
                    ],
                    [
                        "You",
                        "Thank you. I just want to make sure nothing is stuck."
                    ]
                ]
            },
            {
                "title": "Variation A - Suspicious charge",
                "lines": [
                    [
                        "You",
                        "I see a charge I don't recognize."
                    ],
                    [
                        "Bank Agent",
                        "What's the amount?"
                    ],
                    [
                        "You",
                        "$48.20 from yesterday."
                    ],
                    [
                        "Bank Agent",
                        "Did you make any purchases around that time?"
                    ],
                    [
                        "You",
                        "Not that I remember. Could we dispute it?"
                    ],
                    [
                        "Bank Agent",
                        "Yes, after we verify a few details."
                    ]
                ]
            },
            {
                "title": "Variation B - International transfer delay",
                "lines": [
                    [
                        "You",
                        "My international transfer is still pending."
                    ],
                    [
                        "Bank Agent",
                        "When was it sent?"
                    ],
                    [
                        "You",
                        "Three business days ago."
                    ],
                    [
                        "Bank Agent",
                        "It may still be processing."
                    ],
                    [
                        "You",
                        "Is there anything I need to do, or just wait?"
                    ],
                    [
                        "Bank Agent",
                        "For now, just wait. I don't see any action required."
                    ]
                ]
            },
            {
                "title": "Variation C - Card declined abroad",
                "lines": [
                    [
                        "You",
                        "My card was declined when I tried to pay online."
                    ],
                    [
                        "Bank Agent",
                        "It may have triggered a security block."
                    ],
                    [
                        "You",
                        "Can we remove the block?"
                    ],
                    [
                        "Bank Agent",
                        "Yes, I'll verify your identity first."
                    ],
                    [
                        "You",
                        "Sure. I also want to make sure it won't happen again immediately."
                    ],
                    [
                        "Bank Agent",
                        "We can add a travel or merchant note."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "I see a charge I don't recognize.",
            "Could we dispute it?",
            "It is still pending.",
            "Is there anything I need to do, or just wait?",
            "It triggered a security block.",
            "I want to make sure it won't happen again."
        ]
    },
    {
        "id": "G05",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Phone Store / New Plan",
        "situation": "휴대폰 개통 / 요금제 문의",
        "person": "Staff",
        "goal": "SIM, data plan, monthly fee",
        "topics": [
            "SIM, data plan, monthly fee"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Staff",
                        "Hi, looking for a new phone plan?"
                    ],
                    [
                        "You",
                        "Yes. I just moved to the U.S., and I need a local number."
                    ],
                    [
                        "Staff",
                        "Do you want prepaid or a monthly plan?"
                    ],
                    [
                        "You",
                        "I'm not sure yet. I want something simple with enough data for maps, email, and video calls."
                    ],
                    [
                        "Staff",
                        "Prepaid might be easiest to start."
                    ],
                    [
                        "You",
                        "That sounds good. Can I use eSIM, or do I need a physical SIM card?"
                    ],
                    [
                        "Staff",
                        "If your phone is unlocked, eSIM should work."
                    ],
                    [
                        "You",
                        "How can I check if it's unlocked?"
                    ],
                    [
                        "Staff",
                        "We can check the device here."
                    ],
                    [
                        "You",
                        "Great. Also, are there activation fees or monthly fees I should know about?"
                    ],
                    [
                        "Staff",
                        "There is a small activation fee on the first bill."
                    ],
                    [
                        "You",
                        "Thanks for telling me. I'm trying to avoid surprises."
                    ]
                ]
            },
            {
                "title": "Variation A - Your phone is locked",
                "lines": [
                    [
                        "Staff",
                        "It looks like your phone may be locked to another carrier."
                    ],
                    [
                        "You",
                        "What does that mean for me?"
                    ],
                    [
                        "Staff",
                        "You may need to contact your old carrier to unlock it."
                    ],
                    [
                        "You",
                        "Can I still get a temporary SIM today?"
                    ],
                    [
                        "Staff",
                        "Not on this phone, unless it's unlocked."
                    ],
                    [
                        "You",
                        "Okay. I'll contact them first."
                    ]
                ]
            },
            {
                "title": "Variation B - Comparing prepaid and monthly",
                "lines": [
                    [
                        "You",
                        "What's the main difference between prepaid and monthly?"
                    ],
                    [
                        "Staff",
                        "Prepaid is simpler and has no long contract."
                    ],
                    [
                        "You",
                        "That sounds better for starting out."
                    ],
                    [
                        "Staff",
                        "Monthly plans can have more features, but more commitment."
                    ],
                    [
                        "You",
                        "I'll start simple, then upgrade if I need to."
                    ],
                    [
                        "Staff",
                        "Good plan."
                    ]
                ]
            },
            {
                "title": "Variation C - Asking about data",
                "lines": [
                    [
                        "You",
                        "How much data do people usually need?"
                    ],
                    [
                        "Staff",
                        "It depends on video and hotspot use."
                    ],
                    [
                        "You",
                        "I mostly need maps, email, and video calls."
                    ],
                    [
                        "Staff",
                        "Then this mid-level plan should be enough."
                    ],
                    [
                        "You",
                        "Does it include hotspot?"
                    ],
                    [
                        "Staff",
                        "Yes, with a limit."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "Locked to another carrier.",
            "Contact your old carrier to unlock it.",
            "No long contract.",
            "More commitment.",
            "I'll start simple.",
            "Does it include hotspot?"
        ]
    },
    {
        "id": "G06",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Customer Service / Billing Error",
        "situation": "고객센터에 요금 오류 문의",
        "person": "Agent",
        "goal": "charge, cancellation, refund",
        "topics": [
            "charge, cancellation, refund"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Agent",
                        "Thank you for calling customer service. How can I help?"
                    ],
                    [
                        "You",
                        "Hi, I noticed a charge on my account that I don't understand."
                    ],
                    [
                        "Agent",
                        "I can look into that. Can you verify your name and email?"
                    ],
                    [
                        "You",
                        "Sure. My name is Jongkuk, and the email is the one ending in gmail.com."
                    ],
                    [
                        "Agent",
                        "Thank you. Which charge are you asking about?"
                    ],
                    [
                        "You",
                        "The $29.99 charge from yesterday. I thought I had canceled the service last week."
                    ],
                    [
                        "Agent",
                        "I see the cancellation request, but it was processed after the billing date."
                    ],
                    [
                        "You",
                        "I understand. Is there any way to request a refund since I haven't used the service?"
                    ],
                    [
                        "Agent",
                        "I can submit a refund request."
                    ],
                    [
                        "You",
                        "Thank you. Could you also send me a confirmation email?"
                    ],
                    [
                        "Agent",
                        "Yes, you'll receive one shortly."
                    ],
                    [
                        "You",
                        "I appreciate your help."
                    ]
                ]
            },
            {
                "title": "Variation A - You ask to escalate politely",
                "lines": [
                    [
                        "You",
                        "I understand your policy, but the charge still seems incorrect."
                    ],
                    [
                        "Agent",
                        "I see."
                    ],
                    [
                        "You",
                        "Is there a supervisor or billing specialist who could review it?"
                    ],
                    [
                        "Agent",
                        "I can transfer you to billing."
                    ],
                    [
                        "You",
                        "Thank you. I appreciate your help."
                    ],
                    [
                        "Agent",
                        "One moment, please."
                    ]
                ]
            },
            {
                "title": "Variation B - Cancellation did not process",
                "lines": [
                    [
                        "You",
                        "I cancelled last week, but my account still shows active."
                    ],
                    [
                        "Agent",
                        "Let me check the cancellation request."
                    ],
                    [
                        "You",
                        "Thank you. I have the confirmation email if that helps."
                    ],
                    [
                        "Agent",
                        "Yes, please read the confirmation number."
                    ],
                    [
                        "You",
                        "It's C-28491."
                    ],
                    [
                        "Agent",
                        "I see it now."
                    ]
                ]
            },
            {
                "title": "Variation C - You ask for written confirmation",
                "lines": [
                    [
                        "You",
                        "Could you send written confirmation of the refund request?"
                    ],
                    [
                        "Agent",
                        "Yes, it will go to your email."
                    ],
                    [
                        "You",
                        "Great. How long does the review usually take?"
                    ],
                    [
                        "Agent",
                        "Three to five business days."
                    ],
                    [
                        "You",
                        "Okay. If I don't hear back, should I call again?"
                    ],
                    [
                        "Agent",
                        "Yes, with the case number."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "The charge still seems incorrect.",
            "Could a billing specialist review it?",
            "I have the confirmation email.",
            "Please read the confirmation number.",
            "Could you send written confirmation?",
            "If I don't hear back..."
        ]
    },
    {
        "id": "G07",
        "collection": "Practical Training",
        "pack": "Local Life Pack",
        "group": "Health / Bank / Phone / Services",
        "place": "Post Office / Shipping",
        "situation": "우체국/택배 보내기",
        "person": "Postal Worker",
        "goal": "국제배송, 주소, tracking",
        "topics": [
            "국제배송, 주소, tracking"
        ],
        "versions": [
            {
                "title": "Natural Dialogue",
                "lines": [
                    [
                        "Postal Worker",
                        "Next in line."
                    ],
                    [
                        "You",
                        "Hi, I'd like to send this package to Korea."
                    ],
                    [
                        "Postal Worker",
                        "What's inside?"
                    ],
                    [
                        "You",
                        "Just documents and a small gift. Nothing fragile or electronic."
                    ],
                    [
                        "Postal Worker",
                        "You'll need to fill out a customs form."
                    ],
                    [
                        "You",
                        "Okay. Is there a cheaper option with tracking?"
                    ],
                    [
                        "Postal Worker",
                        "Yes, this option includes tracking but isn't the fastest."
                    ],
                    [
                        "You",
                        "That's fine. It doesn't have to arrive urgently."
                    ],
                    [
                        "Postal Worker",
                        "Please write the recipient's address and phone number here."
                    ],
                    [
                        "You",
                        "Could you show me exactly where the phone number goes?"
                    ],
                    [
                        "Postal Worker",
                        "Right under the address."
                    ],
                    [
                        "You",
                        "Perfect. Thanks for walking me through it."
                    ]
                ]
            },
            {
                "title": "Variation A - You compare shipping options",
                "lines": [
                    [
                        "Postal Worker",
                        "Do you want priority or standard?"
                    ],
                    [
                        "You",
                        "What's the difference in price and delivery time?"
                    ],
                    [
                        "Postal Worker",
                        "Priority is faster but more expensive."
                    ],
                    [
                        "You",
                        "I don't need the fastest option, but I do need tracking."
                    ],
                    [
                        "Postal Worker",
                        "Then standard with tracking should work."
                    ],
                    [
                        "You",
                        "Great. Let's do that."
                    ]
                ]
            },
            {
                "title": "Variation B - Customs form confusion",
                "lines": [
                    [
                        "You",
                        "I'm not sure how detailed this customs form should be."
                    ],
                    [
                        "Postal Worker",
                        "Just describe the items clearly."
                    ],
                    [
                        "You",
                        "Should I write \"gift\" or list each item?"
                    ],
                    [
                        "Postal Worker",
                        "List each item and estimated value."
                    ],
                    [
                        "You",
                        "Got it. Documents, notebook, and small gift."
                    ],
                    [
                        "Postal Worker",
                        "Perfect."
                    ]
                ]
            },
            {
                "title": "Variation C - Picking up a package",
                "lines": [
                    [
                        "Postal Worker",
                        "How can I help?"
                    ],
                    [
                        "You",
                        "I got a notice that I need to pick up a package."
                    ],
                    [
                        "Postal Worker",
                        "Do you have the notice and ID?"
                    ],
                    [
                        "You",
                        "Yes, both are here."
                    ],
                    [
                        "Postal Worker",
                        "Great. Let me check the tracking number."
                    ],
                    [
                        "You",
                        "Thank you. I wasn't sure if I came to the right location."
                    ]
                ]
            }
        ],
        "usefulExpressions": [
            "What's the difference in price and delivery time?",
            "I don't need the fastest option.",
            "I do need tracking.",
            "How detailed should this form be?",
            "List each item and estimated value.",
            "I got a notice to pick up a package."
        ]
    }
];

  window.ROLEPLAY_CARDS = window.ROLEPLAY_CARDS || [];
  window.ROLEPLAY_CARDS.push.apply(window.ROLEPLAY_CARDS, practicalCards.map(practicalCard));
})();
