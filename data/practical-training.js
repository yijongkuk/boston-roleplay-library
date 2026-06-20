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
        practiceTip: "Add new real-life twists under this same place group whenever a fresh situation comes up."
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        ]
    }
];

  window.ROLEPLAY_CARDS = window.ROLEPLAY_CARDS || [];
  window.ROLEPLAY_CARDS.push.apply(window.ROLEPLAY_CARDS, practicalCards.map(practicalCard));
})();
